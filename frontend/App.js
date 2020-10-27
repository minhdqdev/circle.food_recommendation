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

const ActivityStackScreen = () => {
    return (
        <Stack.Navigator initialRouteName="Activity">
            <Stack.Screen name="Activity" component={ActivityScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
};

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
