export const Restaurant_Loading = 'Restaurant_Loading';
export const Restaurant_Error = 'Restaurant_Error';
export const Restaurant_Success = 'Restaurant_Success';
// export const Successful_DropDown = 'Successful_DropDown';
import {fetchWithTimeout} from '../../Network/FetchRestaurant';
import * as CustomToast from '../../GenericCompoenents/CustomToast';
import * as AsyncStorage from '../../Utils/AsyncStorage';
import {Api} from '../../Utils/Constants/Api/Api';
export const getRestaurant = () => {
  return async (dispatch) => {
    try {
      dispatch(Loading());

      console.log('Get Restaurant Called');
      const url =
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6204,-122.3491&radius=2500&type=restaurant&key=AIzaSyDkGIvqAXuuOE5TUoDedazelbPdKtQxb1E';

      const response = await fetchWithTimeout(url, {
        method: 'GET',
      });

      if(response!=undefined){
          console.log("Successful Respons");
          console.log(response);
          dispatch(Successful(response.results));
      }else{
        CustomToast.showToastWithGravity("Please check JSON Data Properly");  
      }

    } catch (error) {
      CustomToast.showToastWithGravity(error.message);
      dispatch(Error());
    }
  };
};

export const getRestaurantBySearch = (searchList) => {
  return async (dispatch) => {
    try {
      // dispatch(Loading());

      console.log('Get Restaurant Called');
      const url =
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6204,-122.3491&radius=2500&type=restaurant&keyword=${searchList}&key=AIzaSyDkGIvqAXuuOE5TUoDedazelbPdKtQxb1E`;

      const response = await fetchWithTimeout(url, {
        method: 'GET',
      });

      if(response!=undefined){
          console.log("Successful Respons");
          console.log(response);
          dispatch(Successful(response.results));
      }else{
        CustomToast.showToastWithGravity("Please check JSON Data Properly");  
      }

    } catch (error) {
      CustomToast.showToastWithGravity(error.message);
      dispatch(Error());
    }
  };
};

const Loading = () => {
  return {
    type: Restaurant_Loading,
  };
};

const Error = () => {
  return {
    type: Restaurant_Error,
  };
};

const Successful = (results) => {
  return {
    type: Restaurant_Success,
    payLoad:results
  };
};
