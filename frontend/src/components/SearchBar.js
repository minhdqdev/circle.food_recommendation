import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "@ant-design/react-native";
import DEFAULT_IMAGE from "../utils/Constant";

export class SearchBar extends React.PureComponent {
  render() {
    const { placeholder, iconSearch, onChangeText, value, style } = this.props;
    return (
      <TextInput
        placeholder={placeholder}
        style={style}
        onChangeText={onChangeText}
        value={value}
      />
    );
  }
}
