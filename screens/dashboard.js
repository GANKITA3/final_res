import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const DashoardScreen = ({ route, navigation }) => {
	const { name, email } = route.params;

	const user = {
		id: 1,
		name: name,
		email: email,
	};

	const insets = useSafeAreaInsets();

	const handleLogout = () => {
		navigation.navigate('Home', {
			currScreen: 'OTP',
		});
	};

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.taskbar,
					{
						paddingTop: 8 + insets.top,
					},
				]}
			>
				<Text style={[styles.title, { width: 'auto' }]}>
					Hi, {user.name} 👋
				</Text>
				<Pressable style={styles.button} onPress={handleLogout}>
					<Text style={styles.btnText}>Logout</Text>
				</Pressable>
			</View>
			<View style={styles.content}>
				<Pressable
					style={styles.offerContainer}
					onPress={() =>
						navigation.navigate('TypeSelection', {
							name: name,
							email: email,
						})
					}
				>
					<View style={styles.offerTextbox}>
						<Text style={styles.offerText1}>
							Get ready to save big!
						</Text>
						<Text style={styles.offerText2}>
							Flat 40% OFF for limited seats only
						</Text>
						<View style={styles.offerText3Style}>
							<Text style={styles.offerText3}>
								Save your seat
							</Text>
						</View>
					</View>
					<View style={styles.offerTextbox}>
						<View style={styles.offerNumber}>
							<View style={styles.brownCircle}>
								<View style={styles.greyCircle}>
									<Text style={styles.offerNumberText}>
										38
									</Text>
								</View>
							</View>
							<Text style={styles.offerText4}>
								SEATS AVAILABLE FROM 4PM
							</Text>
						</View>
					</View>
				</Pressable>

				<View style={styles.photosContainer}>
					<Text style={styles.title}>Photos</Text>

					<Image
						source={require('../assets/food.jpeg')}
						style={styles.image}
						contentFit='cover'
					/>
					<Image
						source={require('../assets/ambience.jpeg')}
						style={styles.image}
						contentFit='cover'
					/>
				</View>

				<View style={styles.photosContainer}>
					<Text style={styles.title}>Menu</Text>

					<Image
						source={require('../assets/menu1.jpeg')}
						style={styles.image}
						contentFit='cover'
					/>
					<Image
						source={require('../assets/menu2.jpeg')}
						style={styles.image}
						contentFit='cover'
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	taskbar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FF8080',
		paddingHorizontal: 16,
		paddingBottom: 16,
	},
	title: {
		fontSize: 24,
		width: '100%',
	},
	button: {
		borderRadius: 16,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: '#FF0000',
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	content: {
		flex: 1,
		padding: 16,
	},
	offerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#FF0000',
		borderRadius: 16,
		padding: 24,
	},
	offerTextbox: {
		width: '45%',
	},
	offerText1: {
		fontSize: 24,
		paddingBottom: 12,
		color: '#FFFFFF',
	},
	offerText2: {
		fontSize: 18,
		paddingBottom: 16,
		color: '#FFFFFF',
	},
	offerText3: {
		fontSize: 16,
	},
	offerText4: {
		fontSize: 16,
		color: '#FFFFFF',
	},
	offerText3Style: {
		backgroundColor: '#FFD7D7',
		borderRadius: 12,
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 4,
	},
	offerNumber: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 16,
	},
	offerNumberText: {
		fontSize: 32,
		color: '#8B3B00',
	},
	greyCircle: {
		backgroundColor: '#D9D9D9',
		width: 64,
		height: 64,
		borderRadius: 999,
		justifyContent: 'center',
		alignItems: 'center',
	},
	brownCircle: {
		backgroundColor: '#8B3B00',
		width: 96,
		height: 96,
		borderRadius: 999,
		justifyContent: 'center',
		alignItems: 'center',
	},
	photosContainer: {
		marginTop: 32,
		marginBottom: 16,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	image: {
		height: 100,
		width: 100,
		margin: 8,
		borderRadius: 16,
	},
});

export default DashoardScreen;
