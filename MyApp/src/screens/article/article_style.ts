import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../shared/constants';
const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: height / 2,
  },
  scrollView: {
    backgroundColor: AppColors.white,
    marginBottom: 20,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.black,
    textTransform: 'uppercase',
  },
  author: {
    color: AppColors.black,
  },
  title: {
    fontSize: 18,
    color: AppColors.black,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
  recommendedStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: AppColors.black,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  titleItem: {
    flex: 1,
    fontWeight: '600',
    color: AppColors.black,
  },
  contentItem: {
    fontSize: 12,
  },
});
