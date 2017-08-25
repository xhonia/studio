import React, { Component } from 'react';
import {
  Modal,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Hamburger from 'react-native-hamburger';
import { Ionicons } from '@expo/vector-icons';
var classNames = require('classnames');
// import { MonoText } from '../components/StyledText';
// import LogoImg from '../assets/icons/print3.jpg';


class DetailHeader extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      modalVisible: false
    }
  }

  backPress(){
    console.log("backpress function not written yet, boo boo");
    this.props.navigation.goBack(null)
  }
  morePress(){
    console.log("morepress function not finished yet, boo boo");
    this.setState({modalVisible:!this.state.modalVisible})

  }
  render(){
    var moreButton = classNames({
     'pressed': this.state.isPressed,
   });
    return (
      <View>
      <Modal
         animationType={"slide"}
         transparent={"true"}
         visible={this.state.modalVisible}
         onRequestClose={() => {alert("Modal has been closed.")}}
         >
        <View style={{marginTop: 22}}>
         <View>
           <Text>Hello World!</Text>

           <TouchableHighlight onPress={() => {
             this.morePress()
           }}>
             <Text>Hide Modal</Text>
           </TouchableHighlight>

         </View>
        </View>
       </Modal>

      <View style={styles.header}>
        <TouchableOpacity onPress={()=>this.backPress()} style={styles.hamburger}>
        <View >
          <View >
            <Ionicons
                name='ios-arrow-back'
                size={28}
                color='white'
                opacity={0.58}
              />
            </View>
      </View>
        </TouchableOpacity>
      <View style={styles.centerText}>
      <Text style={styles.title}>this.props.whatevs</Text>
    </View>
    <TouchableOpacity className={moreButton} onPress={()=>this.morePress()} style={styles.search}>
    <View >
      <Ionicons
          name='ios-more'
          size={50}
          color='white'
          opacity={0.58}
        />
      </View>
    </TouchableOpacity>
    {/* <View className='pulldownMenu'>
      <Text>Medium</Text>
      <Text>Style</Text>
      <Text>Price</Text>
    </View> */}
    {/* <SearchBar
  ref={(ref) => this.searchBar = ref}
  data={items}
  handleResults={this._handleResults}
  //write a handle results function
  // showOnLoad='false'
  backgroundColor='#EB6858'
  placeholderTextColor='white'
  textColor='#f9eae8'
  // fontFamily pick font!
  placeholder="Search..."
  iconColor='#f9eae8'
/> */}
    </View>
  </View>
    )
  }
}

const styles={
  header:{
    paddingTop: 15,
    paddingHorizontal: 25,
    width:375,
    height:70,
    backgroundColor:'#EB6858',
    opacity: 0.82,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex"
  },
  hamburger:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: "center",
    opacity:0.58
  },
  centerText:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",

  },
  search:{
    flex:1,
    alignItems: "flex-end",
    justifyContent: "center",
    opacity:0.58
  },
  container: {
    flex: 1,
    backgroundColor: '#f9eae8',
  },
  title:{
    color: 'white',
    opacity: 0.58,
    fontSize:20,
    // fontFamily:
  }

}

export default DetailHeader;
