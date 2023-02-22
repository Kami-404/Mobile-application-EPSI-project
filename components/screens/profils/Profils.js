import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ProfilsImage from "./Profils_image";

const Tab = createBottomTabNavigator();

export default class Accueil extends React.Component {

    render(){
        return (
            <View style={style.main}>
                <ProfilsImage />
                <Text style={style.view}>{"\n"}Prenom Nom{"\n"}</Text>
                <View style={style.barre}>
                    <View style={style.profildata}>
                        <Text style={style.nbplantes}>12{"\n"}Plante</Text>
                        <Text style={style.nbfollowers}>120{"\n"}Followers</Text>
                        <Text style={style.nbstars}>4{"\n"}Gardien</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    main:{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    view: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      },
    barre:{
        width: 320,
        height: 60,
        backgroundColor: '#00BCD4',
    },      
    profildata: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nbplantes: {
        textAlign: "center",
        marginHorizontal: 10,
    },
    nbfollowers: {
        textAlign: "center",
        marginHorizontal: 10,
    },
    nbstars:{
        textAlign: "center",
        marginHorizontal: 10,
    }
})
