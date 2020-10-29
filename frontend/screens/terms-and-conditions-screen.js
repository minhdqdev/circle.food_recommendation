import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


export default class TermsAndConditionsScreen extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
        <SafeAreaView style={styles.container}>
            <Text>Terms and Conditions: </Text>
        </SafeAreaView>
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
  });
  
  