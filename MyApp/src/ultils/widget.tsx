import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "react-native";
import { AppColors } from "../shared/constants";
export interface HeaderType {
    title?: string,
    accountValue?: string,
    totalInvestments?: number,
    totalInvestmentsTitle?: string,
    totalGallons?: number,
    totalGallonsTitle?: string,
    totalBottles?: number,
    totalBottlesTitle?: string,
    firstInvestment?: string,
    firstInvestmentTitle?: string,
    titleButton?: string,
    backgroundColor?: string,
    backgroundColorBox?: string,
    backgroundImage: string,
    onPress?: () => void
}
const ImageList = () => {

}
export const renderHeader = (object: HeaderType) => {
    return (<ImageBackground source={object.backgroundImage}
        style={styles({}).image}>
        <View style={{ backgroundColor: object.backgroundColor ?? AppColors.black, }}>
            <Text style={styles({ color: AppColors.primary, fontSize: 24 }).textHeader}>{object.title ?? "Account Value"}</Text>
            <Text style={styles({ fontSize: 26 }).textHeader}>
                ${object.accountValue}
            </Text>
            <View style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 16, justifyContent: "space-around" }}>
                <View style={[styles({ backgroundColor: object.backgroundColorBox }).box]}>
                    <Text style={styles({}).textHeader}>
                        {object.totalInvestments}
                    </Text>
                    <Text style={styles({ fontSize: 12 }).textHeader}>
                        {object.totalInvestmentsTitle ?? "Total investments"}
                    </Text>
                </View>
                <View style={styles({}).space} />
                <View style={[styles({ backgroundColor: object.backgroundColorBox }).box]}>
                    <Text style={styles({}).textHeader}>
                        {object.totalGallons}
                    </Text>
                    <Text style={styles({ fontSize: 12 }).textHeader}>
                        {object.totalGallonsTitle ?? "Total Gallons"}
                    </Text>
                </View>
                <View style={styles({}).space} />
                <View style={[styles({ backgroundColor: object.backgroundColorBox }).box]}>
                    <Text style={styles({}).textHeader}>
                        {object.totalBottles}
                    </Text>
                    <Text style={styles({ fontSize: 12 }).textHeader}>
                        {object.totalBottlesTitle ?? "Total Bottles"}
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
                        {object.firstInvestmentTitle ?? "First Investment"}
                    </Text>
                    <Text style={styles({ fontSize: 20 }).textHeader}>
                        {object.firstInvestment}
                    </Text>
                </View>
                <TouchableOpacity style={{ borderColor: AppColors.white, borderWidth: 1, borderRadius: 8, padding: 8 }} onPress={object.onPress}>
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