import { BoostListType } from "@/types/types";

export const BoostListLeader: BoostListType[] = [
    {
        id: 1,
        name: "Полная энергия",
        count: 3,
        img: "https://emojisup.org/images/emoji/apple/ios-17-4/battery@2x.png",
        show_count: true,
        price: "2 Million"
    },{
        id: 2,
        name: "Ракета, супер буст",
        count: 3,
        img: "https://emojisup.org/images/emoji/apple/ios-17-4/rocket@2x.png",
        show_count: true,
        price: "3 Million"
    }
]

export const BoostListBoost: BoostListType[] = [
    {
        id: 1,
        name: "Энергия",
        count: 3,
        img: "https://emojisup.org/images/emoji/apple/ios-17-4/battery@2x.png",
        show_count: false,
        price: "2 Million"
    },{
        id: 2,
        name: "Клик",
        count: 3,
        img: "https://emojisup.org/images/emoji/apple/ios-17-4/hand-with-fingers-splayed@2x.png",
        show_count: false,
        price: "3 Million"
    }
]
