import ListSelect from '@/components/settings/list/list-select'

export interface SettingsListType {
	id: number,
	name: string,
	component: any,
	value: string | null
}

export const SettingsList:SettingsListType[] = [
	{
		id: 1,
		name: "Язык приложения",
		component: ListSelect,
		value: null,
	}, {
		id: 2,
		name: "Тема приложения",
		component: ListSelect,
		value: null
	}
]