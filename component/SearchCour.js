
import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, Image } from 'react-native'
import { ApiPTUT, PostApiPTUT } from '../api/TMDBapi.js'
import ItemCour from './ItemCour'
import { LinearGradient } from 'expo-linear-gradient'
import { ApiAuth } from './Api';

//Array de cours static en attendant l'api
const DATA = [
  {
    id: '1',
    title: 'Algo2',
    professeur: 'Eric Zeghers',
    date: '14/01/2020  16h'
  },
  {
    id: '2',
    title: 'Web',
    professeur: 'Kristen Garnier',
    date: '15/01/2020  8h30'
  },
  {
    id: '3',
    title: 'POO1',
    professeur: 'Benjamin Albouy-Kissi',
    date: '15/01/2020  10h30'
  },
  {
    id: '4',
    title: 'DAC',
    professeur: 'Vincent Sauvage',
    date: '15/01/2020  14h'
  },
  {
    id: '5',
    title: 'POO3',
    professeur: 'Antoine Vacavant',
    date: '15/01/2020  16h'
  },
  {
    id: '6',
    title: 'POO1',
    professeur: 'Benjamin Albouy-Kissi',
    date: '16/01/2020  8h30'
  },
  {
    id: '7',
    title: 'DAC',
    professeur: 'Vincent Sauvage',
    date: '16/01/2020  10h30'
  },
  {
    id: '8',
    title: 'Anglais',
    professeur: 'Pascale Pothée',
    date: '16/01/2020  14h'
  },
  {
    id: '9',
    title: 'Architecture',
    professeur: 'Pierre-Yves Bischoff',
    date: '16/01/2020  16h'
  }
];


class SearchCour extends React.Component {


  //reset les var pour le changement films

  // this.page = 0
  // this.totalPages = 0

  constructor(props) {
    super(props)

    this.page = 0;
    this.totalPages = 0;
    this.searchedText = ""
    this.passage = "JE_PASSE_A_LA_LISTE"
    this.cours = 0
    
    this.state = {
      DATAapi: [
        {
          id: '6',
          title: 'POO1',
          professeur: 'Benjamin Albouy-Kissi',
          date: '16/01/2020  8h30',
          presence:false
        },
        {
          id: '4',
          title: 'Testc',
          professeur: 'Cursed PTUT',
          date: '16/01/2020  8h30',
          presence:true
        },
      ],
    }
    
  }


  componentDidMount() {
    this.LoadClassroom()
  }

  async LoadClassroom() {

    this.cours = await ApiAuth.GetClassroom()
    NumberOfCourse = this.cours[0]
    var ApiArray = []
    for (let i = 1; i < NumberOfCourse; i++) {
        ApiArray.push(
          {
            id: this.cours[i][0],
            title:this.cours[i][1],
            professeur: this.cours[i][2],
            date:this.cours[i][3],
            presence:this.cours[i][4]
          },
        )
    }
    //update le state
    this.setState({
      DATAapi:ApiArray
    })
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }



  _displayNewView = () => {
    console.log("LANCER LA NOUVELLE VUE")
    this.props.navigation.navigate("ScannerCour")
  }

  _TestGetApi() {
    console.log('TEST DE L API GET EN COUR')
    ApiPTUT().then(data => {
      console.log(data)
    })

  }
  _TestPostApi() {
    console.log('TEST DE L API POST EN COUR')
    PostApiPTUT()

  }

  render() {

    const { displayNewView, data } = this.props

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {/* <Button
            title="Btn post " 
            onPress= {()=> this._TestPostApi()}
            /><Button
            title="Btn get test" 
            onPress= {()=> this._TestGetApi()}
            /> */}
        <View style={{ backgroundColor: "#316B7F", flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', opacity: 0.9 }}>
          <Image style={styles.image} source={require('../Image/logo-uca-.png')} />
          <Text style={{ color: "white", fontSize: 20, paddingLeft: 20 }} > Liste des cours </Text>
        </View>

        <View style={{ backgroundColor: 'white', flex: 10 }} >
          <LinearGradient colors={['#316B7F', '#64D8D3']}>

            <FlatList
              data={this.state.DATAapi}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) =>
                <ItemCour Cour={item}
                  displayNewView={this._displayNewView}
                />}
            />
          </LinearGradient>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },

  loading_container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 40,
    height: 40
  }
})

export default SearchCour