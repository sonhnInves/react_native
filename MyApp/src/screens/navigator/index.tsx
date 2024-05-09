import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppColors, SCREENS } from "../../shared/constants";
import HomeScreen from "../home/home_screen";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Platform, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { PortfolioStack } from '../portfolio/stack_navigation/stack_navigation_portfolio';
import { ProfileScreen } from '../profile/profile_screen';
import ResourcesScreen from '../resources/resources_screen';
import HomeStack from '../home/stack_navigation/stack_navigation_home';
import ResourcesStack from '../resources/stack_navigation/stack_navigation_resources';

const Tab = createBottomTabNavigator();

const Stack = createBottomTabNavigator();

const NavigationPage = () => {
    const [current, setCurrent] = useState(0);
    const nav = useNavigation()
    return (
        <Tab.Navigator screenOptions={({ route }) => ({

            headerShown: false,

            tabBarIcon: ({ focused, color, size }) => {
                let iconName = "";
                color = focused ? AppColors.primary : AppColors.textField
                switch (route.name) {
                    case SCREENS.STACK_HOME:
                        iconName = focused ? "home" : "home-outline";
                        break;
                    case SCREENS.PROFILE:
                        iconName = focused ? "person-circle-sharp" : "person-circle-outline";
                        break;
                    case SCREENS.STACK_PORTFOLIO:
                        iconName = focused ? "stats-chart" : "stats-chart-outline";
                        break;
                    case SCREENS.STACK_RESOURCES:
                        iconName = focused ? "globe-sharp" : "globe-outline"
                }
                return (<Icon name={iconName}
                    size={size}
                    style={{ marginTop: 5 }}
                    color={color}></Icon>);
            },
            tabBarLabel: ({ focused }) => {
                return <Text style={{ color: focused ? AppColors.primary : AppColors.textField }}>
                    {route.name}
                </Text>
            },
            tabBarStyle: {
                backgroundColor: "#202020",
                height: Platform.OS === 'ios' ? 100 : 60
            }
        })} screenListeners={{
            state: (e) => {
                setCurrent(e.data.state.index);
            }
        }}>
            <Tab.Screen name={SCREENS.STACK_HOME} component={HomeStack} />
            <Tab.Screen name={SCREENS.STACK_PORTFOLIO} component={PortfolioStack} />
            <Tab.Screen name={SCREENS.STACK_RESOURCES} component={ResourcesStack} />
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
}
export default NavigationPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    },
    text: {
        color: AppColors.white,
        fontSize: 18,
        flex: 1,
        paddingVertical: 10
    }
});