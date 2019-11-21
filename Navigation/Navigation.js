import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Search from '../component/Search'
import SardComponent from '../component/SceneView'
import FilmDetail from '../component/FilmDetail'
//import Search from '../component/Search'



const SearchStackNavigator = createStackNavigator({

  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher"
    }
  },
  FilmDetail:{
    screen:FilmDetail,
    navigationOptions: {
      title: "détaille + sardoche"
    }
  },
  NewViewSardoche:{
    screen: SardComponent,
    navigationOptions:{
      title: "PrionsLeCycle"
    }

  }

})

export default createAppContainer(SearchStackNavigator)