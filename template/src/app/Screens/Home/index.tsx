/**
 *
 * Home
 *
 */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigationStacks } from 'app/Navigations/types';
import * as React from 'react';
import {
  View,
  Text,
  Button,
  useColorScheme,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={rnBpLogo} />
      <Text style={styles.title}>React Native Typescript Boilerplate</Text>
      <Button title="See More" onPress={goToDetailsScreen} />
    </View>
  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDark ? Colors.darker : '#fff',
      flex: 1,
      padding: 20,
    },
    logo: {
      width: Dimensions.get('window').width - 40,
      height: 128,
      borderRadius: 8,
    },
    title: {
      color: isDark ? '#fff' : '#000',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'center',
    },
    seeMore: {
      backgroundColor: 'blue',
    },
  });
