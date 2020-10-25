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
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { store } from "../utils/Constant";
import { ScrollView } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("screen");

export class DetaiScreen extends React.PureComponent {
    render() {
        const {
            imgStore,
            name,
            description,
            rating,
            activeTime,
            address,
            phone,
        } = store;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        resizeMode="stretch"
                        source={imgStore ? imgStore : DEFAULT_IMAGE}
                    />
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
                    <Text>{description}</Text>
                    <Text style={styles.title}>Thông tin</Text>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome
                            name="map-marker"
                            size={18}
                            color="grey"
                            style={styles.icon}
                        />
                        <Text>{address}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome
                            name="phone"
                            size={18}
                            color="grey"
                            style={styles.icon}
                        />
                        <Text>{phone}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Fontisto
                            name="shopping-store"
                            size={14}
                            color="grey"
                            style={styles.icon}
                        />
                        <Text>{activeTime}</Text>
                    </View>
                    <Text style={styles.title}>Anh</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    image: {
        width: "100%",
        height: height * 0.3,
        borderRadius: 8,
    },
    info: {
        flex: 1,
        marginHorizontal: 12,
        alignItems: "stretch",
    },
    name: {
        fontWeight: "bold",
        fontSize: 22,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 12,
    },
    icon: {
        width: 20,
        height: 20,
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
