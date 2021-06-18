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
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import CommonStyles from '../ATR/CommonStyles';
import * as restaurantAction from '../../store/action/getrestaurant';
import R from '../../res/R';
import CardCompoenent from './CardCompoenent.js/CardCompoenent';
import {RegularText} from '../../CustomFonts';
import DefaultInput from '../../GenericCompoenents/CustomValidator/defaultText';
import validate from '../../GenericCompoenents/CustomValidator/validate';
class RestaurantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        actionTitle: {
          value: '',
          valid: true,
          validationRules: {},
          touched: false,
        },
      },
    };
  }

  componentDidMount() {
    this.props.dispatch(restaurantAction.getRestaurant());
  }

  updateInputState = (key, value) => {
    //comparing the confirm password with password, the key represents email, password etc

    this.setState(
      (prevState) => {
        return {
          controls: {
            ...prevState.controls,
            [key]: {
              ...prevState.controls[key],
              value: value,
              valid: validate(value, prevState.controls[key].validationRules),
              touched: true,
            },
          },
        };
      },
      () => {
        this.props.dispatch(
          restaurantAction.getRestaurantBySearch(
            this.state.controls.actionTitle.value,
          ),
        );
      },
    );
  };

  emptyCompoenent = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          alignSelf: 'center',
        }}>
        <View>
          <RegularText
            style={{
              color: R.colors.Blue,
            }}>
            No Data Available
          </RegularText>
        </View>
      </View>
    );
  };
  render() {
    const {isLoading, isError, results} = this.props;

    console.log('Rendering Items');
    console.log(results);
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <TextInput
            accessible={true}
            accessibilityLabel={'edit_search'}
            id="edit_search"
            headerStyle={CommonStyles.headerStyle}
            placeholder="Search Restaurant"
            title={true}
            autoCorrect={false}
            autoFocus={false}
            returnKeyType="next"
            errorText="Please enter valid restaurant"
            keyboardType="default"
            style={CommonStyles.input}
            value={this.state.controls.actionTitle.value}
            onChangeText={(val) => this.updateInputState('actionTitle', val)}
            valid={this.state.controls.actionTitle.valid}
            touched={this.state.controls.actionTitle.touched}
          />
        </View>
        <FlatList
          keyExtractor={(item) => item.GroupId}
          contentContainerStyle={{
            // borderWidth: 1
            flexGrow: 1,
          }}
          style={
            {
              // marginTop: 2.5,
            }
          }
          ListEmptyComponent={this.emptyCompoenent}
          data={results}
          renderItem={({item: rowData, index: index}) => {
            return (
              <CardCompoenent
                user_ratings_total={rowData.user_ratings_total}
                address={rowData.vicinity}
                vicinity={rowData.types}
                url={rowData.icon}
                name={rowData.name}
                Rating={rowData.rating}
              />
            );
          }}
        />

        {isLoading && (
          <View style={CommonStyles.loading}>
            <ActivityIndicator size="large" color={R.colors.Blue} />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.restaurant.isLoading,
  isError: state.restaurant.isError,
  results: state.restaurant.results,
});
export default connect(mapStateToProps)(RestaurantScreen);
