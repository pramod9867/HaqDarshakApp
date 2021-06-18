import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {BoldText, RegularText} from '../../../CustomFonts';
import NewProgressiveImage from '../../../GenericCompoenents/NewProgressiveImage';
import R from '../../../res/R';

const CardCompoenent = (props) => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderWidth: 1,
            justifyContent: 'center',
            borderRadius:5
          }}>
          <NewProgressiveImage
            uri={props.url}
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
              borderRadius: 10,
              padding: 10,
              marginHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
             
              style={{
                fontSize: R.fontSize.font_15,
                marginHorizontal: 10,
                flex:0.85
              }}>
              {props.name}
            </Text>
            <View
              style={{
                backgroundColor: R.colors.Green,
                borderRadius: 10,
                height:40,
                width:40,
                justifyContent:'center',
                alignItems:'center'
              }}>
              <BoldText
                style={{
                  fontSize: R.fontSize.font_13,
    
                  color: R.colors.red,
                }}>
                {props.Rating}
              </BoldText>
            </View>
          </View>
          <RegularText
            style={{
              fontSize: R.fontSize.font_13,
              marginHorizontal: 10,
              color: R.colors.gray_light,
            }}>
          Total User Rating: {props.user_ratings_total}
          </RegularText>
        
          <RegularText
            style={{
              fontSize: R.fontSize.font_13,
              marginHorizontal: 10,
              color: R.colors.gray_light,
            }}>
            {props.address}
          </RegularText>
          <RegularText
            style={{
              fontSize: R.fontSize.font_13,
              marginHorizontal: 10,
              color: R.colors.button,
            }}>
           {props.vicinity.map((jsonData)=>{
             return jsonData +" , ";
           })}
          </RegularText>
        </View>
      </View>
    </View>
  );
};

export default CardCompoenent;
