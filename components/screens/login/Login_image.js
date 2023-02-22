import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class LoginImage extends React.Component {
    render(){
        return (
            <View style={style.container}>
                <Image 
                style={style.loginimage} 
                source={require("./image1.png")}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    loginimage: {
        width: 250,
        height: 190
    }
})