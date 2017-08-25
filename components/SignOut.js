import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import Hamburger from 'react-native-hamburger';
import Icon from './Icon';
import WorkImage from './WorkImage';
import DetailHeader from './DetailHeader';
import photo from '../assets/icons/print3.jpg';
import firebase from 'firebase';

// import { MonoText } from '../components/StyledText';


class SignOut extends React.Component {
  constructor(props) {
    super(props);



  }

  static navigationOptions = {
    header: null,
    // drawerLabel: 'yoyoyo',
  };
  signOut(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
    }).catch(function(error) {
  // An error happened.
  console.log("Logout err", error);
    });
  }



  render(){
    return (
      <View style={styles.container}>


      <DetailHeader navigation={this.props.navigation} style={styles.header}/>
        <ScrollView  contentContainerStyle={styles.contentContainer} className='contentContainer'>

        {/* <Text> Confirm Sign Out</Text> */}
        <Button
          onPress={()=> this.signOut()}
          title="Click to Sign Out"
          color="#EB6858"
          accessibilityLabel="register button"
        />
        <View style={styles.moreText}>
        <Text >Pnew account fb sign up? save some stuff to the db</Text>
        <Text>about the work</Text>

        <Text>
          Hi- I'm Paul
        </Text>
      </View>
      </ScrollView>
      </View>
    )
  }
}

const styles ={
  nameIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 19
  },
  image:{
    flex:1,

  },
  name:{
    flex:1,
    color:'#EB6858',
    textDecorationLine:'underline',
    paddingHorizontal:5,
    paddingTop: 5,
    fontSize: 18
  },
  contentContainer:{
    height: 750,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -2
    // paddingHorizontal: 20
  },
  header:{
    position: 'absolute',
    top:0,
    opacity: .80,
  },
  container:{
    backgroundColor: '#f9eae8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  moreText:{
    marginHorizontal: 19
  }
}
export default SignOut;
