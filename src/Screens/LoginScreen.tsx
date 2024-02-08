import {View, Text, Button} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Hello World</Text>
      <Button testID="login" title="login"></Button>
    </View>
  );
};
export default LoginScreen;
