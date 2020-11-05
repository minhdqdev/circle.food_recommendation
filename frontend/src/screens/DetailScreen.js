import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { DEFAULT_IMAGE } from "../utils/Constant";
import { AirbnbRating } from "react-native-ratings";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { getDishOfRestaurant } from "../services/api";
import { ItemDish } from "../components/ItemDish";

const { height } = Dimensions.get("screen");

export default class DetailScreen extends React.PureComponent {
    state = {
        dishes: [],
    };
    componentDidMount = async () => {
        const restaurantId = this.props.route.params.data.id;
        const data = await getDishOfRestaurant(restaurantId);
        this.setState({ dishes: data });
    };

    renderItem = (item, index) => {
        return <ItemDish item={item} key={index} onPress={() => {}} />;
    };

    _renderDishes = () => {
        const { dishes } = this.state;
        return (
            <View>
                <Text style={styles.title}>Danh sách món ăn</Text>
                <View style={styles.wrapperList}>
                    {dishes.map((item, index) => this.renderItem(item, index))}
                </View>
            </View>
        );
    };

    render() {
        const {
            photos,
            name,
            rating,
            address,
            phones,
        } = this.props.route.params.data;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        resizeMode="stretch"
                        source={
                            photos
                                ? { uri: photos[photos.length - 1].value }
                                : DEFAULT_IMAGE
                        }
                    />
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.wrapperRating}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <AirbnbRating
                                showRating={false}
                                onFinishRating={this.ratingCompleted}
                                style={styles.rating}
                                isDisabled={true}
                                defaultRating={rating.avg}
                                fractions={10}
                                starStyle={styles.starRating}
                                starContainerStyle={{ margin: 0 }}
                                style={{ margin: 0 }}
                            />
                            <Text>({rating.avg})</Text>
                        </View>
                        <Text>({rating.display_total_review})</Text>
                    </View>
                    {/* <Text>{descrip}</Text> */}
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
                        <Text>{phones[0]}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Fontisto
                            name="shopping-store"
                            size={14}
                            color="grey"
                            style={styles.icon}
                        />
                        {/* <Text>{activeTime}</Text> */}
                    </View>
                    {this._renderDishes()}
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
    wrapperList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: -15,
    },
});
