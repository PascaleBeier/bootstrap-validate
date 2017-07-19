# bootstrap-validate

> A simple Form Validation Utility for Bootstrap which does not depend on jQuery.

[![Demo](demo.gif)](#)

## Usage

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

```html
<script>
    bootstrapValidate('#name', 'max:30:Your name must not be longer than 30 characters');
</script>
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

## Documentation

You can find the Work in Progress Documentation at [bootstrap-validate.js.org](https://bootstrap-validate.js.org)
which resides below `docs`.

## API

the first argument of bootstrapValidate is your element to be validated.
If the first argument is no nodeElement, we try *querySelector*ing it.
Therefore, you pass any string as you would for [document.querySelector](https://developer.mozilla.org/de/docs/Web/API/Document/querySelector).
For those lazy guys out there :p

The second argument is a string of rules, whereas:
- Rules are separated by an amount sign **|**

`rule1|rule2|rule3`

- Options are separated by a colon **:**.

`option1:option2:option3`

`rule1:option1|rule2:option1:option2|rule3`

- The following arguments are the required rule parameters: `max` only requires a number.

`max:20`

- The last argument is the **error text**

`max:20:Enter no more than 20 characters.`

- If a rule takes no additional arguments, you give the error message as only option.

`min:1:Enter a character|max:2:Enter at max 2 characters|email:Enter a valid email`

## Available Rules

- Input Elements
  - `min`: (number) Minimal Number of Characters
  - `max`: (number) Maximal Number of Characters
  - `email`: Requires a valid E-Mail Address (thanks to [@cmckenzie6](https://github.com/cmckenzie6))
  - `required`: Requires an input to be filled

Adding Rules is super easy! Have a look at `src/rules`. and [How to Contribute](#contributing).

## Browser Support

Works in all recent browsers including IE >= 8, may or may not work below.

## Motivation

The main development goal is to provide a super simple API easily usable by non-devs while providing
decent browser support, build tooling and omitting jQuery. I mean we all love ES6+ right?

## Download

### Manually

You can download the latest Release (tag) from [rawgit](https://cdn.rawgit.com/PascaleBeier/bootstrap-validate/1.0.8/dist/bootstrap-validate.js).

Please don't use the master branch as it's not supposed to be stable at all times.

### With a package manager

#### npm

`npm i bootstrap-validate`

#### yarn

`yarn add bootstrap-validate`

#### bower

`bower install bootstrap-validate --save`

## Contributing

Contributing is easy as pie, no matter if you want to contribute to the upcoming
documentation or the code itself.

### Code

This library is built using *node.js* and *webpack*. You will need to setup node.js for your OS to
start contributing.

1. Fork this Repository
2. Install all dependencies with your favourite node.js package manager - We recommend [yarn](https://yarnpkg.com) whatsoever.
3. Checkout a new branch (e.g. `git checkout -b "feature/error-icons"`)
3. Run `npm run dev` to view changes
4. Run `npm run build` to build for production
5. Add your Changes via `git add -A`
6. Commit your changes - this is where your Code Style gets fixed automagically
7. Push your newly created branch to your origin Repo through `git push -u origin feature/error-icons`
8. Submit a PR through GitHub

Code Style changes should be applied automatically when committing - also you can `npm run check-style` and `npm run fix-style` respectively to check or fix
code styling.

### Documentation

Building the documentation is almost the same as building the code.

You only need to run `npm run docs:dev` instead of `npm run dev` and
`npm run docs:build` instead of `npm run build`.

The docs reside below `docs/` and are built with webpack and pug.

## Tests

Tests are located under `spec/`.
After installing all dependencies you may run `npm run test` to spin up [Karma](https://karma-runner.github.io/1.0/index.html)-powered tests.

## License

Licensed under the MIT License, see [LICENSE](LICENSE.md).
