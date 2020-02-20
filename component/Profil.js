import React from 'react'
import { StyleSheet,View, TextInput, Button,FlatList,Text,ActivityIndicator, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Profil extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
          <View style={styles.mainContainer}>
            <View style={styles.first_container}>
                <Image style={styles.image} source={require('../Image/profil.png')} /> 
                <Text style={{color: "white", marginTop: 10, fontSize: 20}}>Anaïs Thoral</Text>
                <Text style={{color: "white", marginTop: 5, fontSize: 15}}>Etudiant</Text>
            </View>
            <View style={styles.secondContainer}>
              <Text style={{color: "#316B7F", marginTop: 15, fontSize: 15}}>A propos</Text>
            </View>
              <View style={styles.thirdContainer}>
                <TouchableOpacity>
                  <View style={{flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height:50}}>
                    <Image style={styles.icon} source={require('../Image/school.svg.png')}/>
                    <Text style={{fontSize:20, color: "grey", marginLeft: 5, marginTop: 10}}>Ecole </Text><Text style={{fontSize:20, color: "black", fontWeight: "bold",  marginTop: 10}} >IUT UCA</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height:50}}>
                    <Image style={styles.icon} source={require('../Image/position.png')}/>
                    <Text style={{fontSize:20, color: "grey", marginLeft: 5, marginTop: 10}}>Lieux </Text><Text style={{fontSize:20, color: "black", fontWeight: "bold",  marginTop: 10}} >Le Puy en Velay</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height:50}}>
                    <Image style={styles.icon} source={require('../Image/diplome.png')}/>
                    <Text style={{fontSize:20, color: "grey", marginLeft: 5, marginTop: 10}}>Diplôme </Text><Text style={{fontSize:20, color: "black", fontWeight: "bold",  marginTop: 10}} >DUT Informatique</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height:50}}>
                    <Image style={styles.icon} source={require('../Image/date.png')}/>
                    <Text style={{fontSize:20, color: "grey", marginLeft: 5, marginTop: 10}}>Année d'étude </Text><Text style={{fontSize:20, color: "black", fontWeight: "bold",  marginTop: 10}} >2</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{flexDirection: "row", borderRadius: 2, borderWidth: 0.3, borderColor: "grey", backgroundColor: "white", height:50}}>
                    <Image style={styles.icon} source={require('../Image/groupe.png')}/>
                    <Text style={{fontSize:20, color: "grey", marginLeft: 5, marginTop: 10}}>Groupe </Text><Text style={{fontSize:20, color: "black", fontWeight: "bold",  marginTop: 10}} >A1</Text>
                  </View>
                </TouchableOpacity>
              </View>
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

    image:{
      height: 130,
      width: 130,
      marginTop: 50
    },

    icon:{
      height: 20,
      width: 20,
      marginTop: 10,
      marginLeft: 5
    },

    mainContainer: {
      flex:1,
      flexDirection : "column"
    },

    secondContainer: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center"
    },

    thirdContainer: {
      flex:7,
      backgroundColor: "#C6C6C6",
      flexDirection: "column"
    }

  })

export default Profil;