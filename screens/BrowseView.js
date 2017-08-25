import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Navigator,
  Modal,
} from 'react-native';
import { WebBrowser } from 'expo';
import LeftMenu from '../components/LeftMenu';
// import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
// const SideMenuObj = require('react-native-side-menu');
// const SideMenu = SideMenuObj.default
import SearchBar from 'react-native-searchbar';
import SlideDownPanel from '../components/SlideDown';
import DetailView from '../components/DetailView';
import SignUp from '../components/SignUp';
import Icon from '../components/Icon';
import ArtistView from '../components/ArtistView';
import WorkInBrowseView from '../components/WorkInBrowseView';
import firebase from 'firebase';
// import { DrawerNavigator } from 'react-navigation';

// import SlideDownPanel from 'react-native-slide-down-panel';



class Header extends React.Component {
  // constructor(props){
  //   super(props)
  //   // this.state{
  //   //
  //   // }
  // }

  // menuPress(){
  //   console.log("menu pressed", this.props);
  //   this.props.navigation.navigate('DrawerOpen');
  // }
  browsePress(){
    console.log("browse pressed");
  this.setState({})
  }
  searchPress(){
    console.log("search pressed");
    this.searchBar.show()
  this.setState({})
  }
  // this.props.navigation.navigate('DrawerOpen'); // open drawer
  // this.props.navigation.navigate('DrawerClose'); // close drawer


  render(){
    const items = ['item1','item2','item3']
    return (
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={()=>this.menuPress()} > */}
          <View style={styles.hamburger}>
        <LeftMenu  navigation={this.props.navigation} />
      </View>
    {/* </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>this.browsePress()} style={styles.centerText}>
        <View>
      <Text>Browse by</Text>
    </View>
  </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.searchPress()} style={styles.search}>
    <View >
      <Ionicons
          name='ios-search'
          size={28}
          color='white'
        />
      </View>
    </TouchableOpacity>
    {/* <View className='pulldownMenu'>
      <Text>Medium</Text>
      <Text>Style</Text>
      <Text>Price</Text>
    </View> */}
    <SearchBar
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
/>
    </View>
    )
  }
}
class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <View>
        <View><Text>Hi</Text></View>
        <View><Text>Hello</Text></View>
        <View><Text>Sup</Text></View>
      </View>
    )
  }
}

export default class BrowseView extends React.Component {
  static navigationOptions = {
    header: null,
    // drawerLabel: 'BrowseView',
  };
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     left: false
  //   }
  //
  // }
  // closeControlPanel = () => {
  //      this._drawer.close()
  //    };
  //    openControlPanel = () => {
  //      this._drawer.open()
  //    };
  componentDidMount(){
    // console.log("works", works);
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
    // User is signed in.
      console.log("we've got a user, baby!", user);
      } else {
    // No user is signed in.
      console.log("welp");
      }
    });
  }
     render () {
       return (


    //      <Drawer
     //
    //        ref={(ref) => this._drawer = ref}
    //        content={<Text>hello</Text>}
    //        side='top'
    //        openDrawerOffset={100}
    //        >
             <View style={styles.container}>
             <Header navigation={this.props.navigation}/>
             <ScrollView contentContainerStyle={styles.hi}>
             <WorkInBrowseView navigation={this.props.navigation} />
           </ScrollView>
           </View>
    //      </Drawer>
    //    )
    //  }
  // render() {
  //   const menu = <Menu/>;
  //     return (
  //
  //
  //
          // <WorkInBrowseView/>
        // <DetailView/>
  //
  //       // <SlideDownPanel
  //       //   ref="panel"
  //       //   offsetTop={0}
  //       //   handlerHeight={70}
  //       //   containerHeight={200}
  //       //   handlerBackgroundColor='black'
  //       //   handlerDefaultView={<Header/>}
  //       //   containerBackgroundColor='purple'
  //       //   allowStayMiddle={false}>
  //       //
  //       //   <View style={styles.browse} className='pulldownMenu'>
  //       //         <Text>Medium</Text>
  //       //         <Text>Style</Text>
  //       //         <Text>Price</Text>
  //       //         </View>
  //       //   </SlideDownPanel>
  //
  //         // getContainerHeight={this.getContainerHeight.bind(this)}><View><Text>boo</Text></View></SlideDownPanel>
  //       <Drawer
  //         //
  //          open={false}
  //          type='static'
  //          content={<Text>hello</Text>}
  //          tapToClose={true}
  //          openDrawerOffset={0.7} // 20% gap on the right side of drawer
  //          panCloseMask={0.2}
  //          closedDrawerOffset={0}
  //          styles={styles.drawer}
  //
  //         >
  //         {/* <SlideDownPanel
  //           ref="panel"
  //           // offsetTop={OFFSET_TOP}
  //           // initialHeight={MAXIMUM_HEIGHT}
  //           // containerMaximumHeight={MAXIMUM_HEIGHT}
  //           // handlerHeight={HANDLER_HEIGHT}
  //           handlerDefaultView={<Header/>}
  //           // getContainerHeight={this.getContainerHeight.bind(this)}
  //         > */}
  //           {/* <View className='pulldownMenu'>
  //             <Text>Medium</Text>
  //             <Text>Style</Text>
  //             <Text>Price</Text>
  //           </View> */}
  //         {/* </SlideDownPanel> */}
  //         <View style={styles.container}>
  //         <Header/>
  //         <ScrollView contentContainerStyle={styles.hi}>
  //         <WorkInBrowseView />
  //       </ScrollView>
  //       </View>
  //     </Drawer>
  //
  //
    );
  }

};

//
// const MyApp = DrawerNavigator({
//   BrowseView: {
//     // path:"/",
//     screen: BrowseView,
//   },
//   yoyoyo: {
//     screen: SignUp,
//   },
//   hello:{
//     screen: ArtistView,
//   },
//   details:{
//     screen: DetailView,
//   }
// },
// {
// drawerPosition:'left'
// });


const styles = StyleSheet.create({
  header:{
    paddingTop: 15,
    width:375,
    height:70,
    backgroundColor:'#EB6858',
    opacity: 0.80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    position: 'absolute',
    zIndex: 2
  },
  drawer:{
    height:597
  },
  hamburger:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: "center"
  },
  centerText:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  search:{
    flex:1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  hi:{
    zIndex: -2,
    paddingTop: 89,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#f9eae8',
  },
  browse:{
    marginTop:0
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: 'contain',
  //   marginTop: 3,
  //   marginLeft: -10,
  // },
  // getStartedContainer: {
  //   alignItems: 'center',
  //   marginHorizontal: 50,
  // },
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  // getStartedText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
