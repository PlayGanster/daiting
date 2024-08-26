import "@styles/components/home/home-header.scss"
import { GiClothes } from 'react-icons/gi'
import { IoIosSettings } from 'react-icons/io'

const tg = window.Telegram.WebApp

console.log(tg.initDataUnsafe)

const HeaderHome = () => {
	return (
		<div className="home__header">
			<div className="header__row">
				<div className="header__profile">
					<p className="profile__level">Новичек</p>
					<p className="profile__name">{tg.initDataUnsafe.user ? `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}` : "Пользователь"}</p>
				</div>
				<ul className="header__menu">
					<li className="menu-item btn"><GiClothes size={20} /></li>
					<li className="menu-item btn"><IoIosSettings size={20} /></li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderHome
