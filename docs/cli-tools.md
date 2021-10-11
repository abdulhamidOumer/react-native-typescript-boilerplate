## CLI Tools

### Generators

```
yarn generate
```

Generators in this template are used to create boilerplate `Component` and `redux toolkit sices` Codes. You can also run `yarn generate <part> ` to skip the initial CLI input.

### Setters

```
yarn set
```

This command is used to set native related assets for your app. One pain point of working with react native is generating app icons with their corrosponding platform size guidelines. By using this command you will be able to generate both Android and IOS app icons as well as splash screen icons based on the platform recommended size guideline just from one picture.

{% hint style="info" %}

Pictures that you want to use as app icon or as a splash screen icon need to be inside `src/assets`.

{% endhint %}

### Unit Testing

```
yarn test
```

Unit tests specified in the \*_/**tests**/_.ts files throughout the application are run.
