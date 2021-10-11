/**
 *
 * Home
 *
 */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigationStacks } from 'app/Navigations/types';
import { colors } from 'app/constants/theme';
import * as React from 'react';
import {
  Text,
  Button,
  useColorScheme,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  IconedDescription,
  IconedDescriptionProps,
} from 'app/Components/Home/IconedDescription';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const rnBpLogo = require('../../../assets/images/RNTB-Wide.png');

interface Props {}

type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootNavigationStacks,
  'Home'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen(props: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  const navigation = useNavigation<HomeScreenNavigationProps>();
  const goToDetailsScreen = () => {
    navigation.navigate('Details');
  };

  const iconedContents: Array<IconedDescriptionProps> = [
    {
      isDarkMode,
      title: 'Gnerators',
      description:
        'Generate your compoents or slices easily using the built in command line interface.',
      icon: (
        <FontAwesomeIcon name="hammer" size={30} color={colors.primary[3]} />
      ),
    },
    {
      isDarkMode,
      title: 'Setters',
      description:
        'Set your App Icon and Splashscreen icon right from the boilerplate. No need for external platforms to resize image dimesions.',
      icon: <FontAwesomeIcon name="cog" size={30} color={colors.primary[3]} />,
    },
    {
      isDarkMode,
      title: 'Redux Toolkit',
      description:
        'Use Redux via Redux Toolkit to manage your state. With other additional middlewares like Redux Saga to manage asynchronous tasks',
      icon: (
        <FontAwesomeIcon name="database" size={30} color={colors.primary[3]} />
      ),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={rnBpLogo} />
      {/* <Text style={styles.title}>React Native Typescript Boilerplate</Text> */}
      <Text style={styles.description}>
        Kick off your React Native project with all the tools integrated right
        in to one template. Escape from the repitive task of setting up your
        development environment.
      </Text>

      {/* <Text style={styles.whatWillYouGet}>What will you get ?</Text> */}

      {iconedContents.map((iconedContent, index) => (
        <IconedDescription
          key={`iconed-description-${index}`}
          {...iconedContent}
        />
      ))}

      <Button title="See More" onPress={goToDetailsScreen} />
    </ScrollView>
  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDark ? Colors.darker : Colors.white,
      padding: 20,
      minHeight: '100%',
    },
    logo: {
      width: Dimensions.get('window').width - 40,
      height: 228,
      borderRadius: 8,
    },
    title: {
      color: isDark ? Colors.white : Colors.darker,
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20,
    },
    description: {
      color: isDark ? Colors.white : Colors.darker,
      marginTop: 10,
    },
    whatWillYouGet: {
      color: isDark ? Colors.white : Colors.darker,
      marginVertical: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    seeMore: {
      backgroundColor: 'blue',
    },
  });
