## React Native Typescript Boilerplate

📖 [GitBook](https://abdulhamidoumer.gitbook.io/rn-ts-boilerplate/)

**Disclaimer**: Current version of the template might not be too optimal for production builds.

This is a react native boileplate that is currently underd development. Some of the tools used include

- Redux with Redux Saga
- Redux Toolkit
- React Native Splash Screen
- React Native Navigation
- Custom Generator And Setter Scripts

## Current features

- To test out the template with your own app use the command

  ```
  npx react-native init myapp --template https://github.com/abdulhamidOumer/react-native-typescript-boilerplate.git
  ```

- Setting both Android and IOS app icons just by providing a single image by using the prebuilt command line interface. Platform specific Image dimensions are handled by default in the boileplate.
  ```
  yarn set
  ```
- Generating Components and Slices(Reducers, actions & Saga) by using the command line interface.
  ```
  yarn generate
  ```

## Commands to try till stable version

- To set ios & android icons as well as change Splashscreen image use
  `yarn set` or `npm run set`. Asset images live in `src/assets/images`
- To generate slices or components use `yarn generate` or `npm run generate`.

### Inspirations

- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- [React Boilerplate CRA Template](https://github.com/react-boilerplate/react-boilerplate-cra-template)
