import { CommonActions } from "@react-navigation/native";
import { Button, ScrollView, Text, View } from "react-native";
import { AppColors, SCREENS } from "../../shared/constants";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AppString, LocalStorage } from "../../shared/shared_preferences";
import { TouchableOpacity } from "react-native";

export const ProfileScreen = () => {
    const nav = useNavigation();
    return (<View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <TouchableOpacity onPress={() => {
            LocalStorage.removeItem(AppString.TOKEN);
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
    </View>);
}