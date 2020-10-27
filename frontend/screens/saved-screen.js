import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, TextInput, View, Image, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


const restaurants = [
    {
        name: "One Piece - Buffet, BBQ & Thai Hotpot - Nguyễn Chí Thanh",
        address: "118 Nguyễn Chí Thanh, Ba Đình",
        url: "https://www.now.vn/ha-noi/table/one-piece-buffet-bbq-thai-hotpot-nguyen-chi-thanh",
        thumbnail: require('../assets/restaurant_thumbnail.jpg'),
    },
    {
        name: "One Piece - Buffet, BBQ & Thai Hotpot - Nguyễn Chí Thanh",
        address: "118 Nguyễn Chí Thanh, Ba Đình",
        url: "https://www.now.vn/ha-noi/table/one-piece-buffet-bbq-thai-hotpot-nguyen-chi-thanh",
        thumbnail: require('../assets/restaurant_thumbnail.jpg'),
    },
    {
        name: "One Piece - Buffet, BBQ & Thai Hotpot - Nguyễn Chí Thanh",
        address: "118 Nguyễn Chí Thanh, Ba Đình",
        url: "https://www.now.vn/ha-noi/table/one-piece-buffet-bbq-thai-hotpot-nguyen-chi-thanh",
        thumbnail: require('../assets/restaurant_thumbnail.jpg'),
    },
    {
        name: "One Piece - Buffet, BBQ & Thai Hotpot - Nguyễn Chí Thanh",
        address: "118 Nguyễn Chí Thanh, Ba Đình",
        url: "https://www.now.vn/ha-noi/table/one-piece-buffet-bbq-thai-hotpot-nguyen-chi-thanh",
        thumbnail: require('../assets/restaurant_thumbnail.jpg'),
    },
    {
        name: "One Piece - Buffet, BBQ & Thai Hotpot - Nguyễn Chí Thanh",
        address: "118 Nguyễn Chí Thanh, Ba Đình",
        url: "https://www.now.vn/ha-noi/table/one-piece-buffet-bbq-thai-hotpot-nguyen-chi-thanh",
        thumbnail: require('../assets/restaurant_thumbnail.jpg'),
    },
    {
        name: "One Piece - Buffet, BBQ & Thai Hotpot - Nguyễn Chí Thanh",
        address: "118 Nguyễn Chí Thanh, Ba Đình",
        url: "https://www.now.vn/ha-noi/table/one-piece-buffet-bbq-thai-hotpot-nguyen-chi-thanh",
        thumbnail: require('../assets/restaurant_thumbnail.jpg'),
    },

];

const signOut = () => {
    alert('hi');
}

class RestaurantItem extends React.Component {
    constructor(props){
        super(props);

        
    }


    render(){
        const { name, thumbnail, address } = this.props.data;

        return (
            <View style={styles.restaurantItemContainer}>
                <Image style={styles.restaurantThumbnail} source={thumbnail}/>
                <View style={{marginLeft: 10}}>
                    <Text style={styles.restaurantName}>{name}</Text>
                    <Text style={styles.restaurantAddress}>{address}</Text>
                </View>
                
            </View>
        );
    }
}


export default class SavedScreen extends React.Component {


    render(){
        return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Các quán ăn đã lưu</Text>
            <ScrollView style={{height: '100%', width: '100%'}}>
                <View>
                    {
                        restaurants.map((r) => {
                            return <RestaurantItem data={r}/>;
                        })
                    }
                    
                </View>
                <View style={{height: 100}}></View>
            </ScrollView>
            
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
        marginBottom: 30,
        fontSize: 30,
    },
    restaurantThumbnail: {
        height: 100,
        width: 150,
    },
    restaurantName:{
        fontWeight: 'bold',
        width: 200,
    },
    restaurantAddress:{
        fontSize: 11,
    },
    restaurantItemContainer:{
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',

        overflow: 'hidden',
    }
  });
  