import {View} from 'react-native';
import {Logo} from './ConnectLogo';
import {Title} from './Title';
import {styles} from '../styles/style';

export const LeftHeader = () => {
  return (
    <View style={styles.leftHeader}>
      <Logo />
      <Title />
    </View>
  );
};
