import React, { useEffect, useState, memo, useCallback, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
import { Btn } from "../components/Btn";
import { observer } from "mobx-react-lite";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import Menu from "../components/Menu";
import axios from "axios";
import Post from "../components/Post";
import Container from "../components/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { Agenda } from "react-native-calendars";
import { ScheduleItem } from "../components/ScheduleItem";

interface Item {
  pairStart: string;
  pairNum: string;
  pairEnd: string;
  pairTitle: string;
  teacher: string;
  auditory: string;
  pairType: string;
  name?: string;
  height?: number;
  day?: string;
}

export const Main = () => {
  const dispatch = useAppDispatch();

  const [items, setItems] = useState<{ [key: string]: any }>({
    "2023-05-15": [
      {
        pairStart: "16:30",
        pairEnd: "18:05",
        pairNum: "1",
        pairTitle: "Организация и управление предприятиями",
        teacher: "Исаков А.В.",
        auditory: "ауд.: 501; Б22/2",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "18:15",
        pairNum: "1",
        pairEnd: "19:50",
        pairTitle: "Высшая математика",
        teacher: "Мкртычян П.З.",
        auditory: "ауд.: 700; Б22/1",
        pairType: "Лекция",
      },
    ],
    "2023-05-16": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-17": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-18": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-19": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-20": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-21": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-22": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-23": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-24": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
    "2023-05-25": [
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "10:30",
        pairNum: "1",
        pairEnd: "12:00",
        pairTitle: "Элективные дисциплины по физической культуре и спорту",
        teacher: "Сапсаева Т.В.; Винтовкина Н.Е.; Полищук Н.В.",
        auditory: "ауд.: Спортивные площадки",
        pairType: "Практические занятия",
      },
      {
        name: "kek",
        height: 2,
        day: "amogus",
        pairStart: "13:00",
        pairNum: "2",
        pairEnd: "14:35",
        pairTitle: "Физика",
        teacher: "Кузенов С.Р.",
        auditory: "ауд.: 317; Б22/1",
        pairType: "Практические занятия",
      },
    ],
  });

  // const renderItem: any = useMemo((items: any) => {
  //   return <ScheduleItem item={items} />;
  // }, [items]);

  // один из вариантов для отображения одного предмета
  // const renderItem = (item: any) => {
  //   return (
  //     <TouchableOpacity style={styles.item}>
  //       <View style ={{
  //         flexDirection: 'row',

  //       }}>
  //         <View style={{flexDirection: 'column'}}>
  //             <Text style={{fontSize:20}}>{item.pairNum}</Text>
  //             <Text>{item.pairStart}</Text>
  //             <Text>{item.pairEnd}</Text>
  //         </View>

  //         <View style={{
  //           flexDirection: 'column',
  //           height: "100%",
  //           marginLeft: 10,
  //           borderColor:'red',
  //           borderBottomWidth:1,
  //           borderTopWidth:1
  //         }}>
  //             <Text style={{fontSize:20}}>{item.pairTitle}</Text>
  //             <Text>{item.auditory}</Text>
  //             <Text>{item.pairType}</Text>
  //             <Text style={{fontSize: 7}}>{item.teacher}</Text>

  //           </View>

  //       </View>

  //       <Text>{item.pairTitle}</Text>
  //     </TouchableOpacity>
  //   );
  // };

  // Код для подгрузки данных
  // if (isLoading) {
  //   return (
  //     <SafeAreaView
  //       style={{
  //         alignItems: "center",
  //         justifyContent: "center",
  //         marginTop: 50,
  //       }}
  //     >
  //       <ActivityIndicator size={"large"} />
  //     </SafeAreaView>
  //   );
  // }

  const renderDay = (day: any, item: any) => {
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>{day.day}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Agenda
        
        selected="2023-05-15"
        items={items}
        renderItem={ScheduleItem}
        // renderDay={renderDay}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  all: {
    backgroundColor: "white",
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  agendaContainer: {
    paddingBottom: 10, // Дополнительный отступ для последнего элемента
  },
  dayContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    // Другие стили для числа
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },

  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
  cn: {
    flex: 1,
    paddingTop: 102,
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 5,
    paddingHorizontal: 18,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    gap: 2,
  },
  footer: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  counter: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  burger: {
    height: 50,
    width: 50,
  },
  icon: {
    marginTop: -50,
    marginRight: 335,
  },
});
