import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class Map extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 48.866667,
                    longitude: 2.333333,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>



                    <Marker
                    coordinate={{
                        latitude: 48.87439445442854,
                        longitude: 2.3274965131835845,
                    }}
                    image={require("./ping.png")}
                    />
                                        <Marker
                    coordinate={{
                        latitude: 48.83842779869256,
                        longitude: 2.3336370374781845,
                    }}
                    image={require("./ping.png")}
                    />
                    <Marker
                    coordinate={{
                        latitude: 48.87340405346292,
                        longitude: 2.464677190571054,
                    }}
                    image={require("./ping.png")}
                    />
                    <Marker
                    coordinate={{
                        latitude: 48.845168645301236,
                        longitude: 2.241209644113362,
                    }}
                    image={require("./ping.png")}
                    />


                  </MapView>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
  });