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

## API

the first argument of bootstrapValidate is your element to be validated.
The second argument is a string of rules, whereas:
- Multiple Rules are separated by an amount sign |.
- A Rule starts with its name, see [Available Rules](#available-rules).
- The following arguments are the required rule parameters: `max` only requires a number.
- The last argument is the string to be displayed when validation fails.
- Single Rule Options are separated by a colon :.

`min:1:Enter a character|max:2:Enter at max 2 characters`

## Available Rules

- Input Elements
  - `min`: (number) Minimal Number of Characters
  - `max`: (number) Maximal Number of Characters

Adding Rules is super easy! Have a look at `src/rules`. and [How to Contribute](#contributing).

## Contributing

Contributing is easy as pie. 

1. Fork this Repository
2. run `npm i` inside of the repository
3. run `npm run dev` to view changes
4. run `npm run build` to build for production
5. Commit your changes, push these to your fork and submit a PR

(You can use or create new files below `examples` until I got tests ready)

## License

Licensed under the MIT License, see [LICENSE.md](LICENSE).