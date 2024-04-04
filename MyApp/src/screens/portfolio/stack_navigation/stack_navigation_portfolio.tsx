import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../../../shared/constants";
import PortfolioScreen from "../portfolio_screen";
import { CaskDetailScreen } from "../portfolio_detail";

const Stack = createStackNavigator();
export const PortfolioStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.PORTFOLIO}>
            <Stack.Screen name={SCREENS.PORTFOLIO} component={PortfolioScreen} />
            <Stack.Screen name={SCREENS.CASK_DETAIL} component={CaskDetailScreen} />
        </Stack.Navigator>
    );
}