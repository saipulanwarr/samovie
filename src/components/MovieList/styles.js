import {StyleSheet} from 'react-native';

import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border,
  },
  contentTitle: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {color: colors.black, fontWeight: '600', fontSize: 16},
  item: windowWidth => ({
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  }),
  image: windowWidth => ({width: windowWidth * 0.4, height: 100}),
  textOriginal: {color: colors.black, paddingVertical: 10},
});
