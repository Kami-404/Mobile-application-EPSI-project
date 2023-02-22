import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Plantes3 extends React.Component {
    render(){
        return (
            <View style={style.container}>
                <Image 
                style={style.loginimage} 
                source={require("./plante3.jpg")}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    loginimage: {
        width: 200,
        height: 200,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
    }
})