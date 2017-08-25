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
import works from '../assets/works';

// import one from '../assets/icons/print3.jpg';
// import two from '../assets/icons/print2.jpg';
// import three from '../assets/icons/flow3.jpg';
// import four from '../assets/icons/flow2.jpg';

// import { MonoText } from '../components/StyledText';

class WorkInBrowseView extends React.Component {
  // componentDidMount(){
  //   console.log("works", works);
  // }
  render(){
    // const photos = [one,two,three,four]
    console.log("works", works.length);
    return (
      <View>
        {works.map((work)=> (
          <View key={work.photo} style={styles.container}>
            {console.log(work.photo)}
            <TouchableOpacity style={styles.hello}  onPress={() => this.props.navigation.navigate('details')} >
              <View>
              <WorkImage style={styles.image} src={work.photo}/>
                <View style={styles.workInfo}>
                  <Text>{work.title}</Text><Text>${work.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('hello')}>
              <View style={styles.nameIcon} className="NameIcon" ><Icon src={work.photo}/>
                <Text style={styles.name}>{work.artist}</Text>
              </View>
            </TouchableOpacity>
            </View>
          ))}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  nameIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 19
  },
  image:{
    zIndex:-2,

  },
  name:{
    flex:1,
    color:'#EB6858',
    textDecorationLine:'underline',
    paddingHorizontal:5,
    paddingTop: 5,
    fontSize: 18
  },
  workInfo:{
    position: 'absolute',
    zIndex:2
  }
})
export default WorkInBrowseView;
