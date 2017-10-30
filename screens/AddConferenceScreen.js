import React from 'react';
import {Text} from "react-native";


export default class AddConferenceScreen extends React.Component {
  static navigationOptions=({navigation}) => ({
    title: '新会议',
});
  render() {
    return (
        <Text>这是一个Screen</Text>
    );
  };
}