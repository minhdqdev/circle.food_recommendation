import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import firebase from '../components/firebase';


export default class ConfirmOTPScreen extends React.Component {
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            code: null,
        };
    }

    confirmOTP = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            this.props.route.params.verificationId,
            this.state.code
        );

        firebase.auth().signInWithCredential(credential).then((result) => {
            this.props.navigation.navigate('Main');
        })
    }
    

    render(){
        return (
        <SafeAreaView style={styles.container}>
            <View style={{padding: 15}}>
                <View>
                    <Text style={{fontSize: 25}}>Xác nhận OTP</Text>
                    <Text style={{fontSize: 20}}>Mã OTP đã được gửi đến số điện thoại của bạn. Vui lòng nhập vào đây để tiếp tục.</Text>
                </View>
                
                <View style={{marginTop: 20, marginBottom: 50}}>
                    <View style={styles.inputContainer, {backgroundColor: 'white'}}>
                        <TextInput style={{width: '100%', }} keyboardType="number-pad" placeholder="Mã xác nhận" onChangeText={value=>this.setState({code: value})}></TextInput>
                    </View>
                    <View style={{width: '100%', height: 1, backgroundColor: 'gray'}}></View>
                </View>

                <View style={{paddingLeft: 30, paddingRight: 30}}>
                    <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={this.confirmOTP}>
                        <Text style={{color: 'white'}}>Xác nhập</Text>
                    </TouchableOpacity> 
                </View>
            </View>
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
    inputContainer:{
        height: 45,
        alignItems: "center",
        borderRadius: 5,
    },
    button:{
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        backgroundColor: "red",
    },

    signInButton:{
        
        
    },

    signInFacebookButton:{
        backgroundColor: 'blue',
    }
  });
  
  