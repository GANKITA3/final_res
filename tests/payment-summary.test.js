import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PaymentSummaryScreen from '../screens/payment-summary';

describe('PaymentSummaryScreen', () => {
	it('renders correctly with payment summary data', () => {
		const mockData = {
			mealType: 'Lunch',
			noOfPeople: 2,
			date: '2023-10-10',
			time: '12:00 PM',
			selectedTable: 'Table 5',
		};

		const { getByText } = render(
			<PaymentSummaryScreen route={{ params: { data: mockData } }} />
		);

		expect(getByText('Payment Received!!')).toBeTruthy();
		expect(getByText('Lunch')).toBeTruthy();
		expect(getByText('2')).toBeTruthy();
		expect(getByText('2023-10-10')).toBeTruthy();
		expect(getByText('12:00 PM')).toBeTruthy();
		expect(getByText('Table 5')).toBeTruthy();
		expect(getByText('100')).toBeTruthy();
	});

	it('displays the correct food type fact', () => {
		const mockData = {
			mealType: 'Dinner',
			noOfPeople: 2,
			date: '2023-10-10',
			time: '7:00 PM',
			selectedTable: 'Table 5',
		};

		const { getByText } = render(
			<PaymentSummaryScreen route={{ params: { data: mockData } }} />
		);

		expect(getByText('Dinner is often considered the heartiest meal of the day, bringing family and friends together to share nourishing dishes and create lasting memories.')).toBeTruthy();
	});

	it('handles Download Bill button press', () => {
		const mockData = {
			mealType: 'Snacks',
			noOfPeople: 3,
			date: '2023-10-10',
			time: '4:00 PM',
			selectedTable: 'Table 3',
		};

		const { getByText } = render(
			<PaymentSummaryScreen route={{ params: { data: mockData } }} />
		);

		const downloadButton = getByText('Download Bill');
		fireEvent.press(downloadButton);

		// Add assertions to check the behavior when the button is pressed
	});
});