import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class ItemCour extends React.Component {


  render() {
    //Objet contenant le cour (prof, matière heure)
    const Cours = this.props.Cour
    return (
    <TouchableOpacity>
     <View style={styles.main_container}>

        <View style={{flexDirection:"column"}}>
          <View style={{marginRight: 40}}>
            <Image style={styles.image} source={require('../Image/barre_verte.png')} /> 
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
    flex: 1, height: 90, flexDirection: 'column',/*justifyContent: 'center', alignItems: 'center', flexDirection: 'row',*/
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