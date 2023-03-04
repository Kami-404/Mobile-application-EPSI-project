import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Avatar, Rating } from 'react-native-elements';

const data = [
  {
    id: '1',
    title: 'Plante 1',
    content: 'Ceci est le contenu de l\'article 1',
  },
  {
    id: '2',
    title: 'Plante 2',
    content: 'Ceci est le contenu de l\'article 2',
  },
  {
    id: '3',
    title: 'Plante 3',
    content: 'Ceci est le contenu de l\'article 3',
  },
];

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Avatar
        rounded
        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        size="xlarge"
        containerStyle={{ marginBottom: 10 }}
      />
      <Text style={{ fontSize: 24 }}>John Doe</Text>
      <Rating
        imageSize={20}
        readonly
        startingValue={4.5}
        style={{ marginTop: 10 }}
      />
      <Text style={{ fontSize: 20, marginTop: 20 }}>Mes Plantes:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 16 }}>{item.content}</Text>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default ProfileScreen;
