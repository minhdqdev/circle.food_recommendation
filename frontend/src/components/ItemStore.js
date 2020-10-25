import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { DEFAULT_IMAGE } from "../utils/Constant";
import { Rating, AirbnbRating } from "react-native-ratings";

const { height, width } = Dimensions.get("screen");

export class ItemStore extends React.PureComponent {
    render() {
        const { imgStore, name, address, rating } = this.props.item;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="stretch"
                    source={imgStore ? imgStore : DEFAULT_IMAGE}
                />
                <Text style={styles.nameStore}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <View style={styles.wrapperRating}>
                    <AirbnbRating
                        showRating={false}
                        onFinishRating={this.ratingCompleted}
                        style={styles.rating}
                        isDisabled={true}
                        defaultRating={rating}
                        fractions={10}
                        starStyle={styles.starRating}
                    />
                    <Text>({rating})</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
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
