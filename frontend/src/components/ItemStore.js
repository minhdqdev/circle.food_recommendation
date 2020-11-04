import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { DEFAULT_IMAGE } from "../utils/Constant";
import { Rating, AirbnbRating } from "react-native-ratings";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("screen");

export class ItemStore extends React.PureComponent {
    render() {
        const { onPress } = this.props;
        const { photos, name, address, rating } = this.props.item;
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
                <Text style={styles.address}>{address}</Text>
                <View style={styles.wrapperRating}>
                    <AirbnbRating
                        showRating={false}
                        onFinishRating={this.ratingCompleted}
                        style={styles.rating}
                        isDisabled={true}
                        defaultRating={rating.avg}
                        fractions={10}
                        starStyle={styles.starRating}
                    />
                    <Text>({rating.avg})</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width * 0.5,
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
