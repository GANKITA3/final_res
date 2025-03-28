import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ReservationDetailsScreen from '../screens/reservation-details';

describe('ReservationDetailsScreen', () => {
	it('renders correctly with meal type and time', () => {
		const mockParams = {
			mealType: 'Lunch',
			time: '12:00 PM',
			email: 'test@example.com',
			name: 'John Doe',
		};

		const { getByText } = render(
			<ReservationDetailsScreen route={{ params: mockParams }} navigation={{}} />
		);

		expect(getByText('Lunch')).toBeTruthy();
		expect(getByText('12:00 PM')).toBeTruthy();
	});

	it('updates number of people correctly', () => {
		const mockParams = {
			mealType: 'Dinner',
			time: '7:00 PM',
			email: 'test@example.com',
			name: 'John Doe',
		};

		const { getByText, getByA11yLabel } = render(
			<ReservationDetailsScreen route={{ params: mockParams }} navigation={{}} />
		);

		const numberInput = getByA11yLabel('Number Input');
		fireEvent.changeText(numberInput, '3');
		expect(getByText('3')).toBeTruthy();
	});

	it('navigates to ReservationSummary with correct data', () => {
		const mockNavigate = jest.fn();
		const mockParams = {
			mealType: 'Breakfast',
			time: '8:00 AM',
			email: 'test@example.com',
			name: 'John Doe',
		};

		const { getByText } = render(
			<ReservationDetailsScreen route={{ params: mockParams }} navigation={{ navigate: mockNavigate }} />
		);

		const selectTableButton = getByText('Select Table');
		fireEvent.press(selectTableButton);

		expect(mockNavigate).toHaveBeenCalledWith('ReservationSummary', {
			data: {
				name: 'John Doe',
				email: 'test@example.com',
				mealType: 'Breakfast',
				date: expect.any(Number),
				time: expect.any(String),
				people: expect.any(Number),
			},
		});
	});
});