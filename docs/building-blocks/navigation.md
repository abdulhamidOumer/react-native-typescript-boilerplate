# Navigation

Navigation is used in your native app to naviage users between different screens. Most Apps will have multiple screens and this template handles navigation by using [React Navigation](https://reactnavigation.org/).

Read the detailed [react navigation documentation](https://reactnavigation.org/docs/getting-started) before implementing navigations between your screens.

The template comes with an example navigation implementation which you can find in `src/Navigations/index.tsx`

```ts
const MainNavigator = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: isDark ? Colors.darker : Colors.white,
            },
            headerTitleStyle: {
              color: isDark ? Colors.white : Colors.black,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

Referred above is the main navigations for the template. You can customize the navigations based on your needs. If your app contains a logged in state you might also need to implement two different navigations based on the user state and conditionally render the navigation at `src/App.tsx` like this :

```ts
const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const store = configureAppStore();

  const [isLogedIn, setIsLogedIn] = useState(false);

  const checkLoggedInstate = async () => {
    const state = await AsyncStorage.getItem("USER_TOKEN");
    setIsLogedIn(Boolean(state));
    SplashScreen.hide();
  };

  useEffect(() => {
    checkLoggedInstate();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        {isLogedIn ? <MainNavigator /> : <LogedOutNavigator />}
      </SafeAreaView>
    </Provider>
  );
};
```
