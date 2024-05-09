
import { FlatList, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { renderHeader } from "../../ultils/widget";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppColors, SCREENS } from "../../shared/constants";
import React, { PropsWithChildren, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./portfolio_style.ts";
import { Cask } from "../../models/cask.ts";
import { useNavigation } from "@react-navigation/native";
import { IMAGE } from "../../assets/index.ts";

type AccordionItemPros = PropsWithChildren<{}>;
const PortfolioScreen = () => {
    const nav = useNavigation();
    const caskX = useSelector((state: RootState) => state.caskListReducer);

    const investment = caskX.caskList.casks;

    const broker = caskX.caskList.broker;

    const distilleries = caskX.caskList.distilleries;

    let title = investment?.[0].name ?? "";

    let costBasic = investment?.reduce((sum, element) => sum + element.current_price, 0)

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    function AccordionItem({ children }: AccordionItemPros): JSX.Element {
        const [expanded, setExpanded] = useState(false);

        function toggleItem() {
            setExpanded(!expanded);
        }

        const body = <View style={styles.accordBody}>{children}</View>;

        return (
            <View style={styles.accordContainer}>
                <View style={styles.accordHeader}>
                    <TouchableOpacity onPress={toggleItem}>
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: AppColors.black }}>
                            {title}
                        </Text>
                        <View style={{ flexDirection: "row", marginVertical: 8 }}>
                            <Text style={{ color: AppColors.black }}>
                                COST BASIS -
                            </Text>
                            <Text style={{ fontWeight: "bold", color: AppColors.black }}>
                                {USDollar.format(costBasic as number)}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: "bold", color: AppColors.black }}>
                                {investment?.length} Casks
                            </Text>
                            <Icon name={expanded ? 'chevron-up' : 'chevron-down'}
                                size={18} color={expanded ? AppColors.primary : "#bbb"} />
                        </View>
                    </TouchableOpacity>
                    {expanded && body}
                </View>
            </View>
        );
    }

    type ItemProps = {
        onPress: () => void,
        data: Cask
    };
    const Item = ({ onPress, data }: ItemProps) => (
        <View style={{ marginVertical: 8 }}>
            <Text style={{ color: AppColors.primary, fontSize: 14 }}>
                {data.name}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 4 }}>
                <Text style={{ color: AppColors.black }}>
                    CASK -{" "}
                </Text>
                <Text style={{ fontWeight: "bold", color: AppColors.black }}>
                    #{data.id}-{data.cask_number}
                </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 4 }}>
                <Text style={{ color: AppColors.black }}>
                    COST BASIS -{" "}
                </Text>
                <Text style={{ fontWeight: "bold", color: AppColors.black }}>
                    {USDollar.format(data.current_price as number)}
                </Text>
            </View>
            <View
                style={{ flexDirection: "row", marginTop: 4, justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: AppColors.black }}>
                        AGE -{" "}
                    </Text>
                    <Text style={{ fontWeight: "bold", color: AppColors.black }}>
                        {data.age}
                    </Text>
                </View>
                <TouchableOpacity onPress={onPress}>
                    <View style={{
                        borderColor: AppColors.black,
                        borderWidth: 1,
                        borderRadius: 4,
                        paddingVertical: 4,
                        paddingHorizontal: 8
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text>
                                View
                            </Text>
                            <Icon name={"angle-right"} size={18} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (<ScrollView>
        <View style={{ backgroundColor: AppColors.black, paddingHorizontal: 16 }}>
            {Platform.OS === 'ios' && <View style={{ height: 59 }}>
                <StatusBar backgroundColor={AppColors.red} /></View>}
            <Text style={{ color: AppColors.white, fontSize: 20 }}>
                Portfolio
            </Text>
        </View>
        {renderHeader({
            backgroundImage: IMAGE.Background,
            accountValue: caskX.caskList.totals?.[0].purchase_price_format ?? "0",
            totalInvestments: caskX.caskList.totals?.[0].totalinvestments ?? 0,
            totalGallons: caskX.caskList.totals?.[0].totalgal1 ?? 0,
            totalBottles: caskX.caskList.totals?.[0].totalbottles1 ?? 0,
            firstInvestment: caskX.caskList.totals?.[0].firstinvestment,
            titleButton: "Portfolio manager",
            onPress: () => {
            },
            backgroundColorBox: "#202020"
        })}
        <Text style={{ padding: 16, fontWeight: "bold", fontSize: 18, color: AppColors.black }}>
            Investments
        </Text>
        <AccordionItem>
            <FlatList data={caskX.caskList.casks} renderItem={({ item }) => <Item data={item} onPress={() => {
                nav.navigate({ name: SCREENS.CASK_DETAIL, params: { id: item.id } } as never);
            }} />} scrollEnabled={false} />
        </AccordionItem>
        <Text style={{ padding: 16, fontWeight: "bold", fontSize: 18, color: AppColors.black }}>
            Your Advisor
        </Text>
        <TouchableOpacity style={styles.border} activeOpacity={0.9} onPress={() => { }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={{ width: 50, height: 50, borderRadius: 30 }}
                    source={{ uri: broker?.signature_nice_profileimage }} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={{ fontWeight: "bold", color: AppColors.black }}>
                        {broker?.signature_nice_lastname} {broker?.signature_nice_firstname}
                    </Text>
                    <Text style={{ color: AppColors.black }}>
                        {broker?.signature_nice_title}
                    </Text>
                </View>
                <Icon name="angle-right" size={30} />
            </View>
        </TouchableOpacity>
        <Text style={{ padding: 16, fontWeight: "bold", fontSize: 18, color: AppColors.black }}>
            Distilleries
        </Text>
        <FlatList
            horizontal={true}
            data={distilleries}
            scrollEnabled={true}
            renderItem={({ item }) => <><TouchableOpacity activeOpacity={0.9}>
                <View style={{ marginHorizontal: 16 }}>
                    <Image style={{ width: 70, height: 70, borderRadius: 35 }}
                        source={{ uri: item.image }} />
                    <Text style={{ width: 70, textAlign: "center", color: AppColors.black }}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity></>} />

        <View style={{ marginVertical: 8 }} />
    </ScrollView>);
}
export default PortfolioScreen;
