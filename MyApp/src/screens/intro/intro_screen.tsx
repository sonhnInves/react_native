import {useNavigation} from "@react-navigation/native";
import {Image, Text, View} from "react-native";
import {Button} from "./widget/button.tsx"
import {SCREENS} from "../../shared/constants";

const IntroScreen = () => {

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate({name: SCREENS.LOGIN, param: {}} as never)
    }
    return (<View style={{flexDirection: 'column', backgroundColor: "#000000", flex: 1}}>
        <Image source={require("../../assets/logo_caskx.png")} style={{
            resizeMode: 'contain',
            width: 'auto',
            marginHorizontal: 50
        }}/>
        <View>
            <Text style={{color: "#FFFF", textAlign: "center", fontSize: 24}}>
                ALREADY AN INVESTOR?
            </Text>
        </View>
        <View style={{height: 30}}/>
        <View style={{alignItems: "center"}}>
            <Button text="Login" onPress={onPress} bordered size='small' type='outlined' textTransform={"uppercase"}/>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{color: "#ffcc33", fontSize: 18}}>,
                New User?
            </Text>
        </View>
    </View>);
}
export default IntroScreen;
