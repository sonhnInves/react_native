import { CommonActions } from "@react-navigation/native";
import { Button, Image, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AppColors, SCREENS } from "../../shared/constants";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { AppString, LocalStorage } from "../../shared/shared_preferences";
import { TouchableOpacity } from "react-native";
import { now } from "moment";
import { IMAGE } from "../../assets";
import { useDispatch } from "react-redux";
import { Api } from "../../services";


export const ProfileScreen = () => {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const [count, setCount] = useState(0);
    const generateFibonacci = (n: number): number[] => {
        const fibArray: number[] = [];
        let a = 0, b = 1;
        for (let i = 0; i < n; i++) {
            fibArray.push(a);
            [a, b] = [b, a + b];
        }
        return fibArray;
    };
    console.time('fibonacci')
    const result = useMemo(() => {
        return generateFibonacci(1000);
    }, []);
    // const result = generateFibonacci(1000);
    console.timeEnd('fibonacci')
    return (<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TouchableOpacity onPress={() => {
            LocalStorage.removeItem(AppString.TOKEN);
            Api.resetLogin(dispatch)
            nav.dispatch(CommonActions.reset({
                index: 1,
                routes: [
                    {
                        name: SCREENS.INTRO
                    }
                ]
            }))
        }}>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: AppColors.black }}>
                Log Out
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderColor: AppColors.black, borderWidth: 1, borderRadius: 4, padding: 4 }}
            onPress={() => { setCount(count + 1) }}>
            <Text>
                Button
            </Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    action: {
        textAlign: 'center',
        color: '#0000FF',
        marginVertical: 5,
        fontWeight: 'bold',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    stat: {
        textAlign: 'center',
        color: '#B0171F',
        marginBottom: 1,
    },
});