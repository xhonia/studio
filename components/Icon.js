import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Hamburger from 'react-native-hamburger';
// import { MonoText } from '../components/StyledText';
import LogoImg from '../assets/icons/Beyicon.jpg';

class Icon extends React.Component {
  render(){
    return (
      <View>
      <Image style={styles}
              source={this.props.src ? this.props.src : LogoImg}
            />
</View>
    )
  }
}

const styles={
  borderRadius: 23,
  height: 46,
  width:46,
  borderColor:'#EB6858',
  borderWidth: 2,

}

export default Icon;
