import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalDatabase {

    public storeString = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            // String saving error
            console.log(`Error caught while saving string ${value} at key ${key}. Error is ${e}`);
        }
    };

    public storeObject = async (key: string, value: Object) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            // Object saving error
            console.log(`Error caught while saving Object ${value} at key ${key}. Error is ${e}`);
        }
    };

    public getString = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // value previously stored
                return value;
            }
        } catch (e) {
            // Error reading string value
            console.log(`Error caught while loading string at key ${key}. Error is ${e}`);
        }
    };

    public getObject = async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // Error reading Object value
            console.log(`Error caught while loading Object at key ${key}. Error is ${e}`);
        }
    };
}