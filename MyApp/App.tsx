/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "./src/screens/intro/intro_screen.tsx";
import { SCREENS } from "./src/shared/constants";
import LoginScreen from "./src/screens/login/login_screen.tsx";
import { Provider } from "react-redux"
import store from "./src/redux/store.ts";
import HomeScreen from './src/screens/home/home_screen.tsx';

const Stack = createStackNavigator();

function App(): React.JSX.Element {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={SCREENS.INTRO} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={SCREENS.INTRO} component={IntroScreen} />
                    <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
                    <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
}

export default App;
