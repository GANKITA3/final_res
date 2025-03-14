import { Pressable, FlatList, Dimensions } from 'react-native';
import { Image } from 'expo-image';

const TypeSelectionScreen = ({ route, navigation }) => {
	const numOfColumns = 2;
	const size = Dimensions.get('window').width / numOfColumns;
	const { name, email } = route.params;

	const data = [
		{
			title: 'Breakfast',
			time: '(8am to 11am)',
			image: require('../assets/breakfast.jpeg'),
		},
		{
			title: 'Lunch',
			time: '(12 noon to 2pm)',
			image: require('../assets/lunch.jpeg'),
		},
		{
			title: 'Snacks',
			time: '(4pm to 6pm)',
			image: require('../assets/snacks.jpeg'),
		},
		{
			title: 'Dinner',
			time: '(8pm to 11pm)',
			image: require('../assets/dinner.jpeg'),
		},
	];

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.title}
			numColumns={numOfColumns}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => {
						navigation.navigate('ReservationDetails', {
							mealType: item.title,
							time: item.time,
							name: name,
							email: email,
						});
					}}
					style={{ height: size, width: size }}
				>
					<Image
						source={item.image}
						style={{
							height: size - 48,
							width: size - 48,
							margin: 4,
							borderRadius: 16,
						}}
						contentFit='cover'
					/>
				</Pressable>
			)}
			style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 16 }}
		/>
	);
};

export default TypeSelectionScreen;
