import React from "react";
import { View, Text, StyleSheet, TextInput, Button,ScrollView } from 'react-native';
import Profil_icon1 from "./Profil_icon1";
import Profil_icon2 from "./Profil_icon2";
import Profil_icon3 from "./Profil_icon3";
import Plantes1 from "./Plantes1";
import Plantes2 from "./Plantes2";
import Plantes3 from "./Plantes3";

export default class Accueil extends React.Component {
    render(){
        return (
            <View style={style.container}>
                <ScrollView>
                <View style={style.maincontainer}>
                    <View style={style.profiltop}>
                        <Profil_icon1 />
                        <Text style={style.profilname}>John Smith</Text>
                    </View>
                    <View style={style.plante}>
                        <Plantes1 />
                        <View style={style.plantedescrip}>
                            <Text>Description{"\n"}
                            Nom : Monstera deliciosa{"\n"}
                            Details : Bonjour, je pars en vacances cet été, 
                            je cherche quelqu'un pour garder la précieuse plante que ma grand mère m'a offerte !
                            </Text>
                            <View style={style.gardien}>
                                <Button
                                color= "#3CB371" 
                                title="Gardien">
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={style.maincontainer}>
                    <View style={style.profiltop}>
                        <Profil_icon2 />
                        <Text style={style.profilname}>Thomas Waller</Text>
                    </View>
                    <View style={style.plante}>
                        <Plantes2 />
                        <View style={style.plantedescrip}>
                            <Text>Description{"\n"}
                            Nom : Petit jardin{"\n"}
                            Details : Bonjour, je cherche quelqu'un qui pouvait se déplacer pour s'occuper de mes plantes !
                            </Text>
                            <View style={style.gardien}>
                                <Button
                                color= "#3CB371" 
                                title="Gardien">
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={style.maincontainer}>
                    <View style={style.profiltop}>
                        <Profil_icon3 />
                        <Text style={style.profilname}>Talia Kirk</Text>
                    </View>
                    <View style={style.plante}>
                        <Plantes3 />
                        <View style={style.plantedescrip}>
                            <Text>Description{"\n"}
                            Nom : Iris{"\n"}
                            Details : Bonjour ! Je cherche quelqu'un pour s'occuper de mes plantes d'Iris durant 
                            le week-end prochain !
                            </Text>
                            <View style={style.gardien}>
                                <Button
                                color= "#3CB371" 
                                title="Gardien">
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}


const style = StyleSheet.create({
    maincontainer: {
        width: 370,
        height: 300,
        backgroundColor: '#F7F9FA',
        marginHorizontal: 11,
        marginVertical: 11,
        borderRadius: 10,
    },
    profiltop: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 3,
    },
    profilname: {
        marginLeft: 10,
    },
    plante: {
        flexDirection: "row",
    },
    plantedescrip: {
        marginLeft: 15,
        width: 140,
    },
    gardien: {
        width: 130,
        position: "absolute",
        bottom: 0,
    },
})
