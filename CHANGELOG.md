# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [unreleased]

- TBD, see <https://github.com/PascaleBeier/bootstrap-validate/discussions/65>

## [2.2.4] - 2021-09-10

> Security Updates

### Improvements

- Bump dependencies

## [2.2.3] - 2021-08-09

> Security Updates, CI improvements, a Bug Fix and Documentation sunsetting.
>
> You can find Documentation for previous Releases under
> <https://bootstrap-validate.js.org/v1> and
> <https://bootstrap-validate.js.org/v2> respectively.

### Fixed

- Fixed a case were inArray would return false positives

### Improvements

- Reduced Bundle Size
- Added package.module Entry point
- Switched to Hugo for Documentation Rendering
- Added old documentations to public documentation

## [2.2.1] - 2020-04-05

> Security Updates

## [2.2.0] - 2019-02-26

### Added

- Added new `inArray` Rule, allowing to validate an input against an array of strings.
- Updated Dependencies

## [2.1.3] - 2018-05-23

### Fixed

- Enable the use of the colon symbol `:` in the regex rule.

## [2.1.2] - 2018-05-05

### Fixed

- Use arbitrary-precision decimal arithmetic

## [2.1.1] - 2018-05-04

### Fixed

- Fixed floating numbers divisions

## [2.1.0] - 2018-05-04

### Added

- Rule: divisible
- Rule: regex
- Rule: ISO8601 (date format yyyy-mm-dd)

## [2.0.2] - 2018-04-24

### Fixed

- Fixed Hexadecimal values passing integer validation. (#22)

## [2.0.1] - 2018-04-11

### Fixed

- Fixed UMD Bundle for Webpack / ES6 Usage

## [2.0.0] - 2018-01-31

This is a big one! Dropping Bootstrap v3 for that bright'n'shiny Bootstrap 4!

### Added

- Feature: You can now use HTML in your error messages. You do need to escape it yourself for the moment.

```javascript
bootstrapValidate('#prename', 'min:20:Enter at least <strong>20</strong> characters.');
```

- Feature: You can now pass an Array of Elements or Selectors as first Argument, for example:

```javascript
bootstrapValidate(['#prename', '#lastname'], 'min:20:Enter at least 20 characters!');
```

This can come in handy when you are applying identical sets of rules and options to multiple input elements.

- Rule: startsWith [fff8678](https://github.com/PascaleBeier/bootstrap-validate/commit/fff867887914a97876ae66c0b4867d46c17a02b6)
- Rule: endsWith [aa51798](https://github.com/PascaleBeier/bootstrap-validate/commit/aa51798fd7702183c683021a60fb8705e0306d2b)
- Rule: matches [208a5cf](https://github.com/PascaleBeier/bootstrap-validate/commit/208a5cf7ab17add9da153addcdcf90eefb9529be)
- Rule: alpha

### Removed

- Polyfills for element.closest() and element.classList().

### Other

- Documentation cleaning
- Housekeeping: Removed most handmade helpers and replaced them with the battle-proven lodash helpers. This drastically improves maintainability and stability.

## [1.0.11] - 2017-08-07

### Added

- Rule: contains

## [1.0.10] - 2017-07-27

### Added

- Rule: alphanum
- Rule: numeric
- Rule: url
- Rule: integer

## [1.0.9] - 2017-07-20

### Added

- Unit Tests

### Fixed

- Fix adding .has-error class to parent element ([#8](https://github.com/PascaleBeier/bootstrap-validate/issues/8))

## [1.0.8] - 2017-07-19

### Added

- Support QuerySelector Notation for Reference Element, enabling you to write

```js
bootstrapValidate('#email', ...)
```

instead of

```js
bootstrapValidate(document.querySelector('#email'), ...)
```

This is a non-breaking change - the old notation is still possible.


## [1.0.7] - 2017-06-16

## [1.0.6] - 2017-06-14

## [1.0.5] - 2017-06-07

## [1.0.4] - 2017-06-07

## [1.0.3] - 2017-06-06

## [1.0.2] - 2017-06-06

## [1.0.1] - 2017-06-06

## [1.0.0] - 2017-06-06

> Initial Release

[unreleased]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.2.3...HEAD
[2.2.4]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.2.2...v2.2.3
[2.2.3]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.2.2...v2.2.3
[2.2.2]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.1.3...v2.2.0
[2.1.3]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.0.2...v2.1.0
[2.0.2]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/PascaleBeier/bootstrap-validate/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.11...v2.0.0
[1.0.11]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.10...1.0.11
[1.0.10]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.9...1.0.10
[1.0.9]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.8...1.0.9
[1.0.8]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.7...1.0.8
[1.0.7]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.6...1.0.7
[1.0.6]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.5...1.0.6
[1.0.5]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.4...1.0.5
[1.0.4]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/PascaleBeier/bootstrap-validate/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/PascaleBeier/bootstrap-validate/commit/aa4fbffa625dc389292cc1246bd04573f9371e93

