import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { DEFAULT_IMAGE } from "../utils/Constant";
import { AirbnbRating } from "react-native-ratings";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

export class ItemDish extends React.PureComponent {
    render() {
        const { onPress } = this.props;
        const { photos, name, description, price } = this.props.item;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image
                    style={styles.image}
                    resizeMode="stretch"
                    source={
                        photos
                            ? { uri: photos[photos.length - 1].value }
                            : DEFAULT_IMAGE
                    }
                />
                <Text style={styles.nameStore}>{name}</Text>
                <Text style={styles.address}>{description}</Text>
                <View style={styles.wrapperRating}>
                    <Text>{price.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width * 0.4,
        justifyContent: "center",
        alignItems: "center",
        margin: width * 0.05,
    },
    image: {
        width: width * 0.4,
        height: width * 0.3,
        borderRadius: 8,
    },
    nameStore: {
        fontWeight: "bold",
        fontSize: 14,
    },
    address: {
        fontSize: 10,
        alignSelf: "flex-start",
    },
    wrapperRating: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
    },
    starRating: {
        width: 15,
        resizeMode: "contain",
        padding: 0,
    },
    rating: {
        width: 50,
    },
});
