import "@styles/components/home/home-header.scss"
import { useState } from 'react'
import { FaBroom } from 'react-icons/fa'
import { GiClothes } from 'react-icons/gi'
import { IoIosSettings } from 'react-icons/io'
import { LuMenu } from 'react-icons/lu'

const tg = window.Telegram.WebApp

console.log(tg.initDataUnsafe)

const HeaderHome = () => {
	const [menu, setMenu] = useState<boolean>(false);

	return (
		<div className="home__header">
			<div className="header__row">
				<div className="header__profile">
					<p className="profile__level">Новичек</p>
					<p className="profile__name">{tg.initDataUnsafe.user ? `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}` : "Пользователь"}</p>
				</div>
				<div className="header__settings">
					<button className="settings__button btn" onClick={() => setMenu(!menu)}>
						<LuMenu size={24} />
					</button>
					<ul className={`settings__menu ${menu ? "--active" : ""}`}>
						<li className="menu-item btn"><FaBroom size={26} /></li>
						<li className="menu-item btn"><GiClothes size={26} /></li>
						<li className="menu-item btn"><IoIosSettings size={26} /></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default HeaderHome
