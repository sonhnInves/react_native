import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "react-native";
import { AppColors } from "../shared/constants";
export interface HeaderType {
    accountValue?: string,
    totalInvestments?: number,
    totalGallons?: number,
    totalBottles?: number,
    firstInvestment?: string,
    titleButton?: string,
    backgroundColor?: string,
    backgroundColorBox?: string,
    onPress?: () => void
}
export const renderHeader = (object: HeaderType) => {
    return (<ImageBackground source={require("../assets/home_background.png")}
        style={styles({}).image}>
        <View style={{ backgroundColor: object.backgroundColor ?? AppColors.black, }}>
            <Text style={styles({ color: AppColors.primary }).textHeader}>Account Value</Text>
            <Text style={styles({ fontSize: 26 }).textHeader}>
                ${object.accountValue}
            </Text>
            <View style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 16, justifyContent: "space-around" }}>
                <View style={[styles({ backgroundColor: object.backgroundColorBox }).box]}>
                    <Text style={styles({}).textHeader}>
                        {object.totalInvestments}
                    </Text>
                    <Text style={styles({ fontSize: 12 }).textHeader}>
                        Total investments
                    </Text>
                </View>
                <View style={styles({}).space} />
                <View style={[styles({ backgroundColor: object.backgroundColorBox }).box]}>
                    <Text style={styles({}).textHeader}>
                        {object.totalGallons}
                    </Text>
                    <Text style={styles({ fontSize: 12 }).textHeader}>
                        Total Gallons
                    </Text>
                </View>
                <View style={styles({}).space} />
                <View style={[styles({ backgroundColor: object.backgroundColorBox }).box]}>
                    <Text style={styles({}).textHeader}>
                        {object.totalBottles}
                    </Text>
                    <Text style={styles({ fontSize: 12 }).textHeader}>
                        Total Bottles
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                marginHorizontal: 16,
                marginVertical: 16,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <View>
                    <Text style={styles({ color: AppColors.primary, fontSize: 20 }).textHeader}>
                        First Investment
                    </Text>
                    <Text style={styles({ fontSize: 20 }).textHeader}>
                        {object.firstInvestment}
                    </Text>
                </View>
                <TouchableOpacity style={{ borderColor: AppColors.white, borderWidth: 1, borderRadius: 8, padding: 8 }} onPress={() => { object.onPress }}>
                    <Text style={{ color: AppColors.white }}>
                        {object.titleButton}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    </ImageBackground>);
}
interface styleStyle {
    color?: string
    fontSize?: number,
    backgroundColor?: string
}
// color: string = AppColors.primary,
//     fontSize: number = 22, backgroundColor: string = '#202020'
const styles = (object: styleStyle) => StyleSheet.create({
    image: {
        justifyContent: "center",
    },
    textHeader: {
        fontSize: object.fontSize,
        color: object.color ?? AppColors.white,
        fontWeight: '400',
        textAlign: 'center',
    },
    box: {
        flex: 1,
        backgroundColor: object.backgroundColor ?? AppColors.black,
        alignItems: 'center',
        paddingVertical: 8,
    },
    space: {
        width: 16,
    },
})