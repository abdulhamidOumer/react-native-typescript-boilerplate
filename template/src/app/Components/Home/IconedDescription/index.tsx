/**
 *
 * IconedDescription
 *
 */
import React, { memo, ReactNode } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export interface IconedDescriptionProps {
  title: string;
  description: string;
  icon: ReactNode;
  isDarkMode: boolean;
}

export const IconedDescription = memo((props: IconedDescriptionProps) => {
  const styles = getStyles(props.isDarkMode);
  return (
    <View style={styles.container}>
      {props.icon}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
});

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginVertical: 10,
    },

    textContainer: {
      flexDirection: 'column',
      marginTop: 3,
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
    },
    description: {
      color: isDarkMode ? '#fff' : '#000',
      marginTop: 5,
    },
  });
