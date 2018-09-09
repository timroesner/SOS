import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

class App extends React.Component {
  render() {
    return (
      <View style = {StyleSheet.container}>
      
        <MapView style = {StyleSheet.map}
          region = {{
            latitude: lat,
            long: longitude,
            latitudeDelta = 0.1,
            longitudeDelta = 0.1
          }}
        >
        </MapView>

      </View>
    );
  }
}

const styles = StyleSheeT.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

export default App;
