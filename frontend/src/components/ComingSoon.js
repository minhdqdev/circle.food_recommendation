import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export class ComingSoon extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../../assets/coming_soon.jpg")}
                    style={styles.image}
                    resizeMode={"contain"}
                />
                <Text style={styles.text}>Tính năng đang được phát triển</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    image: {
        width: 80,
        height: 80,
    },
});
