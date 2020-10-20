import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons";


class HomeScreen extends React.Component {


  render(){
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

class ActivityScreen extends React.Component {


  render(){
    return (
      <View style={styles.container}>
        <Text>Activity</Text>
      </View>
    );
  }
}


class CheckinScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>Checkin</Text>
      </View>
    );
  }
}


class SavedScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>Saved</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {


  render(){
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}














const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Activity" component={ActivityScreen}/>
        <Tab.Screen name="Checkin" component={CheckinScreen}/>
        <Tab.Screen name="Saved" component={SavedScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
