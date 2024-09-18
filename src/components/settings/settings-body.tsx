import { SettingsList, SettingsListType, SettingsSwitches, SettingsSwitchesType } from '@/data/router/router-settings'
import { useEffect, useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import "@styles/components/settings/settings-body.scss"
import ListSelect from './list/list-select'

const SettingsBody = () => {
	const [list, setList] = useState<SettingsListType[]>([])

	useEffect(() => {
		const copy = [...SettingsList]
		const value = [{
			id_settings: 1,
			value: "Русский"
		}, {
			id_settings: 2,
			value: "Темная"
		}]
		copy.filter((el: SettingsListType) => {
			const id: number = el.id
			value.filter((value) => {
				if(id === value.id_settings) {
					el.value = value.value
				}
			})
		})
		setList(copy)
	}, [])

	function selectList(id: number) {
		const copy = [...list];
		copy.filter((el:SettingsListType) => {
			if(el.id === id) {
				el.active = true
			}else {
				el.active = false
			}
		})
		setList(copy)
	}

	return (
		<div className="settings-body">
			<div className="body__list">
				{
					list && list.map((el:SettingsListType, index: number) => (
						<>
						<div className="list-item" key={index} onClick={() => selectList(el.id)}>
							<div className="item__left">
								<p className="left__name">{el.name}</p>
								<p className="left__value">{el.value}</p>
							</div>
							<MdOutlineArrowForwardIos size={28} />
						</div>
						{el.active ? (<ListSelect name={el.name} data={el.data} />) : ""}
						</>
					))
				}
			</div>
			<div className="body__switches">
				{
					SettingsSwitches && SettingsSwitches.map((el:SettingsSwitchesType, index: number) => (
						<div className="switches-item"><p className="item__name">{el.name}</p><div style={{display: "flex", alignItems: "center"}}><input type="checkbox" id={el.name} key={index}/><label htmlFor={el.name}>{el.name}</label></div></div>
					))
				}
			</div>
		</div>
	)
}

export default SettingsBody
