import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { DEFAULT_IMAGE } from "../utils/Constant";
import { AirbnbRating } from "react-native-ratings";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { getDishOfRestaurant, getNearRestaurant } from "../services/api";
import { optimizedDishes } from "../services/optimizeDish";
import { ItemDish } from "../components/ItemDish";
import { ItemStore } from "../components/ItemStore";

const { height } = Dimensions.get("screen");

export default class DetailScreen extends React.PureComponent {
    state = {
        info: {
            rating: {
                avg: 0,
                display_total_review: "",
                total_review: 0,
            },
        },
        dishes: [],
        rcmRes: [],
    };

    componentDidMount = async () => {
        this.setState({
            info: this.props.route.params.data,
        });
        const restaurantId = this.props.route.params.data.id;
        const key = this.props.route.params.key;
        const data = await getDishOfRestaurant(restaurantId);
        const rcmRes = await getNearRestaurant(restaurantId);
        const resData = optimizedDishes(data, key);
        this.setState({
            dishes: resData,
            rcmRes,
        });
    };

    onPressItem = async (item) => {
        this.setState({
            info: item,
        });
        this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
        const restaurantId = item.id;
        const data = await getDishOfRestaurant(restaurantId);
        const rcmRes = await getNearRestaurant(restaurantId);
        const resData = optimizedDishes(data, item.name);
        this.setState({ dishes: resData, rcmRes });
    };

    renderItem = (item, index) => {
        return <ItemDish item={item} key={index} onPress={() => {}} />;
    };

    renderRes = (item, index) => {
        return (
            <ItemStore
                key={index}
                item={item}
                onPress={() => this.onPressItem(item)}
            />
        );
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

    _renderNearRestaurant = () => {
        const { rcmRes } = this.state;
        return (
            <View>
                <Text style={styles.title}>Quán ăn đề xuất</Text>
                <View style={styles.wrapperList}>
                    {rcmRes.map((item, index) => this.renderRes(item, index))}
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
            price_range,
        } = this.state.info;
        return (
            <ScrollView
                style={{ flex: 1 }}
                ref={(ref) => (this.scrollView = ref)}
            >
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
                    <View style={{ flexDirection: "row", height: 25 }}>
                        <FontAwesome
                            name="map-marker"
                            size={18}
                            color="grey"
                            style={styles.icon}
                        />
                        <Text>{address}</Text>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <FontAwesome
                            name="phone"
                            size={18}
                            color="grey"
                            style={styles.icon}
                        />
                        <Text>{phones ? phones[0] : "0369789432"}</Text>

                        <Fontisto
                            name="shopping-store"
                            size={14}
                            color="grey"
                            style={[
                                styles.icon,
                                { marginLeft: 50, paddingTop: 3 },
                            ]}
                        />
                        <Text>
                            {price_range
                                ? `${price_range.min_price} ₫ - ${price_range.max_price} ₫`
                                : "Chưa có thông tin"}
                        </Text>
                    </View>
                    {this._renderDishes()}
                    {this._renderNearRestaurant()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: "#fcfcfc",
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
        fontSize: 18,
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
