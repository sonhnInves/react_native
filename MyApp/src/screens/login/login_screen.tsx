import {ScrollView, Text, View, Dimensions, StyleSheet} from "react-native";
import {AppColors} from "../../shared/constants";
import {useNavigation, useTheme} from "@react-navigation/native";
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {useEffect, useState} from "react";
import {Button} from "../intro/widget/button";
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/reducer/userReducer.ts";


const LoginScreen = () => {
    const navigation = useNavigation()
    const height = Dimensions.get("window").height
    const [emailController, setUseEmail] = useState('');
    const [passwordController, setUsePassword] = useState('');
    const [canLogin, setLogin] = useState(false);

    useEffect(() => {
        if (emailController != "" && passwordController != "") {
            setLogin(true)
            console.log(canLogin)
        }
    })
    const dispatch = useDispatch();
    const login = () => {
        const response = fetch("", {method: "POST", body: ""});
        const result = response.then((r) => r.json()).then((data) => data.data)
        console.log(result);
        if (result != null){
            dispatch(addUser({
                uid:result.then()
            }))
        }
    }

    return (
        <View>
            <View style={{height: height * 0.1}}/>
            <ScrollView>
                <Text style={{textAlign: "center", color: AppColors.primary, fontSize: 32, fontWeight: "bold",}}>
                    Welcome Back
                </Text>
                <View style={{height: 16}}/>
                <Text style={{textAlign: "center", color: AppColors.black, fontSize: 30, fontWeight: "600",}}>
                    Sign In
                </Text>
                {/*<View style={{ marginHorizontal: 16, marginTop: 20 }}>*/}
                {/*    <FloatingLabelInput*/}
                {/*        label={'Email'}*/}
                {/*        value={emailController}*/}
                {/*        onChangeText={value => setUseEmail(value)}*/}
                {/*    />*/}
                {/*</View>*/}
                {/*<View style={{ marginHorizontal: 16, marginTop: 20 }}>*/}
                {/*    <FloatingLabelInput*/}
                {/*        label={'Password'}*/}
                {/*        isPassword*/}
                {/*        value={passwordController}*/}
                {/*        onChangeText={value => setUsePassword(value)}*/}
                {/*        customShowPasswordComponent={<Text>Show</Text>}*/}
                {/*        customHidePasswordComponent={<Text>Hide</Text>}*/}
                {/*    />*/}
                {/*</View>*/}
                <View style={{alignItems: "center"}}>
                    <View style={{marginTop: height * 0.2}}>
                        <Button text="Login" onPress={() => {
                            if (canLogin) {
                                console.log(true)
                            } else {
                                console.log(false)
                            }
                        }} bordered size='large' type={canLogin ? "filled" : "outlined"}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 30,
        margin: 12,
        padding: 10,
        backgroundColor: "E8E8E8",
        borderRadius: 8
    },
});
export default LoginScreen
