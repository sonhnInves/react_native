/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "./src/screens/intro/intro_screen.tsx";
import { SCREENS } from "./src/shared/constants";
import LoginScreen from "./src/screens/login/login_screen.tsx";
import { Provider } from "react-redux"
import store from "./src/redux/store.ts";
import NavigationPage from './src/screens/navigator/index.tsx';
import { AppString, LocalStorage } from './src/shared/shared_preferences/index.ts';
import { useEffect, useState } from "react";
import { View } from 'react-native';
import { StackNavigation } from './src/screens/navigator/stack_navigation.tsx';
import "react-native-devsettings";
const Stack = createStackNavigator();

function App(): React.JSX.Element {
    const [isToken, setToken] = useState(false);
    const [loading, setLoading] = useState(false);

    const checkToken = async () => {
        setLoading(true)
        let token = await LocalStorage.get(AppString.TOKEN);

        setToken(token ? true : false)
        console.log('isToken', token)
        setLoading(false)
    }
    useEffect(() => {
        checkToken();
    }, [])
    if (loading) return <View />
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isToken ? SCREENS.STACK_NAVIGSTION : SCREENS.INTRO} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={SCREENS.INTRO} component={IntroScreen} />
                    <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
                    <Stack.Screen name={SCREENS.STACK_NAVIGSTION} component={StackNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
}

export default App;
