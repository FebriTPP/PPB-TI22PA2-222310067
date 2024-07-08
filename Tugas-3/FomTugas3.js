//RCC
import React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Image,
} from 'react-native';

const imageSource = require('../assets/boy.png'); 

const App = () => {
        return (
            <View style={styles.container}>
                <Image source={imageSource} style={styles.profileImage} />
                <Text style={styles.header}>FORM Data Diri</Text>
                <View>
                <Text>NPM</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Masukan NPM"
                    placeholderTextColor='gray'
                    keyboardType="numeric"
                />

                <Text>Nama</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Masukkan Nama"
                    placeholderTextColor="gray"
                    
                />

                <Text>Kelas</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Masukkan Kelas'
                    placeholderTextColor={'gray'}
                />
                </View>
                <Button
                title="Submit"
                />
            </View>

        );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputText: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: 300,
      },

    header:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
});


export default App;