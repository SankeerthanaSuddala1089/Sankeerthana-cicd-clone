import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {Title} from '../src/Header/Components/Title';
import {Logo} from '../src/Header/Components/ConnectLogo';
import {AddIcon} from '../src/Header/Components/AddIcon';
import {NavigationContainer} from '@react-navigation/native';
import App from '../App';
import {RightHeader} from '../src/Header/Components/RightHeader';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
describe('test suit for header individual components', () => {
  test('Test for rendering Connect title', () => {
    const {getByText} = render(<Title></Title>);
    const title = getByText('Connect');
    expect(title).toBeTruthy();
  });
  it('renders with image details', () => {
    const imageProps = {
      image: require('../src/Images/connect.png'),
    };
    const {getByTestId} = render(<Logo />);
    const image = getByTestId('logo');
    expect(image.props.source).toEqual(imageProps.image);
  });
  it('Test for rendering add Icon test', () => {
    const imageProps = {
      image: require('../src/Images/addIcon.png'),
    };
    const {getByTestId} = render(<AddIcon />);
    const image = getByTestId('add-icon');
    expect(image.props.source).toEqual(imageProps.image);
  });
});
describe('test suit for rendering header from the app', () => {
  const headerComponent = (
    <NavigationContainer independent={true}>
      <App />
    </NavigationContainer>
  );
  test('test for title to be render', async () => {
    render(headerComponent);
    const headerTitle = await screen.findByText('Connect');
    expect(headerTitle).toBeDefined();
  });
  test('test for logo to be render', async () => {
    render(headerComponent);
    const headerLogo = await screen.findByTestId('logo');
    expect(headerLogo).toBeDefined();
  });
  test('test for add-icon to be render', async () => {
    render(headerComponent);
    const headerLogo = await screen.findByTestId('add-icon');
    expect(headerLogo).toBeDefined();
  });
  test('test for menu-icon', async () => {
    render(headerComponent);
    const menuLogo = await screen.findByTestId('menu-icon');
    expect(menuLogo).toBeDefined();
    const menu = await screen.findByTestId('menu');
    expect(menu).toBeDefined();
  });
  test('test for menu-icon', async () => {
    render(headerComponent);
    const menuIcon = await screen.findByTestId('menu-icon');
    expect(menuIcon).toBeDefined();
  });
});
