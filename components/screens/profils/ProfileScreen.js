import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('activite');
  const [showModal, setShowModal] = useState(false);
  const [profileName, setProfileName] = useState('John Smith');
  const [profileNum, setProfileNum] = useState('0612345678');
  const [profilePhone, setProfilePhone] = useState('johnsmit@gmail.com');
  const [profileImage, setProfileImage] = useState(require('./image2.png'));
  const [aboutMe, setAboutMe] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleSaveProfile = () => {
    // Note pour flobert : ici faut appeler l'api pour enregistrer les modifs dans le back
    setShowModal(false);
  };

return (
  <View style={styles.container}>
    <View style={styles.topSection}>
      <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
        <Text style={styles.editButtonText}>...</Text>
      </TouchableOpacity>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>
      <Text style={styles.profileName}>{profileName}</Text>
    </View>

    <View style={styles.bottomSection}>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'activite' ? styles.activeTab : null]}
        onPress={() => handleTabChange('activite')}>
        <Text style={styles.tabButtonText}>Activité</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'a_propos' ? styles.activeTab : null]}
        onPress={() => handleTabChange('a_propos')}>
        <Text style={styles.tabButtonText}>A propos</Text>
      </TouchableOpacity>
    </View>

    {activeTab === 'activite' ? (
      <View style={styles.contentContainer}>
        <Text>Page activité</Text>
      </View>
    ) : (
      <View style={styles.contentContainer}>
        <Text>{aboutMe}</Text>
      </View>
    )}

    <Modal visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Modifier le profil</Text>
        <TextInput
          style={styles.input}
          value={profileName}
          onChangeText={setProfileName}
          placeholder="Nom du profil"/>
        <TextInput
          style={styles.input}
          value={profileNum}
          onChangeText={setProfileNum}
          placeholder="Numéro du profil"/>
        <TextInput
          style={styles.input}
          value={profilePhone}
          onChangeText={setProfilePhone}
          placeholder="Mail du profil"/>
        <TextInput
          style={styles.input}
          value={aboutMe}
          onChangeText={setAboutMe}
          placeholder="A propos de moi"
          multiline/>
        <Button title="Enregistrer" onPress={handleSaveProfile} />
        <Button title="Annuler" onPress={() => setShowModal(false)} />
      </View>
    </Modal>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#AFE1AF',
    alignItems: 'center',
    paddingVertical: 20,
    position: 'relative',
  },
  profileImageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  tabButtonText: {
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  editButtonText: {
    fontSize: 20,
  },
});

export default ProfileScreen;
