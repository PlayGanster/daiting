import { setSelectBlock } from '@/redux/features/homeSlice'
import { useAppDispatch } from '@/redux/store'
import "@styles/components/home/home-header.scss"
import { useState } from 'react'
import { FaBroom } from 'react-icons/fa'
import { GiClothes } from 'react-icons/gi'
import { IoIosSettings } from 'react-icons/io'

const tg = window.Telegram.WebApp

console.log(tg.initDataUnsafe)

const HeaderHome = () => {
	const [menu, setMenu] = useState([{id: 1, name: "Комната", active: true}, {id: 2, name: "Работа", active: false}])
	const dispatch = useAppDispatch()

	function selectMenu(id: number) {
		dispatch(setSelectBlock({data: id}))
		const copy = [...menu]
		copy.filter((item: any) => {
			if(item.id === id) item.active = true
			else item.active = false
		})
		setMenu(copy)
	}

	return (
		<div className="home__header">
			<div className="header__row">
				<div className="header__profile">
					<p className="profile__level">Новичек</p>
					<p className="profile__name">{tg.initDataUnsafe.user ? `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}` : "Пользователь"}</p>
				</div>
				<ul className="header__menu">
					<li className="menu-item btn"><FaBroom size={20} /></li>
					<li className="menu-item btn"><GiClothes size={20} /></li>
					<li className="menu-item btn"><IoIosSettings size={20} /></li>
				</ul>
			</div>
			<div className="header__row header__menu--block">
				{
					menu.map((item, index) => (
						<button key={index} onClick={() => selectMenu(item.id)} className={`header__button ${item.active ? "--active" : ""}`}>{item.name}</button>
					))
				}
			</div>
		</div>
	)
}

export default HeaderHome
