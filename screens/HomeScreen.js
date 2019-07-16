import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
	Button,
	Modal,
	TextInput
} from "react-native";

import { MonoText } from "../components/StyledText";
import { Post } from "../components/Post";

export default class HomeScreen extends Component {
	constructor() {
		super();
		this.state = {
			modalVisible: false,
			text: ""
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<Button title="Create Post" />
				<ScrollView>
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
				</ScrollView>
				<ModalExample modalVisible={this.state.modalVisible} />
			</View>
		);
	}
}

HomeScreen.navigationOptions = {
	header: null
};

class ModalExample extends Component {
	constructor() {
		super();
		this.state = {
			modalVisible: false
		};
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		return (
			<View style={{ marginTop: 22 }}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
					}}
				>
					<View style={{ marginTop: 22 }}>
						<View>
							<Text>Top of the Rock</Text>
							<TextInput
								onChangeText={text => this.setState({ text })}
								value={this.state.text}
							/>

							<TouchableHighlight
								onPress={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}
							>
								<Text>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				<TouchableHighlight
					onPress={() => {
						this.setModalVisible(true);
					}}
				>
					<Text>Show Modal</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 30
	},
	developmentModeText: {
		marginBottom: 20,
		color: "rgba(0,0,0,0.4)",
		fontSize: 14,
		lineHeight: 19,
		textAlign: "center"
	},
	contentContainer: {
		paddingTop: 30
	},
	welcomeContainer: {
		alignItems: "center",
		marginTop: 10,
		marginBottom: 20
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10
	},
	getStartedContainer: {
		alignItems: "center",
		marginHorizontal: 50
	},
	homeScreenFilename: {
		marginVertical: 7
	},
	codeHighlightText: {
		color: "rgba(96,100,109, 0.8)"
	},
	codeHighlightContainer: {
		backgroundColor: "rgba(0,0,0,0.05)",
		borderRadius: 3,
		paddingHorizontal: 4
	},
	getStartedText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		lineHeight: 24,
		textAlign: "center"
	},
	tabBarInfoContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: "black",
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: "center",
		backgroundColor: "#fbfbfb",
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		textAlign: "center"
	},
	navigationFilename: {
		marginTop: 5
	},
	helpContainer: {
		marginTop: 15,
		alignItems: "center"
	},
	helpLink: {
		paddingVertical: 15
	},
	helpLinkText: {
		fontSize: 14,
		color: "#2e78b7"
	}
});
