import FilmItem from './FilmItem'
import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../api/TMDBapi.js'
import { connect } from 'react-redux' 

class Search extends React.Component {
    

  _displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm, FilmDetailT: this.state.films  })
}
    //reset les var pour le changement films
    _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => { 
        console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
        this._loadFilms() 
    })
}
    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }    
    }
    _loadFilms() {
        if (this.searchedText.length > 0) {
          this.setState({ isLoading: true })
          getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
              this.page = data.page
              this.totalPages = data.total_pages
              this.setState({
                films: [ ...this.state.films, ...data.results ],
                isLoading: false
              })
          })
        }
    }  
    constructor(props) {
        super(props)

        this.page = 0;
        this.totalPages = 0;
        this. searchedText=""
        this.state = {
            films : [],
            isLoading: false
        };
    }
    _searchTextInputChanged(text){
        this.searchedText = text
    }
 
    render() {
      const { film, displayDetailForFilm } = this.props
      return (
        <View style={styles.main_container}>
           <TextInput 
           style={styles.textinput} 
           
           //onPress={() => displayDetailForFilm(film.id)}
           placeholder='Titre du film'
           onChangeText={(text)=> this._searchTextInputChanged(text)}
           onSubmitEditing={() => this._searchFilms()}
           
           />
           <Button style={styles.textinput} title='Rechercher'  onPress={() => this._searchFilms() }/>
           
           <FlatList
            data={this.state.films}
            extraData = {this.props.favoritesFilm}
          
            keyExtractor={(item) => item.id.toString()}
            
            renderItem={({item}) => 
                <FilmItem film={item}
                isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
               
                displayDetailForFilm={this._displayDetailForFilm} />}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                if (this.page < this.totalPages)
                { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                    this._loadFilms()
                }
                }}
                />       
        {this._displayLoading()}
        </View>
    )

    }
}

const styles = StyleSheet.create({
main_container:{
     marginTop: 20, backgroundColor: 'white',flex:1 
},

    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    loading_container: {
        flex:1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}


export default connect(mapStateToProps)(Search)