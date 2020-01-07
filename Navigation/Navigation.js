import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../component/Search'
import SardComponent from '../component/SceneView'
import FilmDetail from '../component/FilmDetail'
import Favorites from '../component/Favorite'
import ScanCode from '../component/ScanCode'
import ItemCour from '../component/ItemCour'
import SearchCour from '../component/SearchCour'
import ApiDialog from '../component/ApiComponent'


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
      title: "détaille du film"
    }
  },
  NewViewSardoche:{
    screen: SardComponent,
    navigationOptions:{

      title: "Plus d'informations"
    }

  }
})


const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator
  },
  Scanner: {
    screen: ScanCode
  },
  Cours:{
    screen: SearchCour
  },
  Anais:{
    screen:SearchCour
  }
})
export default createAppContainer(MoviesTabNavigator)