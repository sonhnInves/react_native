import {StyleSheet} from 'react-native';
import {AppColors} from '../../shared/constants';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    borderColor: AppColors.white,
    borderWidth: 1,
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: AppColors.white,
  },
});
