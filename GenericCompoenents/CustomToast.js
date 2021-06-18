import { Platform, ToastAndroid } from 'react-native';
import Snackbar from 'react-native-snackbar';
export const showToastWithGravity = (message) => {
    if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
    } else {
        Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
        });
    }
};