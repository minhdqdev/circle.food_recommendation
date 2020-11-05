import React, { useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import firebase from '../components/firebase';



export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            phoneNumber: '',
            recaptchaVerifier: React.createRef(null),
            hasError: false,
            errorMessage: "",
        };
    }

    handlePhoneLogin = () => {
        // send verification
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
    
        phoneProvider.verifyPhoneNumber(this.state.phoneNumber, this.state.recaptchaVerifier.current).then(
            (verificationId) => {
                // navigation to confirmOTP screen
                this.props.navigation.navigate('ConfirmOTP', {verificationId: verificationId});
            }
        );
    
        
    }

    checkValidPhoneNumber = (value) => {
        if(!value.startsWith("+84")){
            if(value.startsWith("0")){
                this.setState({phoneNumber: "+84" + value.slice(1), hasError: false});
            }
            else this.setState({hasError: true, errorMessage: "Số điện thoại phải chứa mã vùng Việt Nam +84."});
        }
        else this.setState({hasError: false, phoneNumber: value})
    }


    render(){
        return (
        <SafeAreaView style={styles.container}>
            <View style={{padding: 15}}>
                <View>
                    <Text style={{fontSize: 25}}>Xin chào,</Text>
                    <Text style={{fontSize: 20}}>Nhập số điện thoại của bạn để tiếp tục</Text>
                </View>
                
                <View style={{marginTop: 20, marginBottom: 50}}>
                    <View style={styles.inputContainer, {backgroundColor: 'white'}}>
        <TextInput style={{width: '100%', }} keyboardType="phone-pad" autoCompleteType="tel" onChangeText={value => this.checkValidPhoneNumber(value)} placeholder="Số điện thoại"></TextInput>
                    </View>
                    <View style={{width: '100%', height: 1, backgroundColor: 'gray'}}></View>
            <Text style={this.state.hasError ? {color: 'red'} : {color: 'white'}}>{this.state.errorMessage}</Text>
                </View>

                <View style={{paddingLeft: 30, paddingRight: 30}}>
                    <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={this.handlePhoneLogin}>
                        <Text style={{color: 'white'}}>Tiếp tục</Text>
                    </TouchableOpacity> 

                    <Text style={{padding: 15, textAlign: 'center'}}>Hoặc</Text>

                    <TouchableOpacity style={[styles.button, styles.signInFacebookButton]} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={{color: 'white'}}>Đăng nhập với Facebook</Text>
                    </TouchableOpacity> 
                </View>
                
                <View style={{marginTop: 30}}>
                    <Text style={{textAlign: 'center'}}>Sử dụng ứng dụng là bạn đã chấp nhận</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.push('TermsAndConditions')}>
                        <Text style={{color: 'blue', textAlign: 'center', textDecorationLine: 'underline'}}>Điều khoản và Điều kiện</Text>
                    </TouchableOpacity>
                </View>
                
                <FirebaseRecaptchaVerifierModal
                    ref={this.state.recaptchaVerifier}
                    firebaseConfig={firebase.app().options}
                />
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
  
  