import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { AppColors, SCREENS } from "../../shared/constants";
import { styles } from "./resources_style";
import { IMAGE } from "../../assets";
import { useNavigation } from "@react-navigation/native";

const ResourcesScreen = () => {
    const nav = useNavigation();
    const renderButton = (onPress: () => void, title: string) => {
        return (<TouchableOpacity
            style={styles.touchableOpacity}
            onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>);
    }
    return (<ImageBackground style={{ width: "100%", height: "100%", backgroundColor: AppColors.black }}
        source={IMAGE.ResourcesBackground}>
        <LinearGradient colors={[AppColors.transparent, AppColors.black, AppColors.black]}
            style={styles.linearGradient}>
            <View style={{ marginTop: "30%" }}></View>
            {renderButton(() => {
                nav.navigate({
                    name: SCREENS.ARTICLE
                } as never);
            }, "CaskX Blog")}
            {renderButton(() => { }, "News-Featured In")}
            {renderButton(() => { }, "Distillery Directory")}
            {renderButton(() => { }, "Investment Guide")}
        </LinearGradient>
    </ImageBackground>)
}
export default ResourcesScreen;