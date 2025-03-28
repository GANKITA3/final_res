import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NameInputScreen from '../screens/name-input';

describe('NameInputScreen', () => {
	it('renders correctly', () => {
		const { getByText, getByPlaceholderText } = render(
			<NameInputScreen navigator={{}} email="test@example.com" />
		);
		expect(getByText("Personal Details")).toBeTruthy();
		expect(getByPlaceholderText("Enter name")).toBeTruthy();
	});

	it('enables the Done button when name is entered', () => {
		const { getByPlaceholderText, getByText } = render(
			<NameInputScreen navigator={{}} email="test@example.com" />
		);
		const nameInput = getByPlaceholderText("Enter name");
		const doneButton = getByText("Done");

		expect(doneButton.props.style.backgroundColor).toBe('#DDDDDD');

		fireEvent.changeText(nameInput, 'John Doe');
		expect(doneButton.props.style.backgroundColor).toBe('#FF0000');
	});

	it('navigates to Dashboard screen with name and email', () => {
		const mockNavigate = jest.fn();
		const { getByPlaceholderText, getByText } = render(
			<NameInputScreen navigator={{ navigate: mockNavigate }} email="test@example.com" />
		);
		const nameInput = getByPlaceholderText("Enter name");
		const doneButton = getByText("Done");

		fireEvent.changeText(nameInput, 'John Doe');
		fireEvent.press(doneButton);

		expect(mockNavigate).toHaveBeenCalledWith('Dashboard', {
			name: 'John Doe',
			email: 'test@example.com',
		});
	});
});