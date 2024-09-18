export interface SettingsListType {
	id: number,
	name: string,
	value: string | null,
	active: boolean,
	data: any
}

export const SettingsList:SettingsListType[] = [
	{
		id: 1,
		name: "Язык приложения",
		value: null,
		active: false,
		data: [
			{
				id: 1,
				name: "Русский"
			}
		]
	}, {
		id: 2,
		name: "Тема приложения",
		value: null,
		active: false,
		data: [
			{
				id: 1,
				name: "Русский"
			}
		]
	}
]

export interface SettingsSwitchesType {
	id: number,
	name: string,
	active: boolean
}

export const SettingsSwitches: SettingsSwitchesType[] = [{
	id: 1,
	name: "Вибрация",
	active: false
}, {
	id: 2,
	name: "Отчет разработчикам",
	active: false
}]