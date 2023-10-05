import {StyleSheet} from 'react-native';

import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 10,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  image: windowWidth => ({
    width: windowWidth * 0.9,
    height: 200,
    borderRadius: 10,
  }),
  textOriginal: {color: colors.black, marginTop: 15, fontWeight: 'bold'},
});
