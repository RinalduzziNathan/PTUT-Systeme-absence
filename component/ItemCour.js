import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'

class ItemCour extends React.Component {


  render() {
    return (
    <TouchableOpacity>
        <Text> Debut du component ItemCour qui va contenir un cour </Text>

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

export default ItemCour