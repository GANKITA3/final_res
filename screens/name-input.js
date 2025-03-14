import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const NameInputScreen = ({ navigator, email }) => {
	const [name, setName] = useState('');
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (name.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [name]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Personal Details</Text>

			<Text style={styles.label}>What's your name?</Text>

			<TextInput
				placeholder='Enter name'
				value={name}
				onChangeText={(newName) => setName(newName)}
				style={styles.input}
			/>

			<Pressable
				style={[
					styles.button,
					{ backgroundColor: disabled ? '#DDDDDD' : '#FF0000' },
				]}
				onPress={() => {
					setDisabled(true);
					navigator.navigate('Dashboard', {
						name: name,
						email: email,
					});
				}}
			>
				<Text style={styles.btnText} disabled={disabled}>
					Done
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 16,
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	label: {
		fontSize: 16,
		marginTop: 32,
		marginRight: 'auto',
	},
	input: {
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 24,
		marginTop: 16,
		borderRadius: 16,
		width: '100%',
		borderColor: '#EEEEEE',
	},
	button: {
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		marginTop: 64,
		marginLeft: 'auto',
		// backgroundColor: '#FF0000',
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default NameInputScreen;
