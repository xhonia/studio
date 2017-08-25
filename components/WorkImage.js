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
import LogoImg from '../assets/icons/print3.jpg';

class WorkImage extends React.Component {
  render(){
    return (
      <View>
      <Image style={styles}
              source={this.props.src}
              // onPress={() => this.props.navigation.navigate('details')}
            />
</View>
    )
  }
}

const styles={
  borderRadius: 0,
  height: 411,
  width:338,
  borderColor:'#EB6858',
  borderWidth: 0,
  opacity: 1

}

export default WorkImage;
