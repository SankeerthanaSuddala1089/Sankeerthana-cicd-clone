import {styles} from '../styles/style';
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Menu, MenuItem} from 'react-native-material-menu';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigatorParamsList} from '../../types/rootStackParams';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
// const [visible, setVisible] = useState(false);
export const MenuBar = () => {
  type HomeScreenProp = StackNavigationProp<
    RootStackNavigatorParamsList,
    'Home'
  >;
  const navigation = useNavigation<HomeScreenProp>();
  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    setVisible(false);
  };
  const showMenu = () => {
    setVisible(true);
  };
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 5}}>
      <Menu
        testID="menu-options"
        visible={visible}
        anchor={
          <TouchableOpacity testID="menu" onPress={showMenu}>
            <FontAwesomeIcon
              testID="menu-icon"
              icon={faBars}
              size={35}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}>
        <MenuItem
          testID="Login"
          onPress={() => {
            navigation.navigate('Login');
            hideMenu();
          }}>
          <Text style={{fontWeight: 'bold', color: 'red'}}>Log out</Text>
        </MenuItem>
        {/* Below snippet is for adding more menu options in future */}
        {/* <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem> */}
      </Menu>
    </View>
  );
};
