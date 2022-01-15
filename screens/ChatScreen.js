import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import firebase from "../database/firebaseDB";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { GiftedChat } from 'react-native-gifted-chat'

const db = firebase.firestore().collection('messages');

// line 7 to 23
const ChatScreen = ({ navigation }) => {
const [messages, setMessages] = useState([]);

	useEffect(() => {

// line 14 to 20 in slides
const unsubscribe = db
.orderBy('createdAt', 'desc')
.onSnapshot((collectionSnapshot) => {
const serverMessages = collectionSnapshot.docs.map((doc) => {
const data = doc.data();
console.log(data);

const jsDate = new Date(data.createdAt.seconds * 1000);
const newDoc = {
...data,
createdAt: jsDate,
};
return newDoc;
});




	setMessages(serverMessages)
})




		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// logged in 
				navigation.navigate("Chat", { id: user.id, email: user.email })
			} else {
				// logged out, get kicked back to the login page
				navigation.navigate('Login')
			}
		})




// line 20 - 33 in slides
	navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={logout}>
					<MaterialCommunityIcons
						name='logout'
						size={24}
						color='grey'
						style={{ marginRight: 20}}
					/>
				</TouchableOpacity>
			)
		})

return unsubscribe;

	}, [])

	const logout = () => {
		firebase.auth().signOut()
	}

	const sendMessages = (newMessages) => {
		console.log(newMessages)
		db.add(newMessages[0])
	}
 
 
 


	return (
	
// lin 65 - 78 in slides
<GiftedChat
messages={messages}
onSend={(newMessages) => sendMessages(newMessages)}
renderUsernameOnMessage={true}
listViewProps={{
	style: {
	  backgroundColor: "#666",
	},
}}
user={{
	_id: 1,
}}
/>



	);
}

export default ChatScreen;


