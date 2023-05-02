import {makeAutoObservable, configure} from "mobx";

interface IAuthStore {

    token?: string,
    user?: (userInput: string) => void,
    password?: (passInput: string) => void,
    Username?: string,
    Password?: string,
    errorMsg?: string,
    fromForm?: string,
    validateU?: (Username: string) => void,
    press: boolean,
    setPress: () => void,
    emailR: boolean,
    isEmailR: () => void,
    exit: () => void,

}

class AuthStore implements IAuthStore {

    // Данные входа

    fromForm = ''
    token = 'sff'
    Password = ''
    Username = ''
    errorMsg = ''
    dataU = ['admin', "mat"]
    dataP = ['admin', 'ebal']
    press = false
    eye = true

    // Данные регистрации


    emailR = false

    constructor() {
        makeAutoObservable(this)
    }

    // Методы входа

    user(userInput: string){
        this.Username = userInput
    }

    password(passInput: string){
        this.Password = passInput
    }

    auth(Password: string, Username: string){
        if(this.dataP.includes(Password.trim()) && this.dataU.includes(Username.trim())){
            this.token = 'kek'
            return this.token
        }

    }

    setPress(){
        this.press= !this.press
    }

    setEye(){
        this.eye = !this.eye
    }

    exit(){
        authStore.token = ''
        authStore.Username = ''
        authStore.Password = ''
    }
    // Методы регистрации

    isEmailR() {

    }

}

export const authStore = new AuthStore();

configure({
    enforceActions: "never",
})