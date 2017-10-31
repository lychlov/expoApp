import React from 'react';
import {Text} from "react-native";


var domain = "meet.jit.si";
var options = {
  roomName: "JitsiMeetAPIExample",
  width: 700,
  height: 700,
  parentNode: document.querySelector('#meet')
};

var api = new JitsiMeetExternalAPI(domain, options);


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