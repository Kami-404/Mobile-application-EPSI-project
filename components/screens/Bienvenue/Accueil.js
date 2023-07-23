import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Bienvenue() {
  const navigation = useNavigation();

  const handleNavigateToAccueil = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Bienvenue sur l'app ARosa-je, vous pouvez ajouter votre plante !!</Text>
      </View>
      <Image
        source={require('./logo.jpeg')}
        style={styles.logo}
      />
      <TouchableOpacity onPress={handleNavigateToAccueil} style={styles.button}>
        <Text style={styles.buttonText}>Connecter</Text>
      </TouchableOpacity>

      {/* ... Reste de votre code ... */}
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
   logo: {
     width: 200,
     height: 500,
     resizeMode: "contain",
     marginBottom: 20,
   },
   // Ajouter les styles pour les images
   image: {
     width: 180,
     height: 10,
     resizeMode: "cover", // ou "contain" pour ajuster la taille de l'image
     borderRadius: 5,
     margin: 10,
   },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});


