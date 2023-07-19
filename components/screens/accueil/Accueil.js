import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import Profil_icon2 from "./Profil_icon2";
import Plantes2 from "./Plantes2";

export default function Accueil() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

const handleSubmit = () => {
  const newArticle = {
    title,
    description,
    photo,
    createdAt: new Date(),
  };

  fetch('http://192.168.56.1:3001/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newArticle),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server response :', data);
    })
    .catch(error => {
      console.error('Error while creating the article :', error);
    });

  setArticles([...articles, newArticle]);

  setTitle("");
  setDescription("");
  setPhoto("");
  setModalVisible(false);
};

  const handleDetails = (article) => {
    const createdAt = article.createdAt.toLocaleString();
    alert(`Article créé le : ${createdAt}`);
  };

  const handleDelete = (article) => {
    const updatedArticles = articles.filter((item) => item !== article);
    setArticles(updatedArticles);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleOpenModal}>
          <Text style={styles.addButtonLabel}>Nouveau</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.articlesContainer}>
        <View style={styles.articleList}>
          {articles.map((article, index) => (
            <View style={styles.articleContainer} key={index}>
              <View style={styles.articleHeader}>
                <View style={styles.profiltop}>
                  <Profil_icon2 />
                  <Text style={styles.profilname}>{article.title}</Text>
                </View>
                <TouchableOpacity
                  style={styles.moreOptions}
                  onPress={() => setSelectedArticle(article)}>
                  <Text>...</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.plante}>
                <Plantes2 />
                <View style={styles.plantedescrip}>
                  <Text>{article.description}</Text>
                  <View style={styles.gardien}>
                    <Button color="#3CB371" title="Gardien" />
                  </View>
                </View>
              </View>
              {selectedArticle === article && (
                <View style={styles.optionsContainer}>
                  <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleDetails(article)}>
                    <Text style={styles.optionText}>Détails</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleDelete(article)}>
                    <Text style={styles.optionText}>Supprimer</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Nouvelle plante</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom de la plante"
            value={title}
            onChangeText={text => setTitle(text)}/>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={text => setDescription(text)}/>
          <TextInput
            style={styles.input}
            placeholder="Photo"
            value={photo}
            onChangeText={text => setPhoto(text)}/>
          <Button title="Ajouter" onPress={handleSubmit} />
          <Button title="Annuler" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  addButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 260,
  },
  addButtonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  articlesContainer: {
    flex: 1,
  },
  articleList: {
    marginTop: 10,
  },
  articleContainer: {
    width: 370,
    height: 300,
    backgroundColor: "#F7F9FA",
    marginHorizontal: 11,
    marginVertical: 11,
    borderRadius: 10,
  },
  articleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  profiltop: {
    flexDirection: "row",
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
  moreOptions: {
    padding: 5,
  },
  optionsContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  optionButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    marginBottom: 5,
  },
  optionText: {
    color: "#333",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
