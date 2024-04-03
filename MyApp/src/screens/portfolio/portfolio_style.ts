import {StyleSheet} from "react-native";
import {AppColors} from "../../shared/constants";

 export  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accordContainer: {
        paddingBottom: 4
    },
    accordHeader: {
        padding: 12,
        backgroundColor: AppColors.white,
        borderLeftWidth: 8,
        borderLeftColor: AppColors.primary,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        color: '#eee',
        flex: 1,
        paddingHorizontal: 16,
        marginHorizontal: 16,
        borderRadius: 8,
        justifyContent: 'space-between'
    },
    accordTitle: {
        fontSize: 20,
    },
    accordBody: {
        //padding: 12
    },
    textSmall: {
        fontSize: 16
    },
    seperator: {
        height: 12
    },
});
