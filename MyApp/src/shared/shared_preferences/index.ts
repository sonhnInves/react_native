import AsyncStorage from '@react-native-async-storage/async-storage';
export const AppString = {
  TOKEN: 'Token',
};

const set = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    AsyncStorage.setItem(key, serializedValue);
  } catch (error) {
    throw new Error('store serialization failed');
  }
};
const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    throw new Error('get deserialization failed');
  }
};

const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Remove Token ${AsyncStorage.removeItem(key)}`);
  } catch (exception) {
    throw new Error('remove deserialization failed');
  }
};

export const LocalStorage = {
  get,
  set,
  removeItem,
};
