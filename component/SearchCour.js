
import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, Image } from 'react-native'
import ItemCour from './ItemCour'
import { LinearGradient } from 'expo-linear-gradient'
import { ApiAuth } from './Api';


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
      refreshing: false,
    }
    
  }

  handleRefresh = () => {
    this.setState({
      refreshing:true,
    })
    this.LoadClassroom()
  }

  componentDidMount() {
    this.LoadClassroom()
  }

  async LoadClassroom() {

    this.cours = await ApiAuth.GetClassroom()
    NumberOfCourse = this.cours[0]
    var ApiArray = []
    for (let i = 1; i < NumberOfCourse+1; i++) {
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
      DATAapi:ApiArray,
      refreshing:false,
    })

  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }



  _displayNewView = () => {
    console.log("LANCER LA NOUVELLE VUE")
    this.props.navigation.navigate("ScannerCour")
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
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
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