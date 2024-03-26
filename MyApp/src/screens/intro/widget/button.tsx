import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {AppColors} from "../../../shared/constants";

const width = Dimensions.get('window').width;
interface ButtonProps {
    text: string,
    type: string,
    bordered: boolean,
    size: string,
    onPress: () => void
}

export const Button = ({ text, onPress, type = 'filled', bordered = false, size = 'large' }: ButtonProps) => {
    const large = width / 1.3
    const small = width / 2
    const btnSize = size === 'large' ? large : small
    const btnBgColor = type === 'filled' ? AppColors.primary : 'transparent'
    const btnTextColor = type === 'filled' ? AppColors.white : AppColors.primary
    const btnBorderRadius = bordered ? 30 : 5
    const containerCommonStyle = {
        backgroundColor: btnBgColor,
        paddingVertical: 8,
        width: btnSize,
        borderRadius: btnBorderRadius,
    }
    const textCommonStyle = {
        color: btnTextColor,
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
    const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[containerCommonStyle, border]}>
                <Text style={[textCommonStyle]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
