import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
} from "react-native";
import { Header } from "./src/components/Header";
import { Form } from "./src/components/Form";
import { Btn } from "./src/components/Btn";
import { Login } from "./src/pages/Login";
import { Register } from "./src/pages/Register";
import { Start } from "./src/pages/Start";
import { Main } from "./src/pages/Main";
import React from "react";
import store, {persistor} from "./src/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Start />
      </PersistGate>
    </Provider>
  );
}
