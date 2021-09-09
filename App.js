/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from './src/assets/theme';
import {LeadsScreen} from './src/screens/LeadsScreen/Leads/LeadsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ContentScreen} from './src/screens/ContentScreen/ContentScreen';
import {Text, View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.baseSafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerBackgroundContainerStyle: {
                paddingTop: 30,
                backgroundColor: theme.colors.blue1,
              },
              headerStyle: {
                borderWidth: 0,
                shadowOffset: {height: 0},
                backgroundColor: theme.colors.blue1,
                height: 95,
              },
              headerTitle: (props, ...rest) => {
                return <Text style={styles.title}>{props.children}</Text>;
              },
              headerTitleAlign: 'left',
              tabBarStyle: {height: 70, paddingBottom: 7},
              tabBarIcon: ({color, size}) => {
                let iconName = 'home';

                if (route.name === 'Leads') {
                  iconName = 'home';
                } else if (route.name === 'Content') {
                  iconName = 'play-outline';
                } else if (route.name === 'Activity') {
                  iconName = 'md-play-forward-circle';
                } else if (route.name === 'Settings') {
                  iconName = 'md-power-sharp';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: theme.colors.primary,
              tabBarInactiveTintColor: 'black',
            })}>
            <Tab.Screen
              name="Leads"
              component={LeadsScreen}
              options={{
                headerRight: () => {
                  return (
                    <View>
                      <View style={styles.searcher}>
                        <Image
                          style={styles.searcherImg}
                          source={require('./src/assets/images/magnifiying-glass.png')}
                        />
                      </View>
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen name="Content" component={ContentScreen} />
            <Tab.Screen name="Activity" component={ContentScreen} />
            <Tab.Screen name="Settings" component={ContentScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomSafeAreaView} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  baseSafeAreaView: {
    backgroundColor: theme.colors.blue1,
    flex: 1,
  },
  bottomSafeAreaView: {
    backgroundColor: 'white',
    flex: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: theme.colors.secondary,
  },
  searcher: {
    height: 30,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: theme.colors.gray1,
    backgroundColor: 'white',
    marginRight: 18,
  },
  searcherImg: {
    height: 13,
    width: 13,
  },
});

export default App;
