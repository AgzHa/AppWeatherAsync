import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/AppWeather/Header';
import Footer from './src/AppWeather/Footer';
import Weather from './src/AppWeather/PrakiraanCuaca';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Header headerText="Header"/>
        <Weather/>
        <Footer footerText="Footer"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#E8EAF6'
  }
});