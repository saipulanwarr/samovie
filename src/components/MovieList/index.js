import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {image185} from '../../constants';
import {styles} from './styles';

const MovieList = ({data, title}) => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView horizontal>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item(windowWidth)}
            onPress={() => navigation.navigate('DetailMovie', {id: item.id})}>
            <Image
              source={{uri: image185(item.poster_path)}}
              style={styles.image(windowWidth)}
            />
            <Text style={styles.textOriginal} numberOfLines={1}>
              {item.original_title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
