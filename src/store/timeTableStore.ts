import {configure, makeAutoObservable} from "mobx";

interface IMenuStore{
    data: Array<any>,
}

class TimeTableStore {

    data = [
        {
            timeStart: '10:00',
            timeEnd: '11:30',
            format: 'Лекции',
            subject: 'Математика',
            nameTeacher: 'Сорокин Иван Артемович',
            adress: 'ауд. 120/1, просп. Большевиков, 22, корп. 1',
        },
        {
            timeStart: '10:00',
            timeEnd: '11:30',
            format: 'Практическое занятие',
            subject: 'Математика',
            nameTeacher: 'Сорокин Иван Артемович',
            adress: 'ауд. 120/1, просп. Большевиков, 22, корп. 1',
        }
]

    constructor() {
        makeAutoObservable(this)
    }

    

}

export const timeTableStore = new TimeTableStore();
configure({
    enforceActions: "never",
})