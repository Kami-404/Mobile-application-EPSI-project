import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class ProfilIcon1 extends React.Component {
    render(){
        return (
            <View style={style.container}>
                <Image 
                style={style.loginimage} 
                source={require("./icon1.png")}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    loginimage: {
        width: 60,
        height: 60
    }
})