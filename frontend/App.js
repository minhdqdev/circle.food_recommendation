import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import ActivityScreen from "./src/screens/ActivityScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./src/screens/DetailScreen";

import ProfileScreen from "./screens/profile-screen";
import SavedScreen from "./screens/saved-screen";
import LoginScreen from "./screens/login-screen";
import TermsAndConditionsScreen from "./screens/terms-and-conditions-screen";
import ConfirmOTPScreen from "./screens/confim-otp-screen";
import LoadingScreen from "./screens/loading-screen";

import firebase from "./components/firebase";
import { ComingSoon } from "./src/components/ComingSoon";

class CheckinScreen extends React.Component {
    render() {
        return <ComingSoon />;
    }
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const ActivityStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="Activity">
            <Stack.Screen
                name="Activity"
                component={ComingSoon}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const HomeStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

class MainTabScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        // const { currentUser } = firebase.auth();
        // // console.log(currentUser);
        // this.setState({user: currentUser});
    }

    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name={routeIcons[route.name]}
                            size={24}
                            color={focused ? "red" : "grey"}
                        />
                    ),
                })}
                tabBarOptions={{
                    activeTintColor: "red",
                    inactiveTintColor: "grey",
                }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Activity" component={ActivityStackScreen} />
                <Tab.Screen name="Checkin" component={CheckinScreen} />
                <Tab.Screen name="Saved" component={SavedScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        );
    }
}

const routeIcons = {
    Home: "home",
    Activity: "profile",
    Checkin: "pluscircleo",
    Saved: "staro",
    Profile: "user",
};

export default function App() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name="Loading"
                    component={LoadingScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainStack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainStack.Screen
                    name="TermsAndConditions"
                    component={TermsAndConditionsScreen}
                    options={{
                        headerShown: true,
                        title: "Điều khoản và sử dụng",
                    }}
                />
                <MainStack.Screen
                    name="ConfirmOTP"
                    component={ConfirmOTPScreen}
                    options={{
                        headerShown: true,
                        title: "Xác nhận OTP",
                    }}
                />
                <MainStack.Screen
                    name="Main"
                    component={MainTabScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
