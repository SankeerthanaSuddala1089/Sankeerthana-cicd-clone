import {View} from 'react-native';
import {styles} from './styles/style';
import {LeftHeader} from './Components/LeftHeader';
import {RightHeader} from './Components/RightHeader';

const HomeScreenHeader = () => {
  return (
    <View style={styles.header}>
      <LeftHeader />
      <RightHeader />
    </View>
  );
};
export default HomeScreenHeader;
