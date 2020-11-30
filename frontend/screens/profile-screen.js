import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    View,
    Image,
    TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "../components/firebase";

const defaultUser = {
    avatar_url: require("../assets/avatar.jpg"),
    username: "minhdq99hp",
    first_name: "Minh",
    last_name: "Đặng Quang",
    gender: "nam",
};

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            phoneNumber: "",
            photoURL: defaultUser.avatar_url,
            displayName: "",
            errorMessage: "",
        };
    }

    componentDidMount() {
        const currentUser =
            firebase.auth() && firebase.auth().currentUser
                ? firebase.auth().currentUser
                : {};
        this.setState({ user: currentUser });

        const { phoneNumber, photoURL, displayName } = currentUser;
        this.setState({
            phoneNumber: phoneNumber,
            photoURL: photoURL ? photoURL : this.state.photoURL,
            displayName: displayName ? displayName : "",
        });
    }

    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.props.naivgation.navigate("Loading");
            })
            .catch((error) => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Tài khoản</Text>

                <View style={styles.userAvatarContainer}>
                    <Image
                        style={styles.userAvatar}
                        source={this.state.photoURL}
                    />
                    <TouchableOpacity style={styles.changeAvatarButton}>
                        <AntDesign name="camerao" size={20} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{ width: "85%" }}>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Họ và tên</Text>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <EvilIcons
                                    style={styles.inputIcon}
                                    name="user"
                                    size={24}
                                    color="black"
                                />
                            </View>

                            <TextInput>{this.state.displayName}</TextInput>
                        </View>
                    </View>

                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Số điện thoại</Text>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <EvilIcons
                                    style={styles.inputIcon}
                                    name="user"
                                    size={24}
                                    color="black"
                                />
                            </View>

                            <TextInput>{this.state.phoneNumber}</TextInput>
                        </View>
                    </View>

                    {/* <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Giới tính</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome style={styles.inputIcon} name="genderless" size={24} color="black" />
                        </View>
                        <TextInput>{defaultUser.gender}</TextInput>
                    </View>
                </View> */}
                </View>
                <TouchableOpacity
                    style={styles.signOutButton}
                    onPress={this.handleSignOut}
                >
                    <Text style={{ color: "white" }}>Đăng xuất</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        marginTop: 50,
        fontSize: 30,
    },
    userAvatarContainer: {
        marginTop: 30,
        marginBottom: 30,
    },
    userAvatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    changeAvatarButton: {
        backgroundColor: "white",
        position: "absolute",
        right: 0,
        bottom: 0,
        borderRadius: 10,
        overflow: "hidden",
    },
    fieldContainer: {
        marginBottom: 20,
    },
    label: {
        paddingBottom: 5,
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "lightgray",
        height: 45,
        alignItems: "center",
        borderRadius: 5,
    },
    iconContainer: {
        width: "15%",
        alignItems: "center",
    },
    inputIcon: {},
    signOutButton: {
        marginTop: 30,
        backgroundColor: "red",
        padding: 10,
        width: "30%",
        alignItems: "center",
        borderRadius: 10,
    },
});
