import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button,ScrollView,Image, TouchableOpacity } from 'react-native';
import Profil_icon1 from "./Profil_icon1";
import Profil_icon2 from "./Profil_icon2";
import Profil_icon3 from "./Profil_icon3";
import Plantes1 from "./Plantes1";
import Plantes2 from "./Plantes2";
import Plantes3 from "./Plantes3";

export default function Accueil() {

    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
  
    const handleSubmit = () => {
      const newArticle = {
        title,
        description,
        photo,
      };
      setArticles([...articles, newArticle]);
      setTitle('');
      setDescription('');
      setPhoto('');
    };

        return (
            <View style={style.container}>
                <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Photo URL"
                    value={photo}
                    onChangeText={setPhoto}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Create Article</Text>
                    </TouchableOpacity>
                </View>
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

                {/* {articles.map((article, index) => (
                    <View key={index} style={styles.article}>
                        <Image style={styles.articlePhoto} source={{ uri: article.photo }} />
                        <View style={styles.articleContent}>
                        <Text style={styles.articleTitle}>{article.title}</Text>
                        <Text style={styles.articleDescription}>{article.description}</Text>
                        </View>
                    </View>
                    ))} */}

            {articles.map((article, index) => (
                <View style={style.maincontainer}>
                    <View style={style.profiltop}>
                        <Profil_icon2 />
                        <Text style={style.profilname}>{article.title}</Text>
                    </View>
                    <View style={style.plante}>
                        <Plantes2 />
                        <View style={style.plantedescrip}>
                            <Text>{article.description}
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
            ))}




                </ScrollView>
            </View>
        )
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      alignSelf: 'stretch',
      padding: 20,
      backgroundColor: '#f2f2f2',
    },
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    button: {
      backgroundColor: '#1e90ff',
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    articlesContainer: {
      flex: 1,
      alignSelf: 'stretch',
    },
    article: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    articlePhoto: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    articleContent: {
      flex: 1,
    },
    articleTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    articleDescription: {
      fontSize: 14,
      color: '#666',
    },
  });
  