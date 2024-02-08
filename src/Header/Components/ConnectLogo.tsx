import {View, Image} from 'react-native';

export const Logo = () => {
  return (
    <View image-testid="logo">
      <Image
        testID="logo"
        style={{width: 40, height: 40}}
        source={require('../../Images/connect.png')}
        resizeMode="contain"
        accessibilityRole="image"
      />
    </View>
  );
};
