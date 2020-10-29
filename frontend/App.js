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
import SavedScreen from './screens/saved-screen';
import LoginScreen from './screens/login-screen';
import TermsAndConditionsScreen from './screens/terms-and-conditions-screen';

class CheckinScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Checkin</Text>
            </View>
        );
    }
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const ActivityStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="Activity">
            <Stack.Screen name="Activity" component={ActivityScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
};

const MainTabScreen = () => {
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityStackScreen} />
        <Tab.Screen name="Checkin" component={CheckinScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    );
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
            <MainStack.Navigator
                
            >
                <MainStack.Screen name="Login" component={LoginScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <MainStack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen}
                    options={{
                        headerShown: true,
                        title: "Điều khoản và sử dụng",
                    }}
                />
                <MainStack.Screen name="Main" component={MainTabScreen}
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
