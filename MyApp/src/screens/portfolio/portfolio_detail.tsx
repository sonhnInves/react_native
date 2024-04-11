import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { renderHeader } from "../../ultils/widget";
import { IMAGE } from "../../assets";
import { AppColors, SCREENS } from "../../shared/constants";
import Icon from "react-native-vector-icons/Ionicons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Divider } from 'react-native-paper';
import { Api } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native"
import { RootState } from "../../redux/store";
import { formatStringToDate } from "../../ultils";

type Type = {
    CaskDetail: { id: number }
}
export const CaskDetailScreen = () => {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute<RouteProp<Type, 'CaskDetail'>>()
    console.log("----------", route.params?.id)
    const caskDetail = useSelector((state: RootState) => state.caskDetailReducer);
    const distillery = caskDetail.caskDetail.distilleryinfo?.[0];
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    useEffect(() => {
        Api.getCaskDetail(dispatch, route.params?.id);
    }, [])
    const renderTitle = (title: string, content: string) => {
        return (
            <View>
                <Divider style={styles.divider} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 14 }}>
                        {title} -
                    </Text>
                    <Text style={{ fontWeight: "bold", color: AppColors.black, fontSize: 14 }}>
                        {content.toUpperCase()}
                    </Text>
                </View>
            </View>
        );
    }
    return (
        caskDetail.isLoading ? <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                backgroundColor: AppColors.textField
            }}>
            <ActivityIndicator size={50} />
        </View> :
            <ScrollView>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: AppColors.black,
                    paddingHorizontal: 8,
                    paddingVertical: 16
                }}>
                    <Icon name="chevron-back-outline"
                        style={{ color: AppColors.white }}
                        size={24} onPress={() => { nav.goBack() }} />
                    <Text style={{ color: AppColors.white, fontSize: 20, marginLeft: 10 }}>
                        Cask - #{caskDetail.caskDetail.cask?.cask_number}
                    </Text>
                </View>
                {renderHeader({
                    backgroundImage: IMAGE.CaskDetailBackground,
                    backgroundColor: "#000000c0",
                    title: "Estimated Value",
                    accountValue: `${caskDetail.caskDetail.cask?.current_price_format}`,
                    totalInvestmentsTitle: "Purchase Prise",
                    totalBottlesTitle: "Current Age",
                    totalGallonsTitle: "Date Acquired",
                    firstInvestmentTitle: "Cask#",
                    totalInvestments: 2323,
                    totalGallons: 10000,
                    totalBottles: 100000,
                    firstInvestment: caskDetail.caskDetail.cask?.cask_number,
                    titleButton: "Request to sell",
                    onPress: (() => {
                        nav.navigate({ name: SCREENS.REQUEST_TO_SELL } as never);

                    })
                })}
                <View style={styles.padding}>
                    <Text style={styles.title}>
                        Info
                    </Text>
                    {renderTitle("DISTILLERY", distillery?.name ?? "")}
                    {renderTitle("CASK", caskDetail.caskDetail.cask?.cask_number ?? "")}
                    {renderTitle("BATCH", caskDetail.caskDetail.cask?.batchnumber ?? "")}
                    {renderTitle("DISTILLED DATE", formatStringToDate(caskDetail.caskDetail.cask?.distillation_date ?? ""))}
                    {renderTitle("CURRENT AGE", "12")}
                    {renderTitle("DISTILLED REGION", "931")}
                    {renderTitle("CASK TYPE", "931")}
                    {renderTitle("EST. BOTTLE COUNT", "931")}
                    {renderTitle("EST. ABV", "931")}
                    {renderTitle("EST. PROOF", "931")}
                    {renderTitle("VOLUME", "931")}
                </View>

            </ScrollView>);
}
const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 16
    },
    divider: {
        marginVertical: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: AppColors.black
    }
})