import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OtpInputScreen from '../screens/otp-input';

describe('OtpInputScreen', () => {
	it('renders correctly', () => {
		const { getByText } = render(
			<OtpInputScreen dispatcher={() => {}} actualOtp="1234" />
		);
		expect(getByText('Enter the OTP')).toBeTruthy();
	});

	it('enables the Verify OTP button when OTP is entered', () => {
		const { getByText, getByPlaceholderText } = render(
			<OtpInputScreen dispatcher={() => {}} actualOtp="1234" />
		);
		const otpInput = getByPlaceholderText('Enter OTP');
		const verifyButton = getByText('Verify OTP');

		expect(verifyButton.props.style.backgroundColor).toBe('#DDDDDD');

		fireEvent.changeText(otpInput, '1234');
		expect(verifyButton.props.style.backgroundColor).toBe('#FF0000');
	});

	it('dispatches OTP_VERIFIED action on correct OTP', () => {
		const mockDispatch = jest.fn();
		const { getByText, getByPlaceholderText } = render(
			<OtpInputScreen dispatcher={mockDispatch} actualOtp="1234" />
		);
		const otpInput = getByPlaceholderText('Enter OTP');
		const verifyButton = getByText('Verify OTP');

		fireEvent.changeText(otpInput, '1234');
		fireEvent.press(verifyButton);

		expect(mockDispatch).toHaveBeenCalledWith({ type: 'OTP_VERIFIED' });
	});

	it('shows error message on incorrect OTP', () => {
		const { getByText, getByPlaceholderText } = render(
			<OtpInputScreen dispatcher={() => {}} actualOtp="1234" />
		);
		const otpInput = getByPlaceholderText('Enter OTP');
		const verifyButton = getByText('Verify OTP');

		fireEvent.changeText(otpInput, '0000');
		fireEvent.press(verifyButton);

		expect(getByText('Invalid OTP entered.')).toBeTruthy();
	});
});