# bootstrap-validate
[![Unit Tests](https://img.shields.io/github/actions/workflow/status/PascaleBeier/bootstrap-validate/unit-test.yml?branch=main&label=tests)](https://github.com/PascaleBeier/bootstrap-validate/actions/workflows/unit-test.yml)
[![Lint](https://img.shields.io/github/actions/workflow/status/PascaleBeier/bootstrap-validate/lint.yml?branch=main&label=lint)](https://github.com/PascaleBeier/bootstrap-validate/actions/workflows/lint.yml)
[![Docs](https://img.shields.io/github/actions/workflow/status/PascaleBeier/bootstrap-validate/docs.yml?branch=main&label=docs)](https://github.com/PascaleBeier/bootstrap-validate/actions/workflows/docs.yml)
[![GitHub Actions Security](https://img.shields.io/github/actions/workflow/status/PascaleBeier/bootstrap-validate/actions-security.yml?branch=main&label=actions%20security)](https://github.com/PascaleBeier/bootstrap-validate/actions/workflows/actions-security.yml)
[![Release](https://img.shields.io/github/v/release/PascaleBeier/bootstrap-validate?label=release)](https://github.com/PascaleBeier/bootstrap-validate/releases)
[![npm](https://img.shields.io/npm/v/bootstrap-validate?label=npm)](https://www.npmjs.com/package/bootstrap-validate)
[![Downloads](https://img.shields.io/npm/dt/bootstrap-validate)](https://www.npmjs.com/package/bootstrap-validate)
[![License](https://img.shields.io/github/license/PascaleBeier/bootstrap-validate)](LICENSE.md)

> A simple Form Validation Utility for Bootstrap 3, Bootstrap 4 for Humans.

[![Demo](.github/images/demo.gif)](#)

## Supported Versions

| bootstrap-validate Version | Bootstrap Version | Documentation                |
-----------------------------|-------------------|-------------------------------
| v1 | Bootstrap 3 | [v1 Download + Docs](https://bootstrap-validate.js.org/v1) |
| v2 | Bootstrap 4 | [v2 Download + Docs](https://bootstrap-validate.js.org/v2) |

## Documentation

Read the Documentation at [bootstrap-validate.js.org](<https://bootstrap-validate.js.org>).

## Quick Start

```bash
$ npm i bootstrap-validate
```

Include the bootstrap-validate.js script:

```html
<script defer="defer" src="bootstrap-validate.js"></script>
```

We want the `#name` to be not longer than 30 characters!

```html
<div class="form-group">
    <label class="control-label">Enter a Name</label>
    <input id="name">
</div>

<script>
bootstrapValidate('#name', 'max:30:Your name must not be longer than 30 characters');
</script>
```

Validating an `#email` address couldn't be easier!

```html
<div class="form-group">
  <label for="email" class="control-label">Enter your E-Mail</label>
  <input class="input" id="email">
</div>

<script>
bootstrapValidate('#email', 'email:Enter a valid email address');
</script>
```

## More Features!

See the v2 Documentation on <https://bootstrap-validate.js.org/v2/> to
see all available validation features, examples, and usage with module bundlers.

## Examples

See [examples/](Examples) for real-world usage.

## Download

You can find current Releases under [Releases](<https://github.com/PascaleBeier/bootstrap-validate/releases>) and
older Releases for Bootstrap 3 and Bootstrap 4 in the [Download Archive](https://bootstrap-validate.js.org/v2/download.html).

## Changelog

See [CHANGELOG](CHANGELOG.md).

## Tests

Validation Rules are at least unit-tested. Use `npm test` to spin up the test suites.
## License

Licensed under the MIT License, see [LICENSE](LICENSE.md).
