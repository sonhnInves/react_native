import {StyleSheet} from 'react-native';
import {AppColors} from '../../shared/constants';
interface Style {
  color: string;
  fontSize: number;
}
export const homeStyle = (
  color: string = AppColors.primary,
  fontSize: number = 22,
) =>
  StyleSheet.create({
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 75,
    },
    text: {
      flex: 1,
      fontWeight: '500',
      marginLeft: 8,
      fontSize: 20,
      color: AppColors.white,
    },
    container: {
      flex: 1,
    },
    image: {
      justifyContent: 'center',
    },
    textHeader: {
      fontSize: fontSize,
      color: color,
      fontWeight: '400',
      textAlign: 'center',
    },
    box: {
      flex: 1,
      backgroundColor: '#202020',
      alignItems: 'center',
      paddingVertical: 8,
    },
    space: {
      width: 16,
    },
  });
