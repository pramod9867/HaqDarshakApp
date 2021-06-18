import { StyleSheet, Dimensions } from 'react-native';
import R from '../../res/R';
const CommonStyles = StyleSheet.create({
    button: {
        padding: 5,
        height: 30,
        backgroundColor: R.colors.Blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        minWidth: 150
    },
    text: {

    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholderStyle: {
        color: R.colors.lightGrey,
        fontFamily: R.fonts.robotoRegular,
        fontSize: R.fontSize.font_17_5
    },
    customItemLabelStyle: {
        fontFamily: R.fonts.robotoBold
    },
    selectedItemLabelStyle: {

        fontFamily: R.fonts.robotoBold
    },
    listItemContainerStyle: {
        borderColor: R.colors.button,
        borderWidth: 0.2,
        zIndex: 20,
        // elevation: 50
        // position: 'absolute'
    },
    dropDownContainerStyle: {
        borderColor: R.colors.lightergrey
    },
    textStyle: {
        fontFamily: R.fonts.robotoRegular
    },
    input: {

        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: R.fontSize.font_17_5,
        paddingVertical: 7,
        fontFamily: R.fonts.robotoRegular,
        borderColor: R.colors.lightergrey,
        borderRadius: 25,
        marginVertical: 10
    },
    headerStyle: {
        fontFamily: R.fonts.robotoBold
    },
    input1: {

        borderWidth: 1,
        padding: 5,
        borderColor: R.colors.lightergrey,
        fontFamily: R.fonts.robotoRegular,
        height: 100,
        borderRadius: 10,
        marginVertical: 10,
        fontSize: R.fontSize.font_18,
    },

    //Text Size
    normalText: {
        fontSize: R.fontSize.font_18
    },
    greyText: {
        fontSize: R.fontSize.font_15,
        color: R.colors.lightGrey
    },
    boxStyle: {
        borderWidth: 0.3,
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxErrorStyle: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        borderColor: 'red',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        elevation: 10

    }, modalView: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 1.2,
        marginVertical: 100,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,

    },
    BadgemodalView: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 1.15,
        marginVertical: 100,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,

    },
    centeredView: {
        // flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
});

export default CommonStyles;