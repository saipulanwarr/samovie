import {StyleSheet} from 'react-native';

import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  image: windowWidth => ({width: windowWidth, height: 350}),
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  textOriginal: {color: colors.black, fontSize: 20, fontWeight: '600'},
  textName: {
    color: colors.black,
    marginRight: 10,
    marginVertical: 10,
  },
  contentGenre: {flexDirection: 'row'},
});
