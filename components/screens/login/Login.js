import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import LoginImage from "./Login_image";

export default class Login extends React.Component {

    state={
        mail: '',
        pwd: ''
    }
    handleMail = (text) => {
        this.setState({ mail: text})
    }
    handlePwd = (text) => {
        this.setState({ pwd: text})
    }   

    render(){
        return (
            <View style={style.view}>
                <LoginImage />
                <Text style={style.title}>
                    Bienvenue sur A'Rosa-je !
                </Text>
                <TextInput
                    style={style.input}
                    placeholder="Identifiants"
                    keyboardType="text">
                </TextInput>
                <TextInput
                    secureTextEntry={true}
                    style={style.input}
                    placeholder="Mots de passe"
                    keyboardType="password">
                </TextInput>
                <Button
                    onPress={() => this.loginHome()}
                    title="Connexion">
                </Button>
                    <Text style={style.text}>Ou</Text>
                <Button
                    color= "#FF5C2C"
                    title="Google"
                    onPress={() => {Linking.openURL("https://accounts.google.com/v3/signin/identifier?dsh=S218827057%3A1675598504973842&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%26ogbl%2F&emr=1&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHcJGIJLEhpSlA_mmu4UiWKuQ5mYyRyt1y9lqD2oubTGsnMmpPHoyTBCracfXbtxF1THsUXdKg")}}>
                </Button>
                <Text style={style.text}>{"\n"}Inscription</Text>
            </View>
            
        )
    }
}


const style = StyleSheet.create({

    login: {
        width: 66,
        height: 58,
    },
    
    title: {
        fontSize: 22,
        marginBottom: 20
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    
    text: {
        textAlign: 'center'
    }
})
