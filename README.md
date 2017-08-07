# bootstrap-validate

> A simple Form Validation Utility for Bootstrap which does not depend on jQuery.

[![Demo](demo.gif)](#)


## Documentation

Read the Documentation at [bootstrap-validate.js.org](https://bootstrap-validate.js.org)
which resides below `docs`.

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

Tests are located under `__tests__/`.
After installing all dependencies you may run `yarn test` or `npm run test` to spin up [Jest](https://facebook.github.io/jest/)-powered tests.

## License

Licensed under the MIT License, see [LICENSE](LICENSE.md).
