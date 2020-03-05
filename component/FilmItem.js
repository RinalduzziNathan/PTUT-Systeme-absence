import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../api/TMDBapi';

class FilmItem extends React.Component {
  
  
  _displayFavoriteImage() {
    if (this.props.isFilmFavorite) {
      return (
        <Image
          style={styles.favorite_image}
          source={require('../Image/ic_favorite.png')}
        />
      )
    }
  }



  render() {
    const { film, displayDetailForFilm } = this.props
    return (
    <TouchableOpacity
      style={styles.main_container}
      onPress={() => displayDetailForFilm(film.id)}>
       <Image
      
          style={styles.image_film}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
      
      <View style={styles.main_container}>
    
       <View style={styles.layer_text}>
         {this._displayFavoriteImage()}
        <View style={styles.container_Title_Vote}>
            <Text style={styles.title_text}>{film.title}</Text>
       
            <Text style={styles.vote}>{film.vote_average}</Text>
        </View>
            
       
       
       <Text style={styles.Description}numberOfLines={6}>{film.overview}</Text>
        <View style={styles.SortiView}>   
            <Text style={styles.Sorti}>Le {film.release_date}</Text>
        </View>
     
       </View>
         
      
       
      </View>
      
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1, height: 190, flexDirection: 'row', backgroundColor: 'yellow'
  },

  image_film: {
    flex: 1,  backgroundColor: 'grey'
  },
  layer_text: {
    flex: 2, backgroundColor: 'white',
  },
  container_Title_Vote: {
      flex:3,flexDirection: 'row',backgroundColor:'white',
  }
  ,
  title_text: {
    flex: 2,  fontWeight: 'bold',
    fontSize: 20,
  },
  Vote: {
    flex: 1,  fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  Description: {
    flex: 7,flexWrap: 'wrap',
    fontStyle: 'italic',
    fontSize:20,
    color: '#666666'
  },
  SortiView: {
      flex : 1,
  },
  Sorti: {
    textAlign: 'right',
    fontSize: 13
  }
})

export default FilmItem