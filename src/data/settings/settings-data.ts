import { SettingsListSelectDataPopupType, SettingsListSelectPopupType, SettingsListSelectType, SettingsListSwitchesType } from "@/types/types";

export const SettingsListSelect: SettingsListSelectType[] = [
    {
        id: 1,
        name: "Язык приложения",
        value: "Русский"
    },
    {
        id: 2,
        name: "Тема приложения",
        value: "Темная"
    }
]

const SettingsListSelectPopupLanguage: SettingsListSelectPopupType[] = [
    {
        id: 1,
        value: "Русский"
    },
    {
        id: 2,
        value: "Английский"
    }
]

const SettingsListSelectPopupTheme: SettingsListSelectPopupType[] = [
    {
        id: 1,
        value: "Темная",
    },
    {
        id: 2,
        value: "Светлая"
    }
]

export const SettingsListSelectDataPopup: SettingsListSelectDataPopupType[] = [
    {
        data: SettingsListSelectPopupLanguage,
        id_select: 1
    },
    {
        data: SettingsListSelectPopupTheme,
        id_select: 2
    }
]

export const SettingsListSwitches: SettingsListSwitchesType[] = [
    {
        id: 1,
        name: "Вибрация",
        active: true
    }, {
        id: 2,
        name: "Отчет для разработки",
        active: false
    }
]
