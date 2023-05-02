import {configure, makeAutoObservable} from "mobx";

interface IMenuStore{
    pressBurger?: boolean,
    data?: Array<any>,
    setData?: ()=> void,
}

class MenuStore {

    data = [{
        name: 'kek',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1028.jpg',
        info: 'keklol',
        id: 11212
    }]

    pressBurger = false

    constructor() {
        makeAutoObservable(this)
    }

    setPressBurger(){
        this.pressBurger = !this.pressBurger
    }
    setData(newdata: Array<any>){
        this.data = newdata
    }

}

export const menuStore = new MenuStore();
configure({
    enforceActions: "never",
})