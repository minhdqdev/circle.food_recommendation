import React from "react";
import { StyleSheet, View, FlatList, StatusBar, Alert } from "react-native";
import { SearchBar } from "react-native-elements";
import { ItemStore } from "../components/ItemStore";
import { getListRestaurant, getSearchDish } from "../services/api";
import { DETAIL_SCREEN } from "../utils/Constant";
import { ItemDish } from "../components/ItemDish";
import * as Location from "expo-location";
import { location } from "../utils/Constant";

const _ = require("lodash");

class HomeScreen extends React.Component {
    state = {
        type: 0,
        data: [],
        search: "",
        page: 1,
        location: null,
    };

    constructor(props) {
        super(props);
        this.onChangeTextDelayed = _.debounce(this.debounceFunc, 300);
    }

    componentDidMount = async () => {
        const { search } = this.state;
        //get location
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
            Alert("Permission to access location was denied");
        }
        let _location;
        try {
            _location = await Location.getCurrentPositionAsync({});
        } catch (err) {
            _location = {
                coords: {
                    latitude: 21.0333,
                    longitude: 105.85,
                },
            };
        } finally {
            location.latitude = _location.coords.latitude;
            location.longitude = _location.coords.longitude;
            this.setState({ location: _location }, () =>
                console.log("Current location: ", location)
            );
            const data = await getListRestaurant(search);
            this.setState({ data });
        }
    };

    onPressItem = async (item) => {
        this.props.navigation.navigate(DETAIL_SCREEN, {
            data: item,
            key: this.state.search,
        });
    };

    renderItem = ({ item }) => {
        return <ItemStore item={item} onPress={() => this.onPressItem(item)} />;
    };

    renderItemDish = ({ item }) => {
        return <ItemDish item={item} />;
    };

    debounceFunc = async () => {
        const { search, page } = this.state;
        if (search === "") {
            const data = await getListRestaurant(search);
            this.setState({ data, type: 0 });
            return;
        }
        const data = await getListRestaurant(search, 20);
        this.setState({ data, type: 0 });
        return;
        // const data = await getSearchDish(search, page);
        // this.setState({ data, type: 1 });
    };

    onChangeText = (text) => {
        this.setState({ search: text });
        this.onChangeTextDelayed();
    };

    render() {
        const { data, search, type, page } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar />
                <SearchBar
                    placeholder="Tìm kiếm quán ăn..."
                    onChangeText={this.onChangeText}
                    value={search}
                    inputStyle={styles.inputSearch}
                    containerStyle={styles.containerSearch}
                    inputContainerStyle={styles.containerSearch}
                    searchIcon={false}
                />
                <FlatList
                    style={styles.wrapperList}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={type ? this.renderItemDish : this.renderItem}
                />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcfcfc",
    },
    inputSearch: {
        backgroundColor: "#DDD",
        borderRadius: 100,
        paddingHorizontal: 8,
    },
    containerSearch: {
        backgroundColor: "#FFF",
        borderBottomColor: "#FFF",
    },
    wrapperList: {
        flex: 1,
        marginHorizontal: 5,
    },
});
