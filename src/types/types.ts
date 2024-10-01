import { FC } from "react"

export interface RouterNavBarType {
    id: number,
    path: string,
    icon: any,
    name: string,
    active: boolean
}

export interface RouterType {
    id: number,
    path: string,
    component: FC
}

export interface CoinNumbersType {
    id: number,
    content: number,
    x_position: number,
    y_position: number
}

export interface SettingsListSelectType {
    id: number,
    name: string,
    value: string
}

export interface SettingsListSelectDataPopupType {
    data: SettingsListSelectPopupType[],
    id_select: number
}

export interface SettingsListSelectPopupType {
    id: number,
    value: string,
}

export interface SettingsListSwitchesType {
    id: number,
    name: string,
    active: boolean
}

export interface BoostListType {
    id: number,
    name: string,
    count: number,
    img: string,
    show_count: boolean,
    price: string
}
