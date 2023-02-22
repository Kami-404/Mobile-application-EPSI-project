import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class ProfilsImage extends React.Component {
    render(){
        return (
            <View style={style.container}>
                <Image 
                style={style.profilsimage} 
                source={require("./image2.png")}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
      },
      
    profilsimage: {
        width: 200,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        
    }
})