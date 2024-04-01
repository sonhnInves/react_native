import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import { homeStyle } from "./home_style"
import Icon from "react-native-vector-icons/Ionicons"
import { AppColors } from "../../shared/constants";
import React from "react";
import { StackView } from "@react-navigation/stack";

const HomeScreen = () => {
    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
    return (
        <View style={homeStyle().container}>
            <StatusBar backgroundColor={AppColors.black} barStyle="light-content"></StatusBar>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: AppColors.black, paddingHorizontal: 16 }}>
                <Image style={homeStyle().avatar} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxi_UOGFvTA8F1K9EY8nuDVF7r1CMADXZd1pvxA_peQ&s" }} />
                <Text style={homeStyle().text}>
                    Hoang Nam Son
                </Text>
                <Icon name="menu" style={{ fontSize: 24, color: AppColors.white }} />
            </View>
            <View style={homeStyle().container}>
                <ImageBackground source={require("../../assets/home_background.png")}
                    style={homeStyle().image}>
                    <View style={{ backgroundColor: '#000000c0', }}>
                        <Text style={homeStyle(AppColors.primary).textHeader}>Account Value</Text>
                        <Text style={homeStyle(AppColors.white, 26).textHeader}>
                            $8,750.00
                        </Text>
                    </View>

                </ImageBackground>
            </View>
        </View>
    );
}
export default HomeScreen;