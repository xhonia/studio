// import React, { Component } from 'react';
// import {
//   Dimensions,
//   View,
//   PanResponder,
//   StyleSheet
// } from 'react-native';
// import { Motion, spring } from 'react-motion';
//
// const { width, height } = Dimensions.get('window');
// const DEFAULT_CONTAINER_HEIGHT = 40;
//
// export default class SlideDownPanel extends Component {
//   constructor(props) {
//     super(props);
//
//     const {
//       offsetTop, handlerHeight, initialHeight, containerMaximumHeight, containerBackgroundColor,
//       containerOpacity, handlerDefaultView, handlerBackgroundColor, handlerOpacity
//     } = props;
//
//     this.state = {
//       offsetTop: offsetTop != undefined ? offsetTop : DEFAULT_CONTAINER_HEIGHT,
//       handlerHeight : handlerHeight != undefined ? handlerHeight: DEFAULT_CONTAINER_HEIGHT,
//       containerHeight : initialHeight != undefined && initialHeight > handlerHeight ? initialHeight: handlerHeight,
//       containerMinimumHeight : handlerHeight != undefined ? handlerHeight: DEFAULT_CONTAINER_HEIGHT,
//       containerMaximumHeight : containerMaximumHeight != undefined ? containerMaximumHeight : height,
//       containerBackgroundColor : containerBackgroundColor != undefined ? containerBackgroundColor : 'white',
//       containerOpacity : containerOpacity != undefined ? containerOpacity : 1,
//       handlerView : handlerDefaultView,
//       handlerBackgroundColor : handlerBackgroundColor != undefined ? handlerBackgroundColor : 'white',
//       handlerOpacity : handlerOpacity != undefined ? handlerOpacity : 1,
//       isPanMoving: false
//     };
//
//     // Sets motions' default style to be intial height so that it doesn't animate on first render
//     // Container height must always start from handler height. That is the minimum height.
//     this.previousContainerHeight = initialHeight > handlerHeight ? initialHeight : handlerHeight;
//   }
//
//   componentWillMount() {
//     this.panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: this.handlePanResponderMove.bind(this),
//       onPanResponderRelease: this.handlePanResponderEnd.bind(this),
//       onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
//       onPanResponderStart: this.handlePanResponderStart.bind(this)
//     });
//   }
//
//   componentDidMount() {
//     // Make sure that handlerView is set
//     if (this.state.handlerView == undefined) {
//       throw "Set a handler view. Hint: It is a React Class."
//     }
//   }
//
//   setVisibleState(visible) {
//     const { containerMaximumHeight, containerMinimumHeight } = this.state;
//     const containerHeight = visible ? containerMaximumHeight : containerMinimumHeight;
//     this.setState({ containerHeight });
//   }
//
//   render() {
//     const styles = {
//       container: {
//         position: 'absolute',
//         overflow: 'hidden',
//         top: this.state.offsetTop,
//         opacity: this.state.containerOpacity,
//         backgroundColor : this.state.containerBackgroundColor,
//         height: this.state.containerHeight
//       },
//       handler: {
//         height : this.state.handlerHeight,
//         width : width,
//         justifyContent : 'center',
//         opacity : this.state.handlerOpacity,
//         backgroundColor : this.state.handlerBackgroundColor
//       }
//     };
//
//     return (
//       this.state.isPanMoving ?
//       <View style={styles.container}>
//         {this.props.children}
//         <View style={styles.handler} {...this.panResponder.panHandlers}>
//           {this.state.handlerView}
//         </View>
//       </View>
//       :
//       <Motion defaultStyle={{y: this.previousContainerHeight}} style={{y: spring(this.state.containerHeight, { stiffness: 200, damping: 30 })}}>
//         {
//           ({y}) => (
//             <View style={[styles.container, { height: y}]}>
//               {this.props.children}
//               <View style={styles.handler} {...this.panResponder.panHandlers}>
//                 {this.state.handlerView}
//               </View>
//             </View>
//           )
//         }
//       </Motion>
//     )
//   }
//
//   handlePanResponderMove(e, gestureState) {
//     const dy = gestureState.dy;
//     const negativeY = -dy;
//     // current position is difference in distance since touchStart(dy) and displacement in y-axis at touchStart(dy)
//     const positionY = negativeY + this.previousTop;
//
//     // This check is to prevent the handler from moving out of it's boundry
//     if (positionY <= -this.state.containerMinimumHeight && positionY >= -this.state.containerMaximumHeight) {
//       this.setState({ containerHeight : -positionY, isPanMoving: true });
//
//       // This will call getContainerHeight of parent component.
//       if (this.props.getContainerHeight != undefined) {
//         this.props.getContainerHeight(this.state.containerHeight);
//       }
//     }
//   }
//
//   handlePanResponderStart(e, gestureState) {
//     const dy = gestureState.dy;
//     const negativeY = -dy;
//
//     // Stores displacement in y-axis at touchStart
//     this.previousTop = negativeY - this.state.containerHeight;
//   }
//
//   handlePanResponderEnd(e, gestureState) {
//     let containerHeight;
//     const dy = gestureState.dy;
//
//     // Saves current state of containerHeight so that it can be used to
//     // travel off using <Motion/> from last point(this.previousContainerHeight)
//     this.previousContainerHeight = this.state.containerHeight;
//
//     if(this.previousTop == -this.state.containerHeight) { // not moved
//       if(this.state.containerHeight == this.state.containerMaximumHeight) {
//         containerHeight = this.state.containerMinimumHeight;
//       } else {
//         containerHeight = this.state.containerMaximumHeight;
//       }
//     } else if (dy > 0) { // move down
//       containerHeight = this.state.containerMaximumHeight;
//     } else { // move up
//       containerHeight = this.state.containerMinimumHeight;
//     }
//
//     this.setState({ containerHeight : containerHeight, isPanMoving: false });
//     // This will call getContainerHeight of parent component.
//     if (this.props.getContainerHeight != undefined) {
//       this.props.getContainerHeight(containerHeight);
//     }
//   }
//
// }

