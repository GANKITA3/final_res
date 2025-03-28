import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Settings/Settings', () => ({
  get: jest.fn(),
  set: jest.fn(),
}));

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Mock any other native modules as needed