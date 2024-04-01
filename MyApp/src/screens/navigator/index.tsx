import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from "../../shared/constants";
import HomeScreen from "../home/home_screen";
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationScreen from "../notification/notification_screen";
const Tab = createBottomTabNavigator();

const NavigationPage = () => {

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = "";
                switch (route.name) {
                    case SCREENS.HOME:
                        iconName = focused ? "home" : "home-outline";
                        break;
                    case SCREENS.NOTIFICATION:
                        iconName = focused ? "notifications" : "notifications-outline";
                        break;
                    default:
                        iconName = focused ? "home" : "home-outline";
                        break;
                }
                return (<Icon name={iconName}
                    size={size}
                    color={color}></Icon>);
            }
        })}>
            <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
            <Tab.Screen name={SCREENS.NOTIFICATION} component={NotificationScreen} />
        </Tab.Navigator>

    );
}
export default NavigationPage