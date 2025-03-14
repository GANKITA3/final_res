import { useState, useCallback, useMemo, useRef, useReducer } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	BottomSheetModalProvider,
	BottomSheetModal,
	BottomSheetView,
} from '@gorhom/bottom-sheet';

import OtpInputScreen from './otp-input';
import NameInputScreen from './name-input';

const reducer = (_, action) => {
	if (action.type == 'OTP_VERIFIED') {
		return {
			currentScreen: 'NAME',
		};
	}

	throw new Error('Unknown action.');
};

const HomeScreen = ({ route, navigation }) => {
	const emailFilter = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	const actualOtp = Math.floor(1000 + Math.random() * 9000).toString();

	const currScreen = route.params
		? route.params.currScreen
			? route.params.currScreen
			: 'OTP'
		: 'OTP';

	const [email, setEmail] = useState('');
	const [showError, setShowError] = useState(false);

	const bottomSheetModalRef = useRef(null);

	const [state, dispatch] = useReducer(reducer, {
		currentScreen: currScreen ?? 'OTP',
	});

	const snapPoints = useMemo(() => ['25%', '50%'], []);

	const handlePresentModalPress = useCallback(() => {
		// if (emailFilter.test(email)) {
		bottomSheetModalRef.current?.present();
		// } else {
		// setShowError(true);
		// }
	}, []);

	const handleSheetChanges = useCallback((index) => {
		console.log('Handle Sheet Changes', index);
	}, []);

	return (
		<BottomSheetModalProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.title}>
						India's New Take Away and Dining App
					</Text>

					{showError && (
						<Text style={[styles.title, { color: '#FF0000' }]}>
							Invalid e-mail provided.
						</Text>
					)}

					<Text style={styles.label}>Log in or Sign up</Text>

					<TextInput
						placeholder='Enter E-mail ID'
						value={email}
						onChangeText={(newEmail) => {
							setShowError(false);
							setEmail(newEmail);
						}}
						style={styles.input}
					/>

					<Pressable
						style={styles.button}
						onPress={handlePresentModalPress}
					>
						<Text style={styles.btnText}>Continue</Text>
					</Pressable>

					<Text style={styles.label}>or</Text>

					<Text style={styles.label}>
						By signing in or creating an account, you agree with our
						Terms & Conditions and Privacy Statement
					</Text>
				</View>
			</SafeAreaView>

			<BottomSheetModal
				ref={bottomSheetModalRef}
				index={1}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
			>
				<BottomSheetView>
					{state.currentScreen == 'OTP' ? (
						<OtpInputScreen
							dispatcher={dispatch}
							actualOtp={actualOtp}
						/>
					) : (
						<NameInputScreen navigator={navigation} email={email} />
					)}
				</BottomSheetView>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#FFFFFF',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	label: {
		fontSize: 16,
		marginVertical: 32,
		textAlign: 'center',
	},
	input: {
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 24,
		borderRadius: 16,
		width: '100%',
		borderColor: '#EEEEEE',
	},
	button: {
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		marginVertical: 16,
		width: '100%',
		backgroundColor: '#FF0000',
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default HomeScreen;
