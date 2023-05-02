import { StatusBar } from 'expo-status-bar';
import {Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, Linking} from 'react-native';
import {Header} from "./src/components/Header";
import {Form} from "./src/components/Form";
import {Btn} from "./src/components/Btn";
import {Login} from "./src/pages/Login";
import {Register} from "./src/pages/Register";
import {Start} from "./src/pages/Start";
import {Main} from "./src/pages/Main";
import React from 'react';

export default function App() {
  const token = ''
  return (
      <Start/>
  );
}
