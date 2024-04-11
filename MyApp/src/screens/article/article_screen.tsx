import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { AppColors } from "../../shared/constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider } from "react-native-paper";

const ArticleScreen = () => {
    const nav = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: AppColors.white }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                backgroundColor: AppColors.black
            }}>
                <Icon name="chevron-back" size={24} color={AppColors.white} onPress={() => { nav.goBack() }} />
                <Text style={{ color: AppColors.white, fontSize: 20, marginLeft: 10 }}>
                    Article
                </Text>
            </View>
            <View style={{}}>
                <Image source={require("../../assets/image_empty.png")}
                    style={{ resizeMode: "cover", width: "100%", height: Dimensions.get("window").height / 2 }}>

                </Image>
                <View style={{
                    transform: [{ translateY: -12 }],
                    backgroundColor: AppColors.white,
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 20
                }}>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: AppColors.black }}>
                        POSTED ON JANUARY 6, 2023
                    </Text>
                    <Text style={{ color: AppColors.black }}>
                        by Sara Havens
                    </Text>
                    <Divider style={{ marginVertical: 8, width: "100%" }} />
                    <Text style={{ fontSize: 18, color: AppColors.black, fontWeight: "600" }}>
                        Bourbon continues to boom: Looking back on 2022 and looking forward to 2023
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
export default ArticleScreen;