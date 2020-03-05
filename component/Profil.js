import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, Image, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PostTokenGetDataUser } from './Api'

import { ApiAuth } from './Api';

class Profil extends React.Component {

  constructor(props) {
    super(props)
    this.DataUser
    this._GetData()
    this.state = { 
      loading:true,
      nom: "john",
      prenom:"doe",
      groupe:"A",
      
    }
  }

  _LoadData() {
    console.log("sapasse")
    PostTokenGetDataUser().then(data => {
      console.log({ data })

    })
  }
  _displayLoading() {
    if (this.state.loading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }    
}

  async _GetData() {
    
    const STORAGE_KEY = '@save_token'
    const data = await AsyncStorage.getItem(STORAGE_KEY)
    console.log("Token en approche")

    console.log(data)
    const urlTest = 'http://ptutgestionabsences.herokuapp.com/get-user-from-token'
    return fetch(urlTest, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: data,

      }),

    })
    .then((res) => res.json())
    .then((response) =>  this.setState({ nom: response[0].firstname,
       prenom:response[0].name, loading:false  }))
    
    //this.DataUser=response.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
      
  }

  render() {

    return (
      
      <View style={styles.mainContainer}>
      
        <View style={styles.first_container}>
          <Image style={styles.image} source={require('../Image/profil.png')} />
          <Text style={{ color: "white", marginTop: 10, fontSize: 20 }}>{this.state.nom+" "+this.state.prenom}</Text>
          <Text style={{ color: "white", marginTop: 5, fontSize: 15 }}>Etudiant</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={{ color: "#316B7F", marginTop: 15, fontSize: 15 }}>A propos</Text>
        </View>
        <View style={styles.thirdContainer}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height: 50 }}>
              <Image style={styles.icon} source={require('../Image/school.svg.png')} />
              <Text style={{ fontSize: 20, color: "grey", marginLeft: 5, marginTop: 10 }}>Ecole </Text><Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginTop: 10 }} >IUT UCA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height: 50 }}>
              <Image style={styles.icon} source={require('../Image/position.png')} />
              <Text style={{ fontSize: 20, color: "grey", marginLeft: 5, marginTop: 10 }}>Lieux </Text><Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginTop: 10 }} >Le Puy en Velay</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height: 50 }}>
              <Image style={styles.icon} source={require('../Image/diplome.png')} />
              <Text style={{ fontSize: 20, color: "grey", marginLeft: 5, marginTop: 10 }}>Diplôme </Text><Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginTop: 10 }} >DUT Informatique</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height: 50 }}>
              <Image style={styles.icon} source={require('../Image/date.png')} />
              <Text style={{ fontSize: 20, color: "grey", marginLeft: 5, marginTop: 10 }}>Année d'étude </Text><Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginTop: 10 }} ></Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height: 50 }}>
              <Image style={styles.icon} source={require('../Image/groupe.png')} />
              <Text style={{ fontSize: 20, color: "grey", marginLeft: 5, marginTop: 10 }}>Groupe </Text><Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginTop: 10 }} >{this.state.classroom_group}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  first_container: {
    flex: 6,
    backgroundColor: "#316B7F",
    alignItems: "center"
  },

  image: {
    height: 130,
    width: 130,
    marginTop: 50
  },

  icon: {
    height: 20,
    width: 20,
    marginTop: 10,
    marginLeft: 5
  },

  mainContainer: {
    flex: 1,
    flexDirection: "column"
  },

  secondContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },

  thirdContainer: {
    flex: 7,
    backgroundColor: "#C6C6C6",
    flexDirection: "column"
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }

})

export default Profil;
