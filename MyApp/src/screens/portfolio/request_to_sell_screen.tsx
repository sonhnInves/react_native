import { ScrollView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AppColors } from "../../shared/constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { styles } from "./portfolio_style";
import { formatStringToDate } from "../../ultils";
import { Button } from "../intro/widget/button";

const RequestToSellScreen = () => {
    const nav = useNavigation();
    const caskX = useSelector((state: RootState) => state.caskDetailReducer).caskDetail;
    const renderBox = (title: string, content: string) => {
        return (
            <View style={styles.box}>
                <Text style={styles.title_in_box}>
                    {title}
                </Text>
                <Text style={styles.content}>
                    {content}
                </Text>
            </View>);
    }
    const valueGrowth = ((caskX.cask?.current_price! - caskX.cask?.purchase_price!) / (caskX.cask?.purchase_price!)) * 100;
    return (
        <ScrollView style={{ padding: 16, backgroundColor: AppColors.white }}>
            <Icon name="close" size={24}
                color={AppColors.black}
                onPress={() => nav.goBack()}
                style={{ alignItems: "flex-start", justifyContent: "flex-start" }} />
            <View style={{ alignItems: "center" }}>
                <Text style={styles.textSmall}>
                    Cask - #{caskX.cask?.cask_number}
                </Text>
                {renderBox(`$${caskX.cask?.current_price_format}`, "Estimated Value")}
                {renderBox(`$${caskX.cask?.purchase_price_format}`, "Purchase price")}
                {renderBox(formatStringToDate(caskX.cask?.purchase_date ?? ""), "Date Acquired")}
                {renderBox(`${valueGrowth}%`, "Value Growth")}
            </View>
            <Text style={{ fontSize: 16, color: AppColors.black, fontWeight: "bold", marginTop: 16, marginBottom: 8 }}>
                Please, define what price you'd like to sell Cask# {caskX.cask?.cask_number} for:
            </Text>
            <View style={{ backgroundColor: AppColors.textField, borderRadius: 4 }}>
                <TextInput placeholder="Enter amount" style={{ fontSize: 16, paddingHorizontal: 8 }} />
            </View>
            <View style={{ alignItems: "center", marginTop: 40 }}>
                <Button text="Confirm" onPress={() => { }}
                    bordered size='large' type={"filled"} textTransform={"capitalize"} />
            </View>
            <Text style={{ textAlign: "center", marginTop: 20 }}>
                Your Portfolio Manager will be in contact shortly
            </Text>

        </ScrollView>
    );
}
export default RequestToSellScreen;