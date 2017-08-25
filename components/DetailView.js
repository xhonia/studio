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
import Icon from './Icon';
import WorkImage from './WorkImage';
import DetailHeader from './DetailHeader';
import photo from '../assets/icons/print3.jpg';
// import { MonoText } from '../components/StyledText';

class DetailView extends React.Component {
  static navigationOptions = {
    header: null,
    // drawerLabel: 'details',
  };

  componentDidMount(){
    //TODO: CHECK DATABASE WITH PARAms to get work info like title to pass to header
  }

  render(){
    return (
      <View style={styles.container}>


      <DetailHeader  navigation={this.props.navigation} style={styles.header}/>
        <ScrollView  contentContainerStyle={styles.contentContainer} className='contentContainer'>

        <WorkImage src={photo}/>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('hello')}>
        <View style={styles.nameIcon} className="NameIcon">
          <Icon style={styles.icon}/>
          <Text style={styles.name}>Beyluver4lyfe</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.moreText}>
        <Text >Price: 15$, Negotiable</Text>
        <Text>about the work</Text>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          wdhusbkjsdkckbd cdsgcjbdcjdkbcjk
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
export default DetailView;
