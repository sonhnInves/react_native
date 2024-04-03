import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { renderHeader } from "../../ultils/widget";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppColors } from "../../shared/constants";
import React, { Component, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


type AccordionItemPros = PropsWithChildren<{
    title: string;
}>;
const PortfolioScreen = () => {
    const caskX = useSelector((state: RootState) => state.caskListReducer);
    function AccordionItem({ children, title }: AccordionItemPros): JSX.Element {
        const [expanded, setExpanded] = useState(false);

        function toggleItem() {
            setExpanded(!expanded);
        }

        const body = <View style={styles.accordBody}>{children}</View>;

        return (
            <View style={styles.accordContainer}>
                <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
                    <Text style={styles.accordTitle}>{title}</Text>
                    <Icon name={expanded ? 'chevron-up' : 'chevron-down'}
                        size={20} color="#bbb" />
                </TouchableOpacity>
                {expanded && body}
            </View>
        );
    }
    return (<ScrollView>
        {renderHeader({
            accountValue: caskX.caskList.totals?.[0].purchase_price_format ?? "0",
            totalInvestments: caskX.caskList.totals?.[0].totalinvestments ?? 0,
            totalGallons: caskX.caskList.totals?.[0].totalgal1 ?? 0,
            totalBottles: caskX.caskList.totals?.[0].totalbottles1 ?? 0,
            firstInvestment: caskX.caskList.totals?.[0].firstinvestment,
            titleButton: "Portfolio manager",
            onPress: () => { },
            backgroundColorBox: "#202020"
        })}

        <Text style={{ padding: 16, fontWeight: "bold", fontSize: 18, color: AppColors.black }}>
            Investments
        </Text>

        <AccordionItem title="Native development">
            <Text style={styles.textSmall}>React Native lets you create truly native apps and
                doesn't compromise your users' experiences. It provides a core set of platform
                agnostic native components </Text>
        </AccordionItem>
    </ScrollView>);
}
export default PortfolioScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accordContainer: {
        paddingBottom: 4
    },
    accordHeader: {
        padding: 12,
        backgroundColor: '#666',
        color: '#eee',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    accordTitle: {
        fontSize: 20,
    },
    accordBody: {
        padding: 12
    },
    textSmall: {
        fontSize: 16
    },
    seperator: {
        height: 12
    }
});