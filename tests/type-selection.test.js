import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TypeSelectionScreen from '../screens/type-selection';

describe('TypeSelectionScreen', () => {
	it('renders all meal types correctly', () => {
		const mockParams = {
			name: 'John Doe',
			email: 'john@example.com',
		};

		const { getByText } = render(
			<TypeSelectionScreen route={{ params: mockParams }} navigation={{}} />
		);

		expect(getByText('Breakfast')).toBeTruthy();
		expect(getByText('Lunch')).toBeTruthy();
		expect(getByText('Snacks')).toBeTruthy();
		expect(getByText('Dinner')).toBeTruthy();
	});

	it('navigates to ReservationDetails on meal type press', () => {
		const mockNavigate = jest.fn();
		const mockParams = {
			name: 'John Doe',
			email: 'john@example.com',
		};

		const { getByText } = render(
			<TypeSelectionScreen route={{ params: mockParams }} navigation={{ navigate: mockNavigate }} />
		);

		const breakfastButton = getByText('Breakfast');
		fireEvent.press(breakfastButton);

		expect(mockNavigate).toHaveBeenCalledWith('ReservationDetails', {
			mealType: 'Breakfast',
			time: '(8am to 11am)',
			name: 'John Doe',
			email: 'john@example.com',
		});
	});
});