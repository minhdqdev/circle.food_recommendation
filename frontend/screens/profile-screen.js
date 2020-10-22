import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, Image, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const user = {
    avatar_url: require('../assets/avatar.jpg'),
    username: "minhdq99hp",
    first_name: "Minh",
    last_name: "Đặng Quang",
    gender: "nam",
}

const signOut = () => {
    alert('hi');
}


export default class ProfileScreen extends React.Component {


    render(){
        return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tài khoản</Text>

            <View style={styles.userAvatarContainer}>
                <Image style={styles.userAvatar} source={user.avatar_url}/>
                <TouchableOpacity style={styles.changeAvatarButton}>
                    <AntDesign name="camerao" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{width: "85%"}}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Họ và tên</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <EvilIcons style={styles.inputIcon} name="user" size={24} color="black" />
                        </View>
                        
                        <TextInput>{user.last_name} {user.first_name}</TextInput>
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Tên tài khoản</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <EvilIcons style={styles.inputIcon} name="user" size={24} color="black" />
                        </View>
                        
                        <TextInput>{user.username}</TextInput>
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Giới tính</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome style={styles.inputIcon} name="genderless" size={24} color="black" />
                        </View>
                        <TextInput>{user.gender}</TextInput>
                    </View>
                </View>
            </View>
            
            <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
                <Text style={{color: 'white'}}>Đăng xuất</Text>
            </TouchableOpacity>
            

        </SafeAreaView>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        marginTop: 50,
        fontSize: 30,
    },
    userAvatarContainer:{
        marginTop: 30,
        marginBottom: 30,
    },
    userAvatar:{
        width: 120,
        height: 120,
        borderRadius: 60,
        
    },
    changeAvatarButton:{
        backgroundColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0,
        // borderWidth: 1,
        borderRadius: 10,
    },
    fieldContainer:{
        marginBottom: 20,
    },
    label:{
        paddingBottom: 5,
    },
    inputContainer:{
        flexDirection: "row",
        backgroundColor: "lightgray",
        height: 45,
        alignItems: "center",
        borderRadius: 5,
    },
    iconContainer:{
        width: '15%',
        alignItems: 'center',
    },
    inputIcon:{        
    },
    signOutButton:{
        marginTop: 30,
        backgroundColor: "red",
        padding: 10,
        width: '30%',
        alignItems: 'center',
        borderRadius: 10,
    }
  });
  