import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAsyncStorage = async (name: string) => {
  if (typeof AsyncStorage !== "undefined") {
    const jsonValue = await AsyncStorage.getItem(name);
    return jsonValue ? JSON.parse(jsonValue) : "null";
  }
  return null;
};
