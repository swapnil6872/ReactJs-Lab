import { atom, selector } from "recoil";

export const counterAtom = atom({
    default:0,
    key:"counter"
})

export const evenSelector = selector({
    key:"isEvenSelector",
    get:function({get}){
        const currtCount = get(counterAtom);
        const isEven= (currtCount % 2 == 0);
        return isEven;
    }
})