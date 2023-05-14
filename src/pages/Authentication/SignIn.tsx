import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { COLORS, SIZES, images, icons } from "../../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormInput from "../../components/FormInput";
import { authStore } from "../../store/authStore";
import { observer } from "mobx-react-lite";
import { CustomSwitcher } from "../../components/CustomSwitcher";
import TextButton from "../../components/TextButton";
import { Btn } from "../../components/Btn";

const SignIn = observer(({ navigation }: any) => {
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
          placeholder=""
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
                    authStore.Username == "" ? COLORS.gray : COLORS.green,
                }}
              />
            </View>
          }
          onChangeText={(text: string) => {
            authStore.user(text);
          }}
        />

        <FormInput
          label="Пароль"
          placeholder=""
          secureTextEntry={authStore.eye}
          onChangeText={(text: string) => authStore.password(text)}
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
                source={authStore.eye ? icons.eye : icons.eye_close}
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
            onPress={() =>
              authStore.auth(authStore.Password, authStore.Username)
            }
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
