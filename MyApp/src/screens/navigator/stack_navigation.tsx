import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../../shared/constants";
import NavigationPage from '../navigator';
import RequestToSellScreen from "../portfolio/request_to_sell_screen";
const Stack = createStackNavigator();
export const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.NAVIGATION_PAGE} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.NAVIGATION_PAGE} component={NavigationPage} />
            <Stack.Screen name={SCREENS.REQUEST_TO_SELL} component={RequestToSellScreen} />
        </Stack.Navigator>
    );
}