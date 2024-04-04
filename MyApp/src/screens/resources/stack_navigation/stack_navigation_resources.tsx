import { createStackNavigator } from "@react-navigation/stack"
import { SCREENS } from "../../../shared/constants";
import ResourcesScreen from "../resources_screen";
import ArticleScreen from "../../article/article_screen";
import { useRoute } from "@react-navigation/native";
const Stack = createStackNavigator();
const ResourcesStack = () => {
    const route = useRoute();
    console.log('route', route)
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.RESOURCES}>
            <Stack.Screen name={SCREENS.RESOURCES} component={ResourcesScreen} />
            <Stack.Screen name={SCREENS.ARTICLE} component={ArticleScreen} />
        </Stack.Navigator>
    )
}
export default ResourcesStack;