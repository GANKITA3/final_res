import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';

const ReservationSummaryScreen = ({ route, navigation }) => {
	const { data } = route.params;

	const reservationDetails = {
		mealType: data.mealType,
		noOfPeople: data.people,
		date: data.date,
		time: data.time,
		selectedTable: 'Indoor - F1 - T4',
	};

	const userDetails = {
		name: data.name,
		email: data.email,
	};

	const reservationSummary = {
		bookingCharge: 100,
		subTotal: 100,
		toBePaid: 100,
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.headingAreaTop}>
				<Text style={styles.heading}>Reservation Details</Text>
			</View>
			<View style={styles.dataBox}>
				<View>
					<Text style={styles.label}>No. of People</Text>
					<Text style={styles.label}>Date</Text>
					<Text style={styles.label}>Time</Text>
					<Text style={styles.label}>Selected Table</Text>
				</View>
				<View>
					<Text style={styles.data}>
						{reservationDetails.noOfPeople}
					</Text>
					<Text style={styles.data}>{reservationDetails.date}</Text>
					<Text style={styles.data}>{reservationDetails.time}</Text>
					<Text style={styles.data}>
						{reservationDetails.selectedTable}
					</Text>
				</View>
			</View>
			<View style={styles.lineStyle} />
			<View style={styles.headingArea}>
				<Text style={styles.heading}>Your Details</Text>
			</View>
			<View style={styles.dataBox}>
				<View>
					<Text style={styles.label}>Name</Text>
					<Text style={styles.label}>Email</Text>
				</View>
				<View>
					<Text style={styles.data}>{userDetails.name}</Text>
					<Text style={styles.data}>{userDetails.email}</Text>
				</View>
			</View>
			<View style={styles.lineStyle} />
			<View style={styles.headingArea}>
				<Text style={styles.heading}>Reservation Summary</Text>
			</View>
			<View style={styles.dataBox}>
				<View>
					<Text style={styles.label}>Booking Charge</Text>
					<Text style={styles.label}>Sub Total</Text>
					<Text style={styles.label}>To Be Paid</Text>
				</View>
				<View>
					<Text style={styles.data}>
						{reservationSummary.bookingCharge}
					</Text>
					<Text style={styles.data}>
						{reservationSummary.subTotal}
					</Text>
					<Text style={styles.data}>
						{reservationSummary.toBePaid}
					</Text>
				</View>
			</View>
			<View style={styles.lineStyle} />
			<View style={styles.headingArea}>
				<Text style={styles.heading}>Terms And Conditions</Text>
			</View>
			<View style={styles.textArea}>
				<Text style={styles.textComponent}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus neque mi, imperdiet sed molestie vitae, lobortis
					sed nulla.
				</Text>
				<Text style={styles.textComponent}>
					Nam eu tincidunt ligula. Fusce convallis pellentesque dolor,
					id molestie nisi faucibus et.
				</Text>
				<Text style={styles.textComponent}>
					Suspendisse faucibus sapien et mauris dignissim fringilla.
					Curabitur imperdiet non velit ultricies tristique.
				</Text>
				<Text style={styles.textComponent}>
					Aenean auctor hendrerit sapien vel pulvinar. Aenean lacinia
					suscipit nunc, ut porttitor dolor tincidunt eget.
				</Text>
				<Text style={styles.textComponent}>
					Duis pulvinar, mi in hendrerit blandit, urna libero
					tincidunt enim, ac lacinia turpis nulla vitae massa.
				</Text>
				<Text style={styles.textComponent}>
					Etiam sed mattis neque. Proin ac nisi vel arcu vehicula
					gravida sed et lacus.
				</Text>
				<Text style={styles.textComponent}>
					Fusce a ex feugiat, ultrices nibh id, mollis elit. Proin sed
					rutrum nibh, eu euismod felis.
				</Text>
				<Text style={styles.textComponent}>
					Phasellus turpis tellus, euismod a varius luctus, tincidunt
					pretium metus. Class aptent taciti sociosqu ad.
				</Text>
				<Text style={styles.textComponent}>Other T&Cs may apply.</Text>
			</View>
			<Pressable
				style={styles.paymentButton}
				onPress={() =>
					navigation.navigate('PaymentSummary', {
						data: reservationDetails,
					})
				}
			>
				<Text style={styles.buttonText}>Pay Bill</Text>
			</Pressable>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	label: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 6,
	},
	data: {
		fontSize: 16,
		marginBottom: 6,
	},
	dataBox: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 16,
	},
	lineStyle: {
		borderWidth: 0.5,
		borderColor: 'black',
		margin: 10,
	},
	heading: {
		fontWeight: '900',
		fontSize: 18,
	},
	headingArea: {
		alignItems: 'center',
	},
	headingAreaTop: {
		alignItems: 'center',
		marginTop: 8,
	},
	textArea: {
		marginTop: 16,
		marginHorizontal: 24,
	},
	textComponent: {
		fontSize: 14,
		paddingBottom: 8,
	},
	paymentButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF3333',
		borderRadius: 16,
		marginVertical: 24,
		marginHorizontal: 100,
		paddingVertical: 12,
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
});

export default ReservationSummaryScreen;
