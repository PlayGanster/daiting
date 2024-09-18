import { SettingsList, SettingsListType } from '@/data/router/router-settings'
import { useEffect, useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import "@styles/components/settings/settings-body.scss"

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

	return (
		<div className="settings-body">
			<div className="body__list">
				{
					list && list.map((el:SettingsListType, index: number) => (
						<div className="list-item" key={index}>
							<div className="item__left">
								<p className="left__name">{el.name}</p>
								<p className="left__value">{el.value}</p>
							</div>
							<MdOutlineArrowForwardIos size={28} />
						</div>
					))
				}
			</div>
		</div>
	)
}

export default SettingsBody
