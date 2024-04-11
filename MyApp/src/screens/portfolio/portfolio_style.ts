import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordContainer: {
    paddingBottom: 4,
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
    justifyContent: 'space-between',
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    //padding: 12
  },
  textSmall: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.black,
    marginBottom: 16,
  },
  seperator: {
    height: 12,
  },
  border: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: AppColors.textField,
    padding: 8,
  },
  box: {
    alignItems: 'center',
    backgroundColor: AppColors.black,
    paddingVertical: 8,
    marginBottom: 8,
    width: Dimensions.get('window').width - 70 * 2,
  },
  title_in_box: {
    color: AppColors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  content: {
    color: AppColors.primary,
    fontSize: 16,
  },
});
