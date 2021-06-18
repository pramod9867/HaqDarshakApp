import { createAppContainer, createSwitchNavigator, NavigationActions, StackActions } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import RestaurantScreen from '../Screens/RestaurantApp/RestaurantScreen';

const ActionStack = createStackNavigator({
    Restaurant: {
        screen: RestaurantScreen,
        navigationOptions: {
            header: null
        }
    },
    
}, {
    initialRouteName: 'Restaurant',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    },
})

export default createAppContainer(ActionStack);