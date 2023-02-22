import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class ProfilIcon2 extends React.Component {
    render(){
        return (
            <View style={style.container}>
                <Image 
                style={style.loginimage} 
                source={require("./icon2.png")}
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