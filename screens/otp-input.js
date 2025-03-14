import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

const OtpInputScreen = ({ dispatcher, actualOtp }) => {
	const [otp, setOtp] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		if (otp.length == 4) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [otp]);

	useEffect(() => {
		console.log('Generated new OTP:', actualOtp);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Enter the OTP</Text>
			{showError && (
				<Text style={[styles.title, { color: '#FF0000' }]}>
					Invalid OTP entered.
				</Text>
			)}

			<OTPTextView
				handleTextChange={setOtp}
				keyboardType='numeric'
				tintColor='#FF0000'
			/>

			<Text style={styles.resendText}>Resend OTP in 60s</Text>

			<Pressable
				style={[
					styles.button,
					{ backgroundColor: disabled ? '#DDDDDD' : '#FF0000' },
				]}
				onPress={() => {
					setDisabled(true);
					console.log(actualOtp, otp);
					if (otp == actualOtp) {
						dispatcher({ type: 'OTP_VERIFIED' });
					} else {
						setShowError(true);
					}
				}}
			>
				<Text style={styles.btnText} disabled={disabled}>
					Verify OTP
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
	resendText: {
		fontSize: 16,
		marginTop: 32,
		marginLeft: 'auto',
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

export default OtpInputScreen;
