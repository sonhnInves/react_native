import {Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {homeStyle} from "./home_style"
import Icon from "react-native-vector-icons/Ionicons"
import {AppColors} from "../../shared/constants";
import React from "react";
import {Button} from "../intro/widget/button.tsx"

const HomeScreen = () => {
    const renderHeader = () => {
        return (
            <ImageBackground source={require("../../assets/home_background.png")}
                             style={homeStyle().image}>
                <View style={{backgroundColor: '#000000c0',}}>
                    <Text style={homeStyle(AppColors.primary).textHeader}>Account Value</Text>
                    <Text style={homeStyle(AppColors.white, 26).textHeader}>
                        $8,750.00
                    </Text>
                    <View style={{flexDirection: "row", marginHorizontal: 16, marginTop: 16}}>
                        <View style={[homeStyle().box]}>
                            <Text style={homeStyle(AppColors.white).textHeader}>
                                3
                            </Text>
                            <Text style={homeStyle(AppColors.white, 12).textHeader}>
                                Total investments
                            </Text>
                        </View>
                        <View style={homeStyle().space}/>
                        <View style={[homeStyle().box]}>
                            <Text style={homeStyle(AppColors.white).textHeader}>
                                270
                            </Text>
                            <Text style={homeStyle(AppColors.white, 12).textHeader}>
                                Total Gallons
                            </Text>
                        </View>
                        <View style={homeStyle().space}/>
                        <View style={[homeStyle().box]}>
                            <Text style={homeStyle(AppColors.white).textHeader}>
                                1330
                            </Text>
                            <Text style={homeStyle(AppColors.white, 12).textHeader}>
                                Total Bottles
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 16,
                        marginVertical: 16,
                        justifyContent: "space-around"
                    }}>
                        <View>
                            <Text style={homeStyle(AppColors.primary, 20).textHeader}>
                                First Investment
                            </Text>
                            <Text style={homeStyle(AppColors.white, 20).textHeader}>
                                January 2022
                            </Text>
                        </View>
                        <View style={{width: 80}}/>
                        <View>
                            <Button text="All Holdings" type="outlined" bordered={false} size="small"
                                    onPress={() => {
                                    }} textTransform={"capitalize"}/>
                        </View>
                    </View>

                </View>

            </ImageBackground>
        );
    }
    return (
        <ScrollView style={homeStyle().container}>
            <StatusBar backgroundColor={AppColors.black} barStyle="light-content"></StatusBar>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: AppColors.black,
                paddingHorizontal: 16
            }}>
                <Image style={homeStyle().avatar}
                       source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxi_UOGFvTA8F1K9EY8nuDVF7r1CMADXZd1pvxA_peQ&s"}}/>
                <Text style={homeStyle().text}>
                    Hoang Nam Son
                </Text>
                <Icon name="menu" style={{fontSize: 24, color: AppColors.white}}/>
            </View>
            {renderHeader()}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 16,
                alignItems: "center",
                marginTop: 16
            }}>
                <Text style={{fontWeight: "700", fontSize: 20, color: AppColors.black}}>
                    Latest About CaskX
                </Text>
                <Text style={{fontWeight: "700", fontSize: 16, color: AppColors.primary}}>
                    View All News
                </Text>
            </View>
            <View style={{flexDirection: "row", margin: 16}}>
                <Image
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxi_UOGFvTA8F1K9EY8nuDVF7r1CMADXZd1pvxA_peQ&s"}}
                    style={{width: 127, height: 101, resizeMode: "cover"}}/>
                <View style={{flexDirection: "column", flex: 1, marginLeft: 12}}>
                    <Text style={{fontWeight: "700", fontSize: 16}}>
                        Bourbon continues to boom: Looking back on 2022 and looking forward to 2023
                    </Text>
                    <Text style={{fontWeight: "400", fontSize: 12, marginTop: 8}}>
                        POSTED ON JANUARY 6, 2023 BY SARA HAVENS
                    </Text>
                </View>
            </View>
            <Text style={{fontWeight: "700", fontSize: 20, color: AppColors.black, marginHorizontal: 16}}>
                Notification
            </Text>
            <TouchableOpacity style={{backgroundColor: AppColors.black, margin: 16, borderRadius: 8}}>
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 16,
                    paddingVertical: 20,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View>
                        <Text style={{fontWeight: "700", fontSize: 20, color: AppColors.primary}}>
                            CaskX VIP Experience
                        </Text>
                        <Text style={{fontWeight: "400", fontSize: 16, color: AppColors.white}}>
                            Pending Invitation
                        </Text>
                    </View>
                    <Icon name="add-circle" size={28} style={{color: AppColors.primary}}></Icon>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}
export default HomeScreen;
