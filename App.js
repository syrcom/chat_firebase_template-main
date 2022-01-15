import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
import { TextInput } from "react-native";

const Stack = createStackNavigator();

export default function App() {

	return (


		<NavigationContainer>
			<Stack.Navigator mode='modal'>
<Stack.Screen name="Chat" component={ChatScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
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


