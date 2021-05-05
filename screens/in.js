import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class InstagramScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Welcome To Instagram</Text>
              <Image
                style={styles.imageIcon}
                source={require("../assets/instagram.jpg")}
                />
            </View>
          );
        }
    }
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 24,
      textAlign: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      marginBottom: 30,
    },
    imageIcon: {
      width: 150,
      height: 150,
      marginLeft: 65,
      marginBottom: 30,
    },
  });
