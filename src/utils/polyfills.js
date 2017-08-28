// Polyfill for classList
(function() {
  // Helpers.
  var trim = function(s) {
      return s != null ? s.replace(/^\s+|\s+$/g, "") : "";
    },
    regExp = function(name) {
      return new RegExp("(^|\\s+)" + name + "(\\s+|$)");
    },
    forEach = function(list, fn, scope) {
      for (var i = 0; i < list.length; i++) {
        fn.call(scope, list[i]);
      }
    };

  // Class list object with basic methods.
  function ClassList(element) {
    this.element = element;
  }

  ClassList.prototype = {
    add: function() {
      forEach(
        arguments,
        function(name) {
          if (!this.contains(name)) {
            this.element.className = trim(this.element.className + " " + name);
          }
        },
        this
      );
    },
    remove: function() {
      forEach(
        arguments,
        function(name) {
          this.element.className = trim(
            this.element.className.replace(regExp(name), " ")
          );
        },
        this
      );
    },
    toggle: function(name) {
      return this.contains(name)
        ? (this.remove(name), false)
        : (this.add(name), true);
    },
    contains: function(name) {
      return regExp(name).test(this.element.className);
    },
    item: function(i) {
      return this.element.className.split(/\s+/)[i] || null;
    },
    // bonus
    replace: function(oldName, newName) {
      this.remove(oldName), this.add(newName);
    }
  };

  // IE8/9, Safari
  // Remove this if statements to override native classList.
  if (!("classList" in Element.prototype)) {
    // Use this if statement to override native classList that does not have for example replace() method.
    // See browser compatibility: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Browser_compatibility.
    // if (!('classList' in Element.prototype) ||
    //     !('classList' in Element.prototype && Element.prototype.classList.replace)) {
    Object.defineProperty(Element.prototype, "classList", {
      get: function() {
        return new ClassList(this);
      }
    });
  }

  // For others replace() support.
  if (window.DOMTokenList && !DOMTokenList.prototype.replace) {
    DOMTokenList.prototype.replace = ClassList.prototype.replace;
  }
})();
// Polyfill for element.closest and element.matches.
import "element-closest";
