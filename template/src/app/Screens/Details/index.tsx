/**
 *
 * Details
 *
 */
import {
  IconedDescription,
  IconedDescriptionProps,
} from 'app/Components/Home/IconedDescription';
import * as React from 'react';

import {
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  Dimensions,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { colors } from 'app/constants/theme';

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DetailsScreen(props: Props) {
  const isDark = useColorScheme() === 'dark';
  const styles = getStyles(isDark);

  const fullBoilerplateDetails: Array<IconedDescriptionProps> = [
    {
      isDarkMode: isDark,
      title: 'Splash Screen',
      description:
        'The boilerplate comes with a functional Splash Screen for both Android and IOS. Hiding the splash screen can also be controlled right from your React code.',
      icon: (
        <FontAwesomeIcon name="mobile" size={30} color={colors.primary[3]} />
      ),
    },
    {
      isDarkMode: isDark,
      title: 'Navigation',
      description:
        'Screen navigations are by default supported by the boileplate. Achieved using the @react-navigation/native package.',
      icon: (
        <FontAwesomeIcon
          name="directions"
          size={30}
          color={colors.primary[3]}
        />
      ),
    },
    {
      isDarkMode: isDark,
      title: '8 Icon Packs',
      description:
        'The boilerplate comes with 8 famous icon packs for use in your app.',
      icon: (
        <FontAwesomeIcon name="icons" size={30} color={colors.primary[3]} />
      ),
    },
    {
      isDarkMode: isDark,
      title: 'Redux Toolkit',
      description:
        'Use Redux to manage your state. With other additional middlewares like Redux Saga to manage asynchronous tasks',
      icon: (
        <FontAwesomeIcon name="database" size={30} color={colors.primary[3]} />
      ),
    },
    {
      isDarkMode: isDark,
      title: 'Gnerators',
      description:
        'Generate your compoents or slices easily using the built in command line interface.',
      icon: (
        <FontAwesomeIcon name="hammer" size={30} color={colors.primary[3]} />
      ),
    },
    {
      isDarkMode: isDark,
      title: 'Setters',
      description:
        'Set your App Icon and Splashscreen icon right from the boilerplate. No need for external platforms to resize image dimesions.',
      icon: <FontAwesomeIcon name="cog" size={30} color={colors.primary[3]} />,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>Boilerplate Details</Text>
      <Text style={styles.description}>
        Here's a list of features included in the current verion of React Native
        Typescript Boilerplate.
      </Text>
      {fullBoilerplateDetails.map((item, index) => (
        <IconedDescription key={`full-description-${index}`} {...item} />
      ))}
    </ScrollView>
  );
}

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      minHeight: Dimensions.get('window').height,
      backgroundColor: isDarkMode ? Colors.darker : Colors.white,
      padding: 20,
    },
    mainTitle: {
      fontSize: 24,
      color: isDarkMode ? Colors.white : Colors.black,
      fontWeight: 'bold',
    },
    description: {
      color: isDarkMode ? Colors.white : Colors.black,
      marginVertical: 10,
    },
  });