'use strict';

import React, { Component } from 'react';
import { View, PanResponder,  Text, AppRegistry, Image, Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var BASE_CONTAINER_HEIGHT = 40;

var SlideDownPanel = React.createClass({

  panResponder : {},
  previousTop : -BASE_CONTAINER_HEIGHT,
  mainContainerHeight : 0,

  getInitialState: function() {
    return {
      handlerHeight : this.props.handlerHeight,
      containerHeight : this.props.containerHeight,
      containerMinimumHeight : this.props.handlerHeight,
      containerMaximumHeight : this.props.containerMaximumHeight,
      containerHalfHeight : 0,
      containerBackgroundColor : this.props.containerBackgroundColor,
      containerOpacity : this.props.containerOpacity,

      handlerView : this.props.handlerDefaultView,

      handlerBackgroundColor : this.props.handlerBackgroundColor,
      handlerOpacity : this.props.handlerOpacity,
      allowStayMiddle : this.props.allowStayMiddle,

      middleList : false,
    };
  },

  componentDidMount: function() {
    var containerMinimumHeight = this.state.containerMinimumHeight;
    var containerMaximumHeight = this.state.containerMaximumHeight;
    var containerHalfHeight = this.state.containerHalfHeight;
    var containerBackgroundColor = this.state.containerBackgroundColor;
    var containerOpacity = this.state.containerOpacity;

    var handlerView = this.state.handlerView;

    var handlerHeight = this.state.handlerHeight;
    this.mainContainerHeight = this.state.containerHeight;
    var handlerBackgroundColor = this.state.handlerBackgroundColor;
    var handlerOpacity = this.state.handlerOpacity;

    var allowStayMiddle = this.state.allowStayMiddle;

    //MAKE SURE PROPERTIES ARE SET

    if (handlerHeight == undefined) {
      handlerHeight = BASE_CONTAINER_HEIGHT;
      this.setState({
        handlerHeight,
        containerMinimumHeight : BASE_CONTAINER_HEIGHT,
      });
    }

    if (handlerView == undefined) {
      throw "Set a handler view. Hint: It is a React Class."
    }

    if (containerMaximumHeight == undefined) {
      containerMaximumHeight = deviceHeight
      this.setState({
        containerMaximumHeight,
      });
    }

    if (containerHalfHeight == 0) {
      containerHalfHeight = Math.round((containerMaximumHeight + handlerHeight) / 2);
      this.setState({
        containerHalfHeight,
      });
    }

    if (allowStayMiddle == undefined) {
      allowStayMiddle = true;
      this.setState({
        allowStayMiddle,
      });
    }

    this.mainContainerHeight = this.state.containerMinimumHeight
    this.setState({
      containerHeight : this.mainContainerHeight
    });

    if (containerBackgroundColor == undefined) {
      containerBackgroundColor = 'white'
      this.setState({
        containerBackgroundColor,
      });
    }

    if (containerOpacity == undefined) {
      containerOpacity = 1;
      this.setState({
        containerOpacity,
      });
    }

    if (handlerBackgroundColor == undefined) {
      handlerBackgroundColor = 'white';
      this.setState({
        handlerBackgroundColor,
      });
    }

    if (handlerOpacity == undefined) {
      handlerOpacity = 1;
      this.setState({
        handlerBackgroundColor,
      });
    }

  },

  render: function() {
    return (
      <View
        style = {{
          position: 'absolute',
          bottom: 0,
          opacity: this.state.containerOpacity,
          height: this.state.containerHeight,
          paddingBottom: this.state.leastContainerHeight,
          backgroundColor : this.state.containerBackgroundColor
        }}>
        <View
          style = {{
            height : this.state.handlerHeight,
            width : deviceWidth,
            justifyContent : 'center',
            opacity : this.state.handlerOpacity,
            backgroundColor : this.state.handlerBackgroundColor}}
          {...this.panResponder.panHandlers}>
          {this.state.handlerView}
        </View>
        {this.props.children}
      </View>
    );
  },

  reloadHeight:function(height) {
    this.setState({
      containerHeight : height,
      middleList : false
    });
    this.mainContainerHeight = height;
  },

  collapsePanel:function() {
    this.setState({
      containerHeight: this.state.containerMinimumHeight,
    });
  },

  componentWillMount: function() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
      onPanResponderStart: this.handlePanResponderStart
    });
  },

  handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    return true;
  },

  handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    return true;
  },

  handlePanResponderMove: function(e: Object, gestureState: Object) {
    var dy = gestureState.dy;
    var y0 = gestureState.y0;
    var negativeY = -dy;

    var positionY = negativeY - this.previousTop;

    if (positionY >= this.state.containerMinimumHeight && positionY <= this.state.containerMaximumHeight) {
      //console.log('handlePanResponderMove() -- middle=' + positionY);
      var lessMiddle = this.state.containerHalfHeight - 35;
      var moreMiddle = this.state.containerHalfHeight + 35;

      if (positionY >= lessMiddle && positionY <= moreMiddle) {

        if (!this.state.allowStayMiddle) {
          this.handleMiddleFalse(positionY);
        } else {
          this.setState({
            containerHeight : this.state.containerHalfHeight,
            middleList : true,
          });

          if (this.props.getContainerHeight != undefined) {
            this.props.getContainerHeight(this.state.containerHalfHeight);
          }
        }

      } else {
        //console.log('handlePanResponderMove() -- NOT middle=' + positionY);
        this.handleMiddleFalse(positionY);
      }

      this.mainContainerHeight = this.state.containerHeight;
    }
  },

  handleMiddleFalse: function(positionY) {
    this.setState({
      containerHeight : positionY,
      middleList : false
    });
    if (this.props.getContainerHeight != undefined) {
      this.props.getContainerHeight(positionY);
    }
  },

  handlePanResponderStart: function(e: Object, gestureState: Object) {
    if(this.props.onStart) {
      this.props.onStart();
    }

    var dy = gestureState.dy;
    var negativeY = -dy;
    this.previousTop = negativeY - this.state.containerHeight;
    this.setState({
      middleList : false
    });

  },

  handlePanResponderEnd: function(e: Object, gestureState: Object) {
    if(this.props.onEnd) {
      this.props.onEnd();
    }

    var containerHeight = this.state.containerMaximumHeight;
    var dy = gestureState.dy;
    var y0 = gestureState.y0;

    if (dy == 0) {
      var newContainerHeight = this.state.containerHalfHeight;
      var middleList = true;

      if (this.state.containerHeight == this.state.containerHalfHeight || this.state.containerHeight == this.state.containerMaximumHeight) {
        newContainerHeight = this.state.containerMinimumHeight;
        middleList = false;
      }

      if (!this.state.allowStayMiddle) {
        newContainerHeight = this.state.containerMinimumHeight;
        middleList = false;
      }

      this.setState({
        containerHeight : newContainerHeight,
        middleList : middleList,
      });

      if (this.props.getContainerHeight != undefined) {
        this.props.getContainerHeight(newContainerHeight);
      }

      this.mainContainerHeight = newContainerHeight;
    } else {

      if (dy < 0) {
        containerHeight = this.state.containerMaximumHeight;
        this.previousTop += dy;
      } else {

        containerHeight = this.state.containerMinimumHeight;
        this.previousTop = -this.state.containerMinimumHeight;
      }

      if (!this.state.middleList) {
        this.setState({
          containerHeight : containerHeight,
        });

        if (this.props.getContainerHeight != undefined) {
          this.props.getContainerHeight(containerHeight);
        }
      }

      this.mainContainerHeight = containerHeight;

    }
  },

});

module.exports = SlideDownPanel;
