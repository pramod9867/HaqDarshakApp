/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  TouchableHighlight
} from 'react-native';

import R from './res/R';
import { BoldText, RegularText } from './CustomFonts/index';
import PPACNavigator from './Navigator/PPACNavigator';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import restaurantReducer from './store/reducer/getrestaurant';



export const rootReducer = combineReducers({


  
  restaurant:restaurantReducer
});



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends Component {
  constructor(props) {
    super(props);
    this.navigatorRef = null;
    this.state = {
      isModal: false,
    }
  }

  componentDidMount() {
    // if (this.navigatorRef._navigation != undefined) {
    //   this.navigatorRef._navigation.setParam({ isModal: this.updateModal })
    // }
    console.log("Compoenet Did Mound");
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.navigatorRef != this.navigatorRef) {
      console.log("Compoenent did update");
      this.navigatorRef._navigation.setParam({ isModal: this.updateModal })
    }
  }

  updateModal = () => {
    this.setState({ isModal: !this.state.isModal });
  }

  render() {
    return (
      <Provider store={store}>

        <PPACNavigator ref={(ref) => {
          this.navigatorRef = ref

        }} />



      </Provider >
    )
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  modal: {
    height: 100,
    width: 100
  },
  text: {
    color: '#3f2949',
    marginTop: 10
  }
});

export default App;
