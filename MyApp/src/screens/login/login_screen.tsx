import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AppColors, SCREENS } from "../../shared/constants";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button } from "../intro/widget/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../../redux/reducer/auth"
import { RootState } from "../../redux/store";
import Icon from 'react-native-vector-icons/Ionicons';


const LoginScreen = () => {
    const navigation = useNavigation()
    const height = Dimensions.get("window").height
    const [emailController, setUseEmail] = useState('');
    const [passwordController, setUsePassword] = useState('');
    const [canLogin, setLogin] = useState(false);


    useEffect(() => {
        if (emailController != "" && passwordController != "") {
            setLogin(true)
        } else {
            setLogin(false)
        }
    })
    const user = useSelector((state: RootState) => state.authReducer)
    const dispatch = useDispatch();
    const loginEmail = async (email: string) => {
        try {
            const API_URL = "http://ec2-54-196-173-168.compute-1.amazonaws.com";
            const res = await axios.post(API_URL + ":3000/api/getToken", email)
            dispatch(login(res.data))
            navigation.navigate({ name: SCREENS.NAVIGATION_PAGE } as never)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <View>
            <View style={{ height: 20 }} />
            <View>
                <Icon name="close" size={24} onPress={navigation.goBack}></Icon>
            </View>
            <View style={{ height: height * 0.1 }} />
            <ScrollView>
                <Text style={{ textAlign: "center", color: AppColors.primary, fontSize: 32, fontWeight: "bold", }}>
                    Welcome Back
                </Text>
                <View style={{ height: 16 }} />
                <Text style={{ textAlign: "center", color: AppColors.black, fontSize: 30, fontWeight: "600", }}>
                    Sign In
                </Text>
                <View style={[stylesIndicator.container, stylesIndicator.horizontal]}>
                    {user.isLoading ? <ActivityIndicator size={'large'} /> : <View />}

                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setUseEmail(value)}
                    value={emailController}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={value => setUsePassword(value)}
                    value={passwordController}
                    placeholder="Password"
                    keyboardType="numeric"
                />
                <View style={{ alignItems: "center" }}>
                    <View style={{ marginTop: height * 0.2 }}>
                        <Button text="Login" onPress={() => {
                            if (canLogin) {
                                loginEmail("username=dieptx.ptit@gmail.com&password=11");
                                console.log(true);
                            }
                        }} bordered size='large' type={canLogin ? "filled" : "outlined"} textTransform={"capitalize"} />
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        backgroundColor: AppColors.textField,
        borderRadius: 8
    },
});

const stylesIndicator = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
export default LoginScreen
