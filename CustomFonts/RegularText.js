import React, { Children, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';
import R from '../res/R';

const RegularText = (props) => {
    return (
        <Text style={[styles.custom, props.style]} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    custom: {
        
    }
})

export default RegularText;