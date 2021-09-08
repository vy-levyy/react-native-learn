/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/assets/theme';
import {MenuRow} from './src/components/MenuRow/MenuRow';
import {Leads} from './src/pages/Leads/Leads';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  console.log('### windowWidth ->', windowWidth);
  console.log('### windowHeight ->', windowHeight);
  console.log(
    '### Dimensions.get(window).height - 273 ->',
    Dimensions.get('window').height - 273,
  );
  console.log('### Platform ->', Platform)
  return (
    <SafeAreaView style={styles.root}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <Leads /> */}
      {/* <MenuRow /> */}
      <Leads />
      <MenuRow />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.blue1,
    // height: Dimensions.get('window').height,
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
