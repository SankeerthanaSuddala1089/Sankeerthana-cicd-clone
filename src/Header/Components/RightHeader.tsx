import {View} from 'react-native';
import {styles} from '../styles/style';
import {MenuBar} from './MenuBarProvider';
import {AddIcon} from './AddIcon';
import React from 'react';

export const RightHeader = () => {
  return (
    <View style={styles.rightHeader}>
      <View>
        <AddIcon />
      </View>
      <View>
        <MenuBar />
      </View>
    </View>
  );
};
