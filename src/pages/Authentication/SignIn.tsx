import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { COLORS, SIZES, images, icons } from "../../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormInput from "../../components/FormInput";
import { observer } from "mobx-react-lite";
// import { CustomSwitcher } from "../../components/CustomSwitcher";
import TextButton from "../../components/TextButton";
import { Btn } from "../../components/Btn";
import { useIsRightPasswordQuery, useLoginMutation } from "../../api/api";
import { saveToStorage, saveTokenToStorage } from "../../store/auth/auth.helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { authSlice } from "../../store/auth/authSlice";

const SignIn = observer(({ navigation }: any) => {


  const [eye, setEye] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, {data, isError, error, isLoading}] = useLoginMutation()

  // const isPassword = useIsRightPasswordQuery()

  const {addUser} = authSlice.actions

  const dispatch = useAppDispatch()
  
  const onSubmit = async () => {
    const payload = {email, password}

    login(payload)
    
    if(data?.accessToken){
      const {accessToken, refreshToken} = data
      saveToStorage(data);
      dispatch(addUser(data))
    }
    return data
  }


  // Здесь будет валидация
  // const onChangeEmail = () => {
    
  // }

  // const onChangePassword = async () => {
  //   if(isPassword !== undefined) {
  //     setEye(isPassword)
  //   }
  //   setEye(false)
    
  // }

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}
    >
      <StatusBar hidden={false} barStyle={"dark-content"} />

      <KeyboardAwareScrollView>
        {/*Logo*/}
        <View
          style={{
            alignItems: "center",
            paddingTop: 24 * 3,
            marginBottom: 30,
          }}
        >
          <Image
            source={images.schedulelogo}
            resizeMode="contain"
            style={{
              width: 250,
              height: 57.1095571,
            }}
          />
        </View>

        {/*Text*/}

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: SIZES.padding * 2,
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h2,
              textAlign: "center",
            }}
          >
            Войдите в аккаунт
          </Text>
          <Text
            style={{
              fontSize: SIZES.body3,
              textAlign: "center",
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              paddingBottom: 30,
            }}
          >
            Мы вас ждали!
          </Text>
        </View>

        {/*Froms*/}

        <FormInput
          label="Email"
          placeholder=''
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.correct}
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == "" ? COLORS.gray : COLORS.green,
                }}
              />
            </View>
          }
          onChangeText={setEmail}
        />

        <FormInput
          label="Пароль"
          placeholder=''
          secureTextEntry={authStore.eye}
          onChangeText={setPassword}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 42,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => authStore.setEye()}
            >
              <Image
                source={eye ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/*Buttons and switcher*/}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: SIZES.padding,
            paddingLeft: SIZES.padding,
            paddingRight: SIZES.padding,
          }}
        >
          <CustomSwitcher />
          <TextButton
            label="Забыли пароль?"
            labelColor={COLORS.gray}
            buttonColor={COLORS.white}
          />
        </View>

        {/*Main btn*/}
        <View
          style={{
            paddingLeft: SIZES.padding,
            paddingRight: SIZES.padding,
          }}
        >
          <Btn
            title="Войти"
            color={COLORS.white}
            bcolor={COLORS.primary}
            onPress={onSubmit}
          />
        </View>

        {/*Sing Up*/}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.font,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.body3,
              color: COLORS.gray,
            }}
          >
            Еще нету аккаунта?
          </Text>
          <TextButton
            label=" Зарегистрируйся"
            labelStyles={{
              fontSize: SIZES.body3,
              color: COLORS.primary,
            }}
            buttonStyles={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: null,
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
});

export default SignIn;
