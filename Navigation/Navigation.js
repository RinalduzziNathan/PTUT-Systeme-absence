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
import Connexion from '../component/Connexion'


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

const StackNavigatorCoursApi = createStackNavigator({

  SearchCour: {
    screen: SearchCour,
    navigationOptions: {
      title: "Cours"
    }
  },

  Api:{
    screen:ApiDialog,
    navigationOptions:{
      title: "Api"
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
    screen: StackNavigatorCoursApi
  },
  Anais:{
    screen: Connexion
  }
})
export default createAppContainer(MoviesTabNavigator)