import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigatorParamsList} from './rootStackParams';

export type HomeScreenProp = StackNavigationProp<
  RootStackNavigatorParamsList,
  'Home'
>;
