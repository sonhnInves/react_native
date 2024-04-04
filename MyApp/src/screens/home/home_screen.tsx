
import { ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { homeStyle } from "./home_style"
import Icon from "react-native-vector-icons/Ionicons"
import { AppColors, SCREENS } from "../../shared/constants";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { Api } from "../../services";
import { formatStringToDate } from "../../ultils";
import { renderHeader } from "../../ultils/widget.tsx";
import { IMAGE } from "../../assets/index.ts";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const nav = useNavigation<any>();
    const caskX = useSelector((state: RootState) => state.caskListReducer);
    const distilleriesNews = useSelector((state: RootState) => state.distilleriesNewsReduces);
    const notificationHome = useSelector((state: RootState) => state.notificationReducer);
    const profile = useSelector((state: RootState) => state.myProfileReducer);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        Api.getCask(dispatch).then((r) => {
            setRefreshing(false)
        })
    }, []);

    useEffect(() => {
        Api.getCask(dispatch);
        Api.getListArticle(dispatch);
        Api.getNotificaton(dispatch);
        Api.getMyProfile(dispatch);
    }, [])
    const DATA = notificationHome.notification.data
    type ItemProps = { title: string };

    const Item = ({ title }: ItemProps) => (
        <TouchableOpacity style={{ backgroundColor: AppColors.black, margin: 16, borderRadius: 8 }}>
            <View style={{
                flexDirection: "row",
                paddingHorizontal: 16,
                paddingVertical: 20,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <View>
                    <Text style={{ fontWeight: "700", fontSize: 20, color: AppColors.primary }}>
                        {title}
                    </Text>
                    <Text style={{ fontWeight: "400", fontSize: 16, color: AppColors.white }}>
                        Pending Invitation
                    </Text>
                </View>
                <Icon name="add-circle" size={28} style={{ color: AppColors.primary }}></Icon>
            </View>
        </TouchableOpacity>
    );
    return (
        (caskX.isLoading && distilleriesNews.isLoading) ? <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: AppColors.textField }}>
            <ActivityIndicator size={50} />
        </View> :
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={homeStyle().container}
                    refreshControl={<RefreshControl refreshing={refreshing}
                        onRefresh={onRefresh} />}>
                    <StatusBar backgroundColor={AppColors.black} barStyle="light-content"></StatusBar>
                    <View style={{ flexDirection: "row", backgroundColor: AppColors.black, paddingHorizontal: 16, alignItems: "center", paddingVertical: 4 }}>
                        <Image style={homeStyle().avatar}
                            source={{ uri: "https://s3.amazonaws.com/caskx-base/220/219.jpg?c=1695627943" }} />
                        <Text style={homeStyle().text}>
                            {profile.myProfile.display_org_name}
                        </Text>
                    </View>
                    {renderHeader({
                        backgroundImage: IMAGE.Background,
                        backgroundColor: "#000000c0",
                        accountValue: caskX.caskList.totals?.[0].purchase_price_format ?? "0",
                        totalInvestments: caskX.caskList.totals?.[0].totalinvestments ?? 0,
                        totalGallons: caskX.caskList.totals?.[0].totalgal1 ?? 0,
                        totalBottles: caskX.caskList.totals?.[0].totalbottles1 ?? 0,
                        firstInvestment: caskX.caskList.totals?.[0].firstinvestment,
                        titleButton: "All Holdings",
                        onPress: () => { },
                    })}
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 16,
                        alignItems: "center",
                        marginTop: 16
                    }}>
                        <Text style={{ fontWeight: "700", fontSize: 20, color: AppColors.black }}>
                            Latest About CaskX
                        </Text>
                        <Text style={{ fontWeight: "700", fontSize: 16, color: AppColors.primary }}>
                            View All News
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        nav.navigate(SCREENS.STACK_RESOURCES, {
                            screen: SCREENS.ARTICLE
                        });
                    }} activeOpacity={0.9}>
                        <View style={{ flexDirection: "row", margin: 16 }}>
                            {distilleriesNews.distilleriesNews.data?.[0].image === null ? <Image
                                source={require("../../assets/image_empty.png")}
                                style={{ width: 127, height: 101, resizeMode: "cover", borderRadius: 8 }} /> : <Image
                                source={{ uri: distilleriesNews.distilleriesNews.data?.[0].image }}
                                style={{ width: 127, height: 101, resizeMode: "cover", borderRadius: 8 }} />}

                            <View style={{ flexDirection: "column", flex: 1, marginLeft: 12 }}>
                                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                                    {distilleriesNews.distilleriesNews.data?.[0].title ?? ""}
                                </Text>
                                <Text style={{ fontWeight: "400", fontSize: 12, marginTop: 8 }}>
                                    {`POSTED ON ${formatStringToDate(distilleriesNews.distilleriesNews.data?.[0]?.date ?? "").toUpperCase()} BY ${distilleriesNews.distilleriesNews.data?.[0].author?.display_name.toUpperCase()}`}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "700", fontSize: 20, color: AppColors.black, marginHorizontal: 16 }}>
                        Notification
                    </Text>
                    <FlatList data={DATA} renderItem={({ item }) => <Item title={item.name} />}
                        scrollEnabled={false} />
                </ScrollView>
            </SafeAreaView>

    );
}
export default HomeScreen;
