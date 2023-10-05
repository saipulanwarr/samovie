import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

import {image185} from '../../constants';
import {styles} from './styles';

const NowPlaying = ({data}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      <Image
        source={{uri: image185(data?.poster_path)}}
        style={styles.image(windowWidth)}
      />
      <Text style={styles.textOriginal}>{data?.original_title}</Text>
    </View>
  );
};

export default NowPlaying;
