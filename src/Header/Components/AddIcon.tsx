import {View, Image} from 'react-native';
import {styles} from '../styles/style';

export const AddIcon = () => {
  return (
    <>
      <View style={styles.addIconContainer}>
        <Image
          testID="add-icon"
          source={require('../../Images/addIcon.png')}
          style={styles.addIcon}
        />
      </View>
    </>
  );
};
