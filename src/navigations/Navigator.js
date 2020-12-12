import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import VideoPage from '../screens/VideoPage'
import git from '../screens/git'
import gitvid from '../screens/gitvid'
import cloud from '../screens/cloud'
import cloudvid from '../screens/cloudvid'
import MERN from '../screens/MERN'
import MERNvid from '../screens/MERNvid'
import Webdev from '../screens/Webdev'
import Webvid from '../screens/Webvid'
import ML from '../screens/ML'
import MLvid from '../screens/MLvid'
import Fig from '../screens/Fig'
import Figvid from '../screens/Figvid'

const stackNavigatorOptions ={
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Cources:{screen:Cources},
    git:{screen:git},
    cloud:{screen:cloud},
    MERN:{screen:MERN},
    ML:{screen:ML},
    Xd:{screen:Xd},
    Fig:{screen:Fig},
    Figvid:{screen:Figvid},
    Webdev:{screen:Webdev},
    gitvid:{screen:gitvid},
    cloudvid:{screen:cloudvid},
    MERNvid:{screen:MERNvid},
    MLvid:{screen:MLvid},
    Webvid:{screen:Webvid},
    VideoPage:{screen:VideoPage}

},
{
    defaultNavigationOptions:stackNavigatorOptions
}
)
export default createAppContainer(AppNavigator);