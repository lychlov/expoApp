import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
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

    tabBarOptions:{
      bottomNavigationOptions:{
        labelColor:'white',
        rippleColor:'white',
        shifting:false,
        tabs:{
          Home: {
            barBackgroundColor:'#37474F',
            label:'Home',
            labelColor:Colors.tabIconDefault,
            activeLabelColor:Colors.tabIconSelected,
            activeIcon:<Ionicons
                name={Platform.OS === 'ios'
                    ? `ios-information-circle`
                    : 'md-information-circle'}
                size={28}
                style={{ marginBottom: -3 }}
                color={Colors.tabIconSelected}
            />,
          },
          Links: {
            barBackgroundColor:'#00796B',
          },
          Settings: {
            barBackgroundColor:'#EEEEEE',
            labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
            activeLabelColor: '#212121',
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
