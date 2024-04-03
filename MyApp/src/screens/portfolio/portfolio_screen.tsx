import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {renderHeader} from "../../ultils/widget";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {AppColors} from "../../shared/constants";
import React, {PropsWithChildren, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./portfolio_style.ts";

type AccordionItemPros = PropsWithChildren<{}>;
const PortfolioScreen = () => {
    const caskX = useSelector((state: RootState) => state.caskListReducer);

    function AccordionItem({children}: AccordionItemPros): JSX.Element {
        const [expanded, setExpanded] = useState(false);

        function toggleItem() {
            setExpanded(!expanded);
        }

        const body = <View style={styles.accordBody}>{children}</View>;

        return (
            <View style={styles.accordContainer}>
                <View style={styles.accordHeader}>
                    <TouchableOpacity onPress={toggleItem}>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: AppColors.black}}>
                            Kentucky Artisan Distillery 2021 Wheated Bourbon
                        </Text>
                        <View style={{flexDirection: "row", marginVertical: 8}}>
                            <Text style={{color: AppColors.black}}>
                                COST BASIS -
                            </Text>
                            <Text style={{fontWeight: "bold", color: AppColors.black}}>
                                $8,750.00
                            </Text>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{fontWeight: "bold", color: AppColors.black}}>
                                5 Casks
                            </Text>
                            <Icon name={expanded ? 'chevron-up' : 'chevron-down'}
                                  size={18} color={expanded ? AppColors.primary : "#bbb"}/>
                        </View>
                    </TouchableOpacity>
                    {expanded && body}
                </View>
            </View>
        );
    }

    type ItemProps = { onPress: () => void };
    const Item = ({onPress}: ItemProps) => (
        <View style={{marginVertical: 8}}>
            <Text style={{color: AppColors.primary, fontSize: 14}}>
                Kentucky Artisan Distillery 2021 Wheated Bourbon
            </Text>
            <View style={{flexDirection: "row", marginTop: 4}}>
                <Text style={{color: AppColors.black}}>
                    CASK -
                </Text>
                <Text style={{fontWeight: "bold", color: AppColors.black}}>
                    #2986-21591
                </Text>
            </View>
            <View style={{flexDirection: "row", marginTop: 4}}>
                <Text style={{color: AppColors.black}}>
                    COST BASIS -
                </Text>
                <Text style={{fontWeight: "bold", color: AppColors.black}}>
                    $1,1750.00
                </Text>
            </View>
            <View
                style={{flexDirection: "row", marginTop: 4, justifyContent: "space-between", alignItems: "center"}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{color: AppColors.black}}>
                        AGE -
                    </Text>
                    <Text style={{fontWeight: "bold", color: AppColors.black}}>
                        3
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
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text>
                                View
                            </Text>
                            <Icon name={"angle-right"} size={18} style={{marginLeft: 8}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (<ScrollView>
        {renderHeader({
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
        <Text style={{padding: 16, fontWeight: "bold", fontSize: 18, color: AppColors.black}}>
            Investments
        </Text>
        <AccordionItem>
            <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} renderItem={({item}) => <Item onPress={() => {
                console.log(item)
            }}/>} scrollEnabled={false}/>
        </AccordionItem>
    </ScrollView>);
}
export default PortfolioScreen;
