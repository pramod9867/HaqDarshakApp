import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View, Image, Text, Dimensions } from "react-native";

import { RegularText, BoldText } from '../../CustomFonts';
import R from '../../res/R';

const defaultInput = (props) => {

    return (
        <View>
            {/* {(props.title) && <RegularText style={[styles.hederText, props.headerStyle, { color: (!props.valid && props.touched) ? 'red' : 'black' }]}>{props.titleText}</RegularText>} */}
            <View style={{
                flexDirection: 'row',

                alignItems: 'center'
            }}>
                <TextInput
                    id='edit_search'
                
                    underlineColorAndroid="transparent"
                    {...props}
                    style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
                />
                {props.location && <TouchableOpacity onPress={props.onLocationPress}>
                    <Image
                        source={R.images.pin}
                        style={{
                            height: 20,
                            width: 20
                        }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>}
            </View>
            {(!props.valid && props.touched) && <RegularText style={{
                fontSize: R.fontSize.font_13,
                color: 'red',
                marginLeft: 14
            }}>{props.errorText}</RegularText>}
        </View>
    )
};

const styles = StyleSheet.create({
    invalid: {
        borderColor: 'red',
        borderBottomColor: 'red'
    },
    hederText: {
        fontSize: R.fontSize.font_13,

    },
    input: {
        flex: 1,

    }
}
);

export default defaultInput;

