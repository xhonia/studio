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

class LeftMenu extends React.Component {
  constructor(props){
    super(props)
    this.state={
      active: false
    }
  }
  menuPress(){
    console.log("menu pressed", this.props);
    this.props.navigation.navigate('DrawerOpen');
    this.setState({active:!this.state.active})
  }
  render(){
    return (
      <View >
      <Hamburger
        active={this.state.active}
        type='spinCross'
        color="white"
        onPress={()=> this.menuPress()}
      />
      </View>
    )
  }
}

export default LeftMenu;
