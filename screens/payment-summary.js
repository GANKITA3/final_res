import { View, Text, StyleSheet, Pressable } from 'react-native';

const PaymentSummaryScreen = ({ route }) => {
	const { data } = route.params;
	const paymentSummary = {
		foodType: data.mealType,
		noOfPeople: data.noOfPeople,
		date: data.date,
		time: data.time,
		selectedTable: data.selectedTable,
		amountPaid: 100,
	};

	const foodTypeFact = {
		Breakfast:
			'Breakfast is often considered the most important meal of the day, providing essential nutrients and energy to kickstart your morning.',
		Lunch: 'Lunch is a midday meal that provides an essential energy boost and a moment of respite during the day, offering an opportunity to refuel and recharge for the afternoon ahead.',
		Dinner: 'Dinner is often considered the heartiest meal of the day, bringing family and friends together to share nourishing dishes and create lasting memories.',
		Snacks: 'Snacks are convenient and enjoyable treats that satisfy our cravings between meals, offering a wide range of flavours and textures to suit every palate.',
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleArea}>
				<Text style={styles.title}>Payment Received!!</Text>
			</View>
			<View style={styles.subtitleArea}>
				<Text style={styles.subtitle}>Thank you for using our app</Text>
				<Text style={styles.redSubtitle}>Khao aur Khilao</Text>
			</View>
			<View style={styles.lineStyle} />
			<View style={styles.headingArea}>
				<Text style={styles.heading}>Payment Summary</Text>
			</View>
			<View style={styles.dataBox}>
				<View>
					<Text style={styles.label}>Food Type</Text>
					<Text style={styles.label}>No of People</Text>
					<Text style={styles.label}>Date</Text>
					<Text style={styles.label}>Time</Text>
					<Text style={styles.label}>Selected Table</Text>
					<Text style={styles.label}>Amount Paid</Text>
				</View>
				<View>
					<Text style={styles.data}>{paymentSummary.foodType}</Text>
					<Text style={styles.data}>{paymentSummary.noOfPeople}</Text>
					<Text style={styles.data}>{paymentSummary.date}</Text>
					<Text style={styles.data}>{paymentSummary.time}</Text>
					<Text style={styles.data}>
						{paymentSummary.selectedTable}
					</Text>
					<Text style={styles.data}>{paymentSummary.amountPaid}</Text>
				</View>
			</View>
			<View style={styles.lineStyle} />
			<Pressable style={styles.billButton}>
				<Text style={styles.buttonText}>Download Bill</Text>
			</Pressable>
			<View style={styles.textArea}>
				<Text style={styles.textComponent}>
					{paymentSummary.foodType == 'Breakfast' &&
						foodTypeFact.Breakfast}
					{paymentSummary.foodType == 'Lunch' && foodTypeFact.Lunch}
					{paymentSummary.foodType == 'Dinner' && foodTypeFact.Dinner}
					{paymentSummary.foodType == 'Snacks' && foodTypeFact.Snacks}
				</Text>
			</View>
			<View style={styles.titleArea}>
				<Text style={styles.title}>Have a Wonderful Day!!</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	titleArea: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 8,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	subtitleArea: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 8,
	},
	subtitle: {
		fontSize: 20,
	},
	redSubtitle: {
		fontSize: 20,
		color: '#FF0000',
		fontWeight: 'bold',
	},
	heading: {
		fontWeight: '900',
		fontSize: 18,
	},
	headingArea: {
		alignItems: 'center',
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
	textArea: {
		marginTop: 16,
		marginHorizontal: 24,
	},
	textComponent: {
		fontSize: 14,
		paddingBottom: 8,
	},
	billButton: {
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

export default PaymentSummaryScreen;
