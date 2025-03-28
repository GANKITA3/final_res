import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ReservationSummaryScreen from '../screens/reservation-summary';

describe('ReservationSummaryScreen', () => {
	it('renders reservation details correctly', () => {
		const mockData = {
			mealType: 'Lunch',
			people: 2,
			date: '2023-10-10',
			time: '12:00 PM',
			name: 'John Doe',
			email: 'john@example.com',
		};

		const { getByText } = render(
			<ReservationSummaryScreen route={{ params: { data: mockData } }} navigation={{}} />
		);

		expect(getByText('Reservation Details')).toBeTruthy();
		expect(getByText('2')).toBeTruthy();
		expect(getByText('2023-10-10')).toBeTruthy();
		expect(getByText('12:00 PM')).toBeTruthy();
		expect(getByText('Indoor - F1 - T4')).toBeTruthy();
	});

	it('renders user details correctly', () => {
		const mockData = {
			mealType: 'Dinner',
			people: 4,
			date: '2023-10-10',
			time: '7:00 PM',
			name: 'Jane Doe',
			email: 'jane@example.com',
		};

		const { getByText } = render(
			<ReservationSummaryScreen route={{ params: { data: mockData } }} navigation={{}} />
		);

		expect(getByText('Your Details')).toBeTruthy();
		expect(getByText('Jane Doe')).toBeTruthy();
		expect(getByText('jane@example.com')).toBeTruthy();
	});

	it('renders reservation summary correctly', () => {
		const mockData = {
			mealType: 'Snacks',
			people: 3,
			date: '2023-10-10',
			time: '4:00 PM',
			name: 'Alice',
			email: 'alice@example.com',
		};

		const { getByText } = render(
			<ReservationSummaryScreen route={{ params: { data: mockData } }} navigation={{}} />
		);

		expect(getByText('Reservation Summary')).toBeTruthy();
		expect(getByText('100')).toBeTruthy();
	});

	it('navigates to PaymentSummary on Pay Bill button press', () => {
		const mockNavigate = jest.fn();
		const mockData = {
			mealType: 'Breakfast',
			people: 1,
			date: '2023-10-10',
			time: '8:00 AM',
			name: 'Bob',
			email: 'bob@example.com',
		};

		const { getByText } = render(
			<ReservationSummaryScreen route={{ params: { data: mockData } }} navigation={{ navigate: mockNavigate }} />
		);

		const payBillButton = getByText('Pay Bill');
		fireEvent.press(payBillButton);

		expect(mockNavigate).toHaveBeenCalledWith('PaymentSummary', {
			data: expect.objectContaining({
				mealType: 'Breakfast',
				noOfPeople: 1,
				date: '2023-10-10',
				time: '8:00 AM',
				selectedTable: 'Indoor - F1 - T4',
			}),
		});
	});
});