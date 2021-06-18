// import AsyncStorage from '@react-native-async-storage/async-storage';


// export const storeData = async (key, value) => {
//     try {
//         await AsyncStorage.setItem(key, value)
//         console.log('Data stored in async succesfully');
//     } catch (e) {
//         console.log('error')
//         throw e;


//         // saving error
//     }
// }



// export const getData = async (key) => {
//     try {
//         const value = await AsyncStorage.getItem(key)



//         return value;
//     } catch (e) {
//         console.log("Error Called");
//         // console.log(err);
//         throw e;
//         // console.log('error')
//         // error reading value
//     }
// }


// export const getJsonData = async (key) => {
//     try {
//         const value = await AsyncStorage.getItem(key)
//         const parseJson = JSON.parse(value);


//         return parseJson;
//     } catch (e) {
//         // console.log(err);
//         throw e;
//         // console.log('error')
//         // error reading value
//     }
// }


// export const getEmpId = async () => {
//     try {
//         const value = await AsyncStorage.getItem('EmployeeID')



//         // console.log(parseJson);
//         return value;
//     } catch (e) {
//         console.log(e);
//         throw e;
//         // console.log('error')
//         // error reading value
//     }
// }

// export const getDrName = async () => {
//     try {
//         const value = await AsyncStorage.getItem('USER_DETAILS')

//         const parseJson = JSON.parse(value);

//         // console.log(parseJson);
//         return parseJson.Name;
//     } catch (e) {
//         console.log(e);
//         throw e;
//         // console.log('error')
//         // error reading value
//     }
// }