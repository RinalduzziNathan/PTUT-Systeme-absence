import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Scanner from "../component/Scanner"

class ItemCour extends React.Component {

  onPress = () => {

    // this.navigate.navigate("ScannerCour")
  }
  render() {
    //Objet contenant le cour (prof, matière heure)
    const Cours = this.props.Cour
    const { displayNewView } = this.props.displayNewView
    var couleur_bar = '../Image/barre_rouge.png'
    
    return (
     <TouchableOpacity onPress={() =>this.props.displayNewView()} >
    
     <View style={styles.main_container}>

        <View style={{flexDirection:"column"}}>
          <View style={{marginRight: 40}}>
            <Image style={styles.image} source={require(couleur_bar)} /> 
          </View>

          <View>
            <Text style={{fontSize:15, color: "white", textAlign:"right", marginRight: 5}}>{Cours.date}</Text>
          </View>
        </View>

        <View style={styles.cours_style}>
          <Text style={{fontSize:20, color: "white"}}>{Cours.title}</Text><Text style={{marginTop:9, fontSize:15, color: "white"}}>{Cours.professeur}</Text>
        </View>

      </View>
    </TouchableOpacity>  
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1, height: 90, flexDirection: 'column',
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: 'white',
  },

  cours_style:{
    color: "white",
    paddingLeft: 30
  },

  image:{
    width: 100,
    height: 90,
    position: "absolute",
    left: -30
},
})

export default ItemCour