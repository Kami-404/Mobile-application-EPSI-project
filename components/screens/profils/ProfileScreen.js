import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('activite');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('./image2.png')}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.profileName}>John Smith</Text>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'activite' ? styles.activeTab : null,]}
            onPress={() => handleTabChange('activite')}>
          <Text style={styles.tabButtonText}>Activité</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'a_propos' ? styles.activeTab : null,]}
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
          <Text>Page à propos</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: 'linear-gradient(FROM_GREEN_TO_WHITE)',
    alignItems: 'center',
    paddingVertical: 20,
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
});

export default ProfileScreen;
