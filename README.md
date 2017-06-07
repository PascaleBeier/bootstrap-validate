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
    bootstrapValidate(
        document.getElementById('name'),
        'max:30:Your name must not be longer than 30 characters'
    );
</script>
```

Validating an email address couldn't be easier! We make use of native validation whenever possible.

```html
<div class="form-group">
  <label for="email" class="control-label">Enter your E-Mail</label>
  <div class="input" id="email">
</div>

<script>
bootstrapValidate(document.getElementById('email'), 'email');
</script>
```

## API

the first argument of bootstrapValidate is your element to be validated.
The second argument is a string of rules, whereas:
- Multiple Rules are separated by an amount sign |.
- A Rule starts with its name, see [Available Rules](#available-rules).
- The following arguments are the required rule parameters: `max` only requires a number.
- The last argument is the string to be displayed when validation fails.
- You should not add a custom text to [native rules](#native-rules).
- Single Rule Options are separated by a colon :.

`min:1:Enter a character|max:2:Enter at max 2 characters`

## Available Rules

- Input Elements
  - `min`: (number) Minimal Number of Characters
  - `max`: (number) Maximal Number of Characters
  - `email (**native**)`: Requires a valid E-Mail Address (thanks to [@cmckenzie6](https://github.com/cmckenzie6))

Adding Rules is super easy! Have a look at `src/rules`. and [How to Contribute](#contributing).

## Native Rules

Whenever possible we make use of native browser side validation. You should not add a custom error string
to these methods, as browsers have these localized and bullet-proof.

## Download

### Manually

You can download the latest Release from [rawgit](https://cdn.rawgit.com/PascaleBeier/bootstrap-validate/1.0.4/dist/bootstrap-validate.js).

### npm

`npm i bootstrap-validate`

### bower

`bower install bootstrap-validate --save`

## Browser Support

Works in all recent browsers, and IE 8, may not work below.

## Contributing

Contributing is easy as pie.

1. Fork this Repository
2. run `npm i` inside of the repository
3. run `npm dev` to view changes
4. run `npm build` to build for production
5. Commit your changes, push these to your fork and submit a PR

You will be notified of styling errors - also you can `npm check-style` and `npm fix-style` respectively to check or fix
code styling.

## Testing

Tests are located under `spec/`.
After installing all dependencies with `npm i` you may run `npm test` to spin up [Karma](https://karma-runner.github.io/1.0/index.html)-powered tests.

## License

Licensed under the MIT License, see [LICENSE](LICENSE.md).
