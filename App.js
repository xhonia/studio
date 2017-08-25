import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BrowseView from './screens/BrowseView';
import { DrawerNavigator } from 'react-navigation';
import DetailView from './components/DetailView';
import SignUp from './components/SignUp';
import Icon from './components/Icon';
import ArtistView from './components/ArtistView';
import SignOut from './components/SignOut';
import WorkInBrowseView from './components/WorkInBrowseView';
import * as firebase from 'firebase'
// Set the configuration for your app
 // TODO: Replace with your project's config object
 var config = {
   apiKey: "AIzaSyB9Q7sK9icitLDOnzREuIZosOkuI5MX3gY",
   authDomain: "studio-c880d.firebaseapp.com",
   databaseURL: "https://studio-c880d.firebaseio.com/",
   storageBucket: "studio-c880d.appspot.com"
 };
 firebase.initializeApp(config);

 // Get a reference to the database service
 var database = firebase.database();

class App extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Browse'
  }
  render() {
    return (
      <View style={styles.container}>
        <BrowseView navigation={this.props.navigation}/>
      </View>
    );
  }
}
const DrawerApp = DrawerNavigator({
  BrowseView: {
    // path:"/",
    screen: App,
  },
  'Sell Your Work!': {
    screen: SignUp,
  },
  hello:{
    screen: ArtistView,
  },
  details:{
    screen: DetailView,
  },
  "Sign out":{
    screen: SignOut,
  },
},

{
    initialRouteName: 'BrowseView',
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default DrawerApp;
