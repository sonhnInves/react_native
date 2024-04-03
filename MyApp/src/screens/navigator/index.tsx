import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppColors, SCREENS } from "../../shared/constants";
import HomeScreen from "../home/home_screen";
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationScreen from "../notification/notification_screen";
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Button, DrawerLayoutAndroid, Image, StyleSheet, Text, View } from 'react-native';
import { homeStyle } from '../home/home_style';
import { useRef, useState } from 'react';
import { AppString, LocalStorage } from '../../shared/shared_preferences';
import PortfolioScreen from '../portfolio/portfolio_screen';
const Tab = createBottomTabNavigator();

const NavigationPage = () => {
    const [current, setCurrent] = useState(0);
    const nav = useNavigation()
    const drawer = useRef(null);
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Button
                title="Logout"
                onPress={() => {
                    if (drawer.current !== null) {
                        drawer.current.closeDrawer();
                        LocalStorage.removeItem(AppString.TOKEN);
                        console.log(nav.getState())
                        nav.dispatch(CommonActions.reset({
                            index: 1,
                            routes: [
                                {
                                    name: SCREENS.INTRO
                                }
                            ]
                        }))
                    }
                }}
            />
        </View>
    );
    const renderAppbar = () => {
        switch (current) {
            case 0:
                return (<><Image style={homeStyle().avatar}
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxi_UOGFvTA8F1K9EY8nuDVF7r1CMADXZd1pvxA_peQ&s" }} />
                    <Text style={homeStyle().text}>
                        Hoang Nam Son
                    </Text></>);
            case 1:
                return (<>
                    <Text style={styles.text}>
                        Portfolio
                    </Text>
                </>);
            case 2:
                return (<>
                    <Text style={styles.text}>
                        Notification
                    </Text>
                </>);
        }
        return (<View></View>);
    };
    return (
        <DrawerLayoutAndroid ref={drawer}
            drawerWidth={300}
            drawerPosition={"left"}
            renderNavigationView={navigationView}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: AppColors.black,
                paddingHorizontal: 16
            }}>
                {renderAppbar()}
                <Icon name="menu" style={{ fontSize: 24, color: AppColors.white }} onPress={() => {
                    if (drawer.current !== null) {
                        drawer.current.openDrawer();
                    }
                }} />
            </View>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "";
                    color = focused ? AppColors.primary : AppColors.textField
                    switch (route.name) {
                        case SCREENS.HOME:
                            iconName = focused ? "home" : "home-outline";
                            break;
                        case SCREENS.NOTIFICATION:
                            iconName = focused ? "notifications" : "notifications-outline";
                            break;
                        case SCREENS.PORTFOLIO:
                            iconName = focused ? "stats-chart" : "stats-chart-outline";
                    }
                    return (<Icon name={iconName}
                        size={size}
                        color={color}></Icon>);
                },
                tabBarLabel: ({ focused }) => {
                    return <Text style={{ color: focused ? AppColors.primary : AppColors.textField }}>
                        {route.name}
                    </Text>
                }
            })} screenListeners={{
                state: (e) => {
                    setCurrent(e.data.state.index);
                }
            }}>
                <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
                <Tab.Screen name={SCREENS.PORTFOLIO} component={PortfolioScreen} />
                <Tab.Screen name={SCREENS.NOTIFICATION} component={NotificationScreen} />
            </Tab.Navigator>
        </DrawerLayoutAndroid>


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