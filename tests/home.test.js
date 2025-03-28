import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import HomeScreen from '../screens/home';

describe('HomeScreen', () => {
	it('renders correctly', () => {
		const { getByText } = render(<HomeScreen route={{}} navigation={{}} />);
		expect(getByText("India's New Take Away and Dining App")).toBeTruthy();
	});

	it('shows error message when email is invalid', async () => {
		const { getByPlaceholderText, getByText } = render(
			<HomeScreen route={{}} navigation={{}} />,
		);
		const emailInput = getByPlaceholderText('Enter E-mail ID');
		const continueButton = getByText('Continue');

		await act(async () => {
			fireEvent.changeText(emailInput, 'invalid-email');
			fireEvent.press(continueButton);
		});

		expect(getByText('Invalid e-mail provided.')).toBeTruthy();
	});

	it('opens bottom sheet modal on valid email', async () => {
		const { getByPlaceholderText, getByText } = render(
			<HomeScreen route={{}} navigation={{}} />,
		);
		const emailInput = getByPlaceholderText('Enter E-mail ID');
		const continueButton = getByText('Continue');

		await act(async () => {
			fireEvent.changeText(emailInput, 'test@example.com');
			fireEvent.press(continueButton);
		});

		// Add assertions to check if the modal is opened
	});
});