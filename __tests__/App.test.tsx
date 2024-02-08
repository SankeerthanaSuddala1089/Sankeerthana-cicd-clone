import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../src/Screens/HomeScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
test('renders Hello World text', () => {
  const {getByText} = render(<HomeScreen />);
  const helloWorldText = getByText('Hello World');
  expect(helloWorldText).toBeTruthy();
});
