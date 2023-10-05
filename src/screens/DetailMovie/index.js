import React from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';

import {colors, image185} from '../../constants';
import {styles} from './styles';
import {useGetMovieDetailsQuery} from '../../store/apiSlice';

const DetailMovie = ({route}) => {
  const windowWidth = Dimensions.get('window').width;
  const {id} = route.params;

  const movieDetails = useGetMovieDetailsQuery(id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={{uri: image185(movieDetails.poster_path)}}
            style={styles.image(windowWidth)}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.textOriginal}>{movieDetails.original_title}</Text>
          <View style={styles.contentGenre}>
            {movieDetails.genres?.map((item, index) => (
              <Text key={index} style={styles.textName}>
                {item.name}
              </Text>
            ))}
          </View>
          <Text style={{color: colors.black}}>{movieDetails.overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailMovie;
