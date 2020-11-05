import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { DEFAULT_IMAGE } from "../utils/Constant";
import { Rating, AirbnbRating } from "react-native-ratings";

const { height, width } = Dimensions.get("screen");

export class ItemHistory extends React.PureComponent {
    render() {
        const { onPress } = this.props;
        const { imgStore, name, review, rating, time } = this.props.item;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image
                    style={styles.image}
                    resizeMode="stretch"
                    source={imgStore ? imgStore : DEFAULT_IMAGE}
                />
                <View style={styles.info}>
                    <Text
                        style={[
                            styles.name,
                            { textAlign: "center", marginBottom: 10 },
                        ]}
                    >
                        Ngày đến: {time}
                    </Text>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.wrapperRating}>
                        <AirbnbRating
                            showRating={false}
                            onFinishRating={this.ratingCompleted}
                            style={styles.rating}
                            isDisabled={true}
                            defaultRating={rating}
                            fractions={10}
                            starStyle={styles.starRating}
                            starContainerStyle={{ margin: 0 }}
                            style={{ margin: 0 }}
                        />
                        <Text>({rating})</Text>
                    </View>
                    <Text>{review}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 12,
    },
    image: {
        width: width * 0.2,
        height: "100%",
        borderRadius: 8,
    },
    info: {
        flex: 1,
        marginHorizontal: 12,
        alignItems: "stretch",
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
    },
    address: {
        fontSize: 10,
        alignSelf: "flex-start",
    },
    wrapperRating: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    starRating: {
        width: 18,
        resizeMode: "contain",
        marginVertical: -5,
        marginRight: 5,
    },
    rating: {
        width: 50,
        margin: 0,
    },
});
