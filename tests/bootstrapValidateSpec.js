import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import bootstrapValidate from "../src/bootstrap-validate";

function inputEvent() {
  return new Event("input", { bubbles: true, cancelable: true });
}

function changeEvent() {
  return new Event("change", { bubbles: true, cancelable: true });
}

describe("bootstrapValidate", () => {
  let warn;

  beforeEach(() => {
    document.body.innerHTML = "";
    warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    warn.mockRestore();
  });

  it("warns and skips missing selectors", () => {
    expect(() => bootstrapValidate("#missing", "required:Required")).not.toThrow();
    expect(warn).toHaveBeenCalledWith('[bootstrap-validate] Input "#missing" was not found.');
  });

  it("warns and skips unknown rules", () => {
    document.body.innerHTML = '<div class="form-group"><input id="name"></div>';
    const handle = bootstrapValidate("#name", "madeup:Nope");

    expect(handle.validate()).toBe(true);
    expect(warn).toHaveBeenCalledWith('[bootstrap-validate] Unknown rule "madeup" skipped.');
  });

  it("validates select fields on change for select2-style integrations", () => {
    document.body.innerHTML = `
      <div class="form-group">
        <select id="group">
          <option value=""></option>
          <option value="1">One</option>
        </select>
      </div>
    `;
    const select = document.querySelector("#group");
    const handle = bootstrapValidate("#group", "required:This is required!");

    expect(handle.validate()).toBe(false);
    expect(select.classList.contains("is-invalid")).toBe(true);

    select.value = "1";
    select.dispatchEvent(changeEvent());

    expect(select.classList.contains("is-invalid")).toBe(false);
    expect(document.querySelector(".invalid-feedback").style.display).toBe("none");
  });

  it("treats empty non-required fields as valid", () => {
    document.body.innerHTML = '<div class="form-group"><input id="url"></div>';
    const handle = bootstrapValidate("#url", "url:Enter a valid URL");

    expect(handle.validate()).toBe(true);
    expect(document.querySelector(".invalid-feedback")).toBeNull();
  });

  it("keeps required fields invalid when optional companion rules pass empty values", () => {
    document.body.innerHTML = '<div class="form-group"><input id="email"></div>';
    const input = document.querySelector("#email");
    const handle = bootstrapValidate("#email", "required:Email required|email:Invalid email");

    expect(handle.validate()).toBe(false);
    expect(input.classList.contains("is-invalid")).toBe(true);
    expect(document.querySelector(".invalid-feedback").textContent).toBe("Email required");
  });

  it("returns handles that can validate before form submit", () => {
    document.body.innerHTML = `
      <form id="account">
        <div class="form-group"><input id="email"></div>
        <div class="form-group"><input id="password"></div>
      </form>
    `;
    const form = document.querySelector("#account");
    const handles = [
      bootstrapValidate("#email", "required:Email required|email:Enter a valid email"),
      bootstrapValidate("#password", "required:Password required"),
    ];
    form.addEventListener("submit", (event) => {
      const isValid = handles.map((handle) => handle.validate()).every(Boolean);
      if (!isValid) event.preventDefault();
    });

    const event = new Event("submit", { bubbles: true, cancelable: true });
    form.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(document.querySelectorAll(".invalid-feedback")).toHaveLength(2);
  });

  it("destroys registered listeners", () => {
    document.body.innerHTML = '<div class="form-group"><input id="name"></div>';
    const input = document.querySelector("#name");
    const handle = bootstrapValidate("#name", "required:Required");
    handle.destroy();

    input.dispatchEvent(inputEvent());

    expect(input.classList.contains("is-invalid")).toBe(false);
    expect(document.querySelector(".invalid-feedback")).toBeNull();
  });

  it("renders separate messages for the same regex rule on multiple fields", () => {
    document.body.innerHTML = `
      <div class="form-group">
        <input id="first">
        <input id="second">
      </div>
    `;
    const first = document.querySelector("#first");
    const second = document.querySelector("#second");
    bootstrapValidate("#first", "regex:^[0-9]+$:First must be numeric");
    bootstrapValidate("#second", "regex:^[0-9]+$:Second must be numeric");

    first.value = "abc";
    second.value = "def";
    first.dispatchEvent(inputEvent());
    second.dispatchEvent(inputEvent());

    expect(
      Array.from(document.querySelectorAll(".invalid-feedback")).map((item) => item.textContent),
    ).toEqual(["First must be numeric", "Second must be numeric"]);
  });

  it("renders independent messages for duplicate regex rules", () => {
    document.body.innerHTML = '<div class="form-group"><input id="password"></div>';
    const input = document.querySelector("#password");
    bootstrapValidate(
      "#password",
      "regex:[0-9]:Needs a number|regex:[A-Z]:Needs an uppercase letter",
    );

    input.value = "abc";
    input.dispatchEvent(inputEvent());

    expect(
      Array.from(document.querySelectorAll(".invalid-feedback")).map((item) => item.textContent),
    ).toEqual(["Needs a number", "Needs an uppercase letter"]);
  });

  it("revalidates matches rules when the referenced field changes", () => {
    document.body.innerHTML = `
      <div class="form-group"><input id="password"></div>
      <div class="form-group"><input id="confirm"></div>
    `;
    const password = document.querySelector("#password");
    const confirm = document.querySelector("#confirm");
    const handle = bootstrapValidate("#confirm", "matches:#password:Passwords must match");

    password.value = "first";
    confirm.value = "second";
    expect(handle.validate()).toBe(false);

    password.value = "second";
    password.dispatchEvent(inputEvent());

    expect(document.querySelector(".invalid-feedback").style.display).toBe("none");
  });

  it("revalidates requiredUnless rules when the referenced field changes", () => {
    document.body.innerHTML = `
      <div class="form-group"><input id="primary"></div>
      <div class="form-group"><input id="secondary"></div>
    `;
    const secondary = document.querySelector("#secondary");
    const handle = bootstrapValidate(
      "#primary",
      "requiredUnless:#secondary:Enter at least one email",
    );

    expect(handle.validate()).toBe(false);

    secondary.value = "team@example.com";
    secondary.dispatchEvent(inputEvent());

    expect(document.querySelector(".invalid-feedback").style.display).toBe("none");
  });

  it("supports synchronous custom rules", () => {
    document.body.innerHTML = '<div class="form-group"><input id="code"></div>';
    const input = document.querySelector("#code");
    bootstrapValidate.extendRule("evenLength", (element) => element.value.length % 2 === 0);
    const handle = bootstrapValidate("#code", "evenLength:Use an even number of characters");

    input.value = "abc";
    expect(handle.validate()).toBe(false);

    input.value = "abcd";
    expect(handle.validate()).toBe(true);
  });
});
