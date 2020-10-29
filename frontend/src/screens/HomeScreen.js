import React from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import { SearchBar } from "react-native-elements";
import { ItemStore } from "../components/ItemStore";
import { data } from "../utils/Constant";

export default class HomeScreen extends React.PureComponent {
  state = {
    data: data,
    search: "",
  };

  renderItem = ({ item, index }) => {
    return <ItemStore item={item} />;
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { data, search } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar />
        <SearchBar
          placeholder="Tìm kiếm quán ăn..."
          onChangeText={this.updateSearch}
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
