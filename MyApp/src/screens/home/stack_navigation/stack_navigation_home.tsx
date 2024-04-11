import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../../../shared/constants";
import HomeScreen from "../home_screen";
import ArticleScreen from "../../article/article_screen";

const Stack = createStackNavigator();
const HomeStack = () => {
    return (<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.HOME}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.ARTICLE} component={ArticleScreen} />
    </Stack.Navigator>);
}
export default HomeStack;