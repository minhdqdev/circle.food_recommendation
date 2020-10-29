import React from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import { SearchBar } from "react-native-elements";
import { ItemHistory } from "../components/ItemHistory";
import { history } from "../utils/Constant";

export default class ActivityScreen extends React.PureComponent {
  state = {
    data: history,
    search: "",
  };

  renderItem = ({ item }) => {
    return <ItemHistory item={item} props={this.props} />;
  };

  updateSearch = (search) => {
    this.setState({ search });
    this.props.navigation.navigate("Detail");
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
