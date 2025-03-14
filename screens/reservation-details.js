import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button } from 'react-native';
import NumberInput from 'react-native-input-spinner';
import DatePicker from '@react-native-community/datetimepicker';

const ReservationDetailsScreen = ({ route, navigation }) => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [showTimePicker, setShowTimePicker] = useState(false);
	const [noOfPeople, setNoOfPeople] = useState(1);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());

	const { mealType, time: mealTime, email, name } = route.params;

	const foodTypeFact = {
		Breakfast:
			'A balanced breakfast can include a variety of foods like whole grains, protein, fruits, and dairy to fuel your body and improve cognitive function.',
		Lunch: 'Lunch is a midday meal that provides an essential energy boost and a moment of respite during the day, offering an opportunity to refuel and recharge for the afternoon ahead.',
		Dinner: 'Dinner is often considered the heartiest meal of the day, bringing family and friends together to share nourishing dishes and create lasting memories.',
		Snacks: 'Snacks are convenient and enjoyable treats that satisfy our cravings between meals, offering a wide range of flavours and textures to suit every palate.',
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{mealType}</Text>
				<Text style={styles.description}>{mealTime}</Text>
			</View>
			<View style={styles.content}>
				<Text>{foodTypeFact[mealType]}</Text>

				<View style={styles.form}>
					<Text style={styles.label}>How many people?</Text>
					<NumberInput
						max={4}
						min={1}
						value={noOfPeople}
						onChange={(num) => setNoOfPeople(num)}
						colorMax='#FF0000'
						colorMin='#FF0000'
					/>

					<Text style={styles.label}>Date</Text>
					<Button
						onPress={() => setShowDatePicker(!showDatePicker)}
						title='Select Date'
					/>
					{showDatePicker && (
						<DatePicker
							value={date}
							onChange={(e, newDate) => {
								setShowDatePicker(!showDatePicker);
								if (e.type == 'set') {
									setDate(newDate);
								}
							}}
							minuteInterval={30}
							style={{ marginRight: 'auto' }}
						/>
					)}

					<Text style={styles.label}>Time</Text>
					<Button
						onPress={() => setShowTimePicker(!showDatePicker)}
						title='Select Time'
					/>
					{showTimePicker && (
						<DatePicker
							mode='time'
							value={time}
							onChange={(e, newTime) => {
								setShowTimePicker(!showTimePicker);
								if (e.type == 'set') {
									setTime(newTime);
								}
							}}
							minuteInterval={30}
							style={{ marginRight: 'auto' }}
						/>
					)}

					<Pressable
						style={styles.button}
						onPress={() =>
							navigation.navigate('ReservationSummary', {
								data: {
									name: name,
									email: email,
									mealType: mealType,
									date: date.getDate(),
									time: time.toLocaleTimeString(),
									people: noOfPeople,
								},
							})
						}
					>
						<Text style={styles.btnText}>Select Table</Text>
					</Pressable>
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
	header: {
		height: '30%',
		backgroundColor: '#FF0000',
		justifyContent: 'flex-end',
		padding: 16,
	},
	title: {
		color: '#FFFFFF',
		fontSize: 32,
		fontWeight: 'bold',
		marginVertical: 8,
	},
	description: {
		fontSize: 16,
		color: '#FFFFFF',
	},
	content: {
		padding: 16,
	},
	form: {
		marginVertical: 32,
	},
	button: {
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		marginVertical: 16,
		width: '100%',
		backgroundColor: '#FF8000',
		marginTop: 64,
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	label: {
		marginVertical: 8,
		fontSize: 16,
	},
});

export default ReservationDetailsScreen;
