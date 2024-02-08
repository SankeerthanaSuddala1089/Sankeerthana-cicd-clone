import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    marginTop: 10,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    paddingRight: '2%',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  leftHeader: {
    flexDirection: 'row',
    width: 'auto',
    padding: 10,
    alignItems: 'center',
    marginRight: 'auto',
  },
  headerStyle: {
    maxHeight: 'auto',
  },
  headerTitleText: {
    paddingLeft: '5%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  addIconContainer: {
    height: 35,
    width: 35,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addIcon: {
    borderRadius: 10,
    height: 30,
    width: 30,
    paddingTop: 10,
  },
  menuIcon: {
    paddingTop: 5,
    color: '#7d1ae6cc',
  },
});
