import React from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import { SearchBar } from "react-native-elements";
import { ItemStore } from "../components/ItemStore";
import { getListRestaurant } from "../services/api";
import { DETAIL_SCREEN } from "../utils/Constant";

const _ = require("lodash");

class HomeScreen extends React.Component {
    state = {
        data: [],
        search: "",
    };

    constructor(props) {
        super(props);
        this.onChangeTextDelayed = _.debounce(this.debounceFunc, 500);
    }

    componentDidMount = async () => {
        const data = await getListRestaurant();
        this.setState({ data: data });
    };

    onPressItem = async (item) => {
        this.props.navigation.navigate(DETAIL_SCREEN, {
            data: item,
        });
    };

    renderItem = ({ item }) => {
        return <ItemStore item={item} onPress={() => this.onPressItem(item)} />;
    };

    debounceFunc = () => {
        console.log(this.state.search);
    };

    onChangeText = (text) => {
        this.setState({ search: text });
        this.onChangeTextDelayed();
    };

    render() {
        const { data, search } = this.state;
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
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
