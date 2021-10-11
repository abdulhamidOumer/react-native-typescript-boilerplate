## Spalsh Screen

One Important part of a native application is a splash screen. It is the screen in which you can show your app logo or something else until the device loads up your App.

On this template we are using [react-native-splash-screen](https://www.npmjs.com/package/react-native-splash-screen) to achieve that. The configuration for both IOS and Android is set up so you won't need to get in to native codes unless you want to customize some specific looks. You can also run `yarn set` to change the logos for the splash screen.

The splash screen is hidden via our react native code. For now the hide action is trigered from `src/App.tsx` component mount. You can utilize this feature based on your needs, for example you might want to hide the splash screen when you have loaded a certain resource from your API.

### Changing Splashscreen Logo

```
yarn set
```

Will allow you to change splash screen logo for both Android and IOS or for either of the platforms.

### Editing Native Looks

**For IOS**: Open your project via XCode and you will find a `LaunchScreen` file inside your projects navigator.

**For Android**: The initial view of your splash screen can be found in `android/app/src/main/res/drawable/background_splash.xml`. The secondary view which is controlled by `react-native-splash-screen` can be found in `android/app/src/main/res/layout/launc_screen.xml`.
