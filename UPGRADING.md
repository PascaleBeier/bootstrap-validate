# Upgrading

## to v3

### Before:

```html
<form id="address-form">
  <input id="first-name">
  <input id="last-name">
<button type="submit">Submit form</button>
</form>

<script>
  bootstrapValidate('#first-name', 'contains:Peter|required')
</script>
```

### After:

```html
<form id="address-form">
  <input id="first-name">
  <input id="last-name">
<button type="submit">Submit form</button>
</form>

<script>
  var AddressFormValidator = BootstrapValidate('#address-form')
    .bootstrap(4)
    .field('#first-name').required().contains('Peter')
    // Additional fields ...


  AddressFormValidator.validate();

</script>
```
