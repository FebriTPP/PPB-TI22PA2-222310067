import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

var name = "Febri Tri Purnama Putra"
const MyProfile = () => {
    return (
        <View>
            <Text>My Profile</Text>
            <Text>Nama:{name}</Text>
            <Text>NPM: {types.NPM}</Text>
            <Text>Kelas: {types.Kelas}</Text>
            <Image source={require("../assets/myprofile.jpg")}/>
        </View>
    );    
};

const styles = StyleSheet.create({})

export default MyProfile;
const types = {NPM:"222310067", Kelas:"TI22PA2"};