import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddConferenceScreen from "../screens/AddConferenceScreen";
import Feather from "@expo/vector-icons/Feather";

export default TabNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Contactors:{
        screen:HomeScreen,
      },
      Links: {
        screen: LinksScreen,
      },

      Settings: {
        screen: SettingsScreen,
      },
    },
    {
      /*
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch (routeName) {
            case 'Home':
              iconName = Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
              break;
            case 'Links':
              iconName = Platform.OS === 'ios'
                ? `ios-link${focused ? '' : '-outline'}`
                : 'md-link';
              break;
            case 'Settings':
              iconName = Platform.OS === 'ios'
                ? `ios-options${focused ? '' : '-outline'}`
                : 'md-options';
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          );
        },
      }),*/

      tabBarOptions: {
        bottomNavigationOptions: {
          labelColor: 'white',
          rippleColor: 'white',
          shifting: false,
          tabs: {
            Home: {
              barBackgroundColor: '#37474F',
              label: 'Home',
              labelColor: Colors.tabIconDefault,
              activeLabelColor: Colors.tabIconSelected,
              activeIcon: <Ionicons
                  name={Platform.OS === 'ios'
                      ? `ios-information-circle`
                      : 'md-information-circle'}
                  size={28}
                  style={{marginBottom: -3}}
                  color={Colors.tabIconSelected}
              />,
            },
            Contactors: {
              activeIcon: <Ionicons
                  name={Platform.OS === 'ios'
                      ? `ios-contacts`
                      : 'md-contacts'}
                  size={28}
                  style={{marginBottom: -3}}
                  color={Colors.tabIconSelected}
              />,
              barBackgroundColor: '#CDB38B',
              labelColor: Colors.tabIconDefault,
              activeLabelColor: Colors.tabIconSelected,

            },
            Links: {
              activeIcon: <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
                  size={28}
                  style={{marginBottom: -3}}
                  color={Colors.tabIconSelected}/>,
              barBackgroundColor: '#00796B',
              labelColor: Colors.tabIconDefault,
              activeLabelColor: Colors.tabIconSelected,

            },
            Settings: {
              activeIcon: <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-settings' : 'ios-settings'}
                  size={28}
                  style={{marginBottom: -3}}
                  color={Colors.tabIconSelected}
              />,
              barBackgroundColor: '#708090',
              labelColor: Colors.tabIconDefault,
              activeLabelColor: Colors.tabIconSelected,
            },
          }
        }
      },
      tabBarComponent: NavigationComponent,
      tabBarPosition: 'bottom',
      //animationEnabled: false,
      //swipeEnabled: false,
    }
);
