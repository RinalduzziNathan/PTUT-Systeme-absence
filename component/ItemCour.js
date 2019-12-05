import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'

class ItemCour extends React.Component {


  render() {
    //Objet contenant le cour (prof, matière heure)
    const Cour = this.props.Cour
    return (
    <TouchableOpacity>
     <View style={styles.main_container}>
        
        
        {/*View centrée */}
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>

          <Text> {Cour.title} </Text>
        
        </View>

        <View style={{flex:2 }}>


          <Text>{Cour.professeur}</Text>
{/*           
          <Text>{Cour.professeur}</Text>
         */}
        


        </View>
        
      </View>
    </TouchableOpacity>
      
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1, height: 90, flexDirection: 'column', backgroundColor: "#E0E0E0",
    borderRadius: 2,
    borderWidth: 0.3,
    borderColor: '#6b6e6c',
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

export default ItemCour