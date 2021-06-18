// import GroupSearchModel from "../../model/GroupSearchModel";
import {Restaurant_Error,Restaurant_Loading,Restaurant_Success} from "../action/getrestaurant"

const initialState = {
    isLoading: false,
    isError: false,
    results:[]
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Restaurant_Error:
            return {
                isLoading: false,
                isError: true,
            };
        case Restaurant_Loading:
            return {
                isLoading: true,
                isError: false,
            };
        case Restaurant_Success:
            const results =action.payLoad;
            console.log("Result Is.........");
            console.log(results);
            return {
                isLoading: false,
                isError: false,
                results:results
            };
    }
    return state;
}
