import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DashoardScreen from '../screens/dashboard';

describe('DashoardScreen', () => {
	it('renders correctly with user name', () => {
		const { getByText } = render(
			<DashoardScreen
				route={{
					params: { name: 'John Doe', email: 'john@example.com' },
				}}
				navigation={{}}
			/>,
		);
		expect(getByText('Hi, John Doe 👋')).toBeTruthy();
	});

	it('navigates to Home screen on logout', () => {
		const mockNavigate = jest.fn();
		const { getByText } = render(
			<DashoardScreen
				route={{
					params: { name: 'John Doe', email: 'john@example.com' },
				}}
				navigation={{ navigate: mockNavigate }}
			/>,
		);
		const logoutButton = getByText('Logout');
		fireEvent.press(logoutButton);
		expect(mockNavigate).toHaveBeenCalledWith('Home', {
			currScreen: 'OTP',
		});
	});

	it('navigates to TypeSelection screen on offer press', () => {
		const mockNavigate = jest.fn();
		const { getByText } = render(
			<DashoardScreen
				route={{
					params: { name: 'John Doe', email: 'john@example.com' },
				}}
				navigation={{ navigate: mockNavigate }}
			/>,
		);
		const offerText = getByText('Get ready to save big!');
		fireEvent.press(offerText);
		expect(mockNavigate).toHaveBeenCalledWith('TypeSelection', {
			name: 'John Doe',
			email: 'john@example.com',
		});
	});
});