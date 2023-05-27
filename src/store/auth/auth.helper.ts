import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAsyncStorage } from "../../utils/async-storage";
import { IUserResponse } from "../../api/user/user.interface";

import Cookies from 'js-cookie'
import { ITokens } from "./auth.interface";


export const getAccessToken = () => {
  const accessToken = getAsyncStorage("token");
  return accessToken;
};

export const isAuthenticated = async() => {
    try {
        const token = await AsyncStorage.getItem('token')
        if(token !== null) return false
        return true

    } catch (e){
      console.log(
        `Ошбика при адалении токенка ${e}`
      )
    }
}


export const saveTokenToStorage = (tokens: ITokens) => {
    Cookies.set('accessToken', tokens.accessToken)
    Cookies.set('refreshToken', tokens.refreshToken)
    AsyncStorage.setItem('token', JSON.stringify(tokens.accessToken))
}

export const saveToStorage = (data: IUserResponse) => {
  const {accessToken, refreshToken} = data
  saveTokenToStorage({accessToken, refreshToken})
  AsyncStorage.setItem('user', JSON.stringify(data.email))

}


export const logout = async() => {
  try {
      await AsyncStorage.removeItem('token')
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
  } catch (e) {
    console.log(e)
  }
}


export const isToken = async() => {

  const token: any = await AsyncStorage.getItem('token')
  console.log(token)
  if(token){
    return token
  }
  if(token === null){
    const str = ''
    return str
  }
}