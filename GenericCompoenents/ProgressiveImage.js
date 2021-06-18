import React, { Component } from 'react';
import { Image, ActivityIndicator, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'
import R from '../res/R';

export default class ProgressiveImage extends Component {
    state = { showDefault: true, error: false };

    render() {

        // var image = this.state.error
        // ? require('../assets/Images/mainpage/noimg.png')
        // : { uri: this.props.uri, cache: FastImage.cacheControl.cacheOnly };

        return (
            <View style={styles.container}>
                {this.state.error ? <Image
                    style={this.props.style}
                    source={R.images.maleDoc}
                    onLoadEnd={() => {
                        this.setState({ showDefault: false });
                        // this.setState({ error: false });
                        if (this.props.uri != 'https://mgenius.in/DocMED/Image/CustomerProfile/rn_image_picker_lib_temp_cd2db7de-08aa-4f1c-b51e-0ace66a79c92.jpg' && this.props.uri != "") {
                            this.setState({ error: false });
                        }
                    }}
                    onError={() => this.setState({ error: true })}
                    resizeMode={this.props.resizeMode}
                /> :
                    <FastImage
                        style={this.props.style}

                        source={{ uri: this.props.uri, cache: FastImage.cacheControl.immutable }}
                        onLoadEnd={() => {
                            console.log("On Load End")
                            this.setState({

                                showDefault: false
                            })
                        }}
                        onError={() => {
                            console.log("On Error")
                            this.setState({ error: true })
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                        fallback={false}
                    />
                }
                <ActivityIndicator
                    style={styles.activityIndicator}
                    animating={this.state.showDefault}
                />
            </View>
        );
    }
}




const styles = StyleSheet.create({

    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        color: 'red'
    },
});
