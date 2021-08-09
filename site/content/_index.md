---
title: "bootstrap-validate"
layout: "default"
description: "Form Validation for Bootstrap 5 for Humans."
url: /
---

> A simple Form Validation Utility for Bootstrap 3, Bootstrap 4, and Bootstrap 5 for Humans.

{{< hint danger >}}
**Upcoming Version**\
You are currently looking at the documentation for the upcoming version of **bootstrap-validate**.

Use the links in the table below to browse documentation for older releases.

Join our discussion on <https://github.com/PascaleBeier/bootstrap-validate/discussions/65> to give
feedback for this upcoming Release!

{{< /hint >}}

## Supported Versions

| bootstrap-validate Version | Bootstrap Version | Documentation                |
-----------------------------|-------------------|-------------------------------
| v1 | Bootstrap 3 | [v1 Download + Docs](/v1) |
| v2 | Bootstrap 4 | [v2 Download + Docs](/v2) |
| v3 (Upcoming) | Bootstrap 5, Bootstrap 4? | [v3 Download + Docs](https://bootstrap-validate.js.org)    |

## Quick Start

1. Include the bootstrap-validate.js script:

```html
<script src="bootstrap-validate.js"></script>
```

2. Setup Validation for your Input Elements:

Imagine the following HTML:
```html
<div class="form-group">
    <label class="control-label">Enter a Name</label>
    <input id="name">
</div>
```

Now you want a Name to be at max 30 characters long and add the following:

```javascript
bootstrapValidate('#name', 'max:30:Your name must not be longer than 30 characters');
```

Validating an email address couldn't be easier!

```html
<div class="form-group">
  <label for="email" class="control-label">Enter your E-Mail</label>
  <div class="input" id="email">
</div>

<script>
bootstrapValidate('#email', 'email:Enter a valid email address');
</script>
```
