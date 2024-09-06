import "@styles/components/home/home-header.scss"
import { FaUserAstronaut } from 'react-icons/fa'
import { GiClothes } from 'react-icons/gi'
import { IoIosSettings } from 'react-icons/io'

const tg = window.Telegram.WebApp

console.log(tg.initDataUnsafe)

const HeaderHome = () => {
	return (
		<div className="home__header">
			<div className="header__row">
				<div className="header__profile">
					<div className="profile__icon">
						<FaUserAstronaut size={20} />
					</div>
					<p className="profile__name">{tg.initDataUnsafe.user ? `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}` : "Пользователь"}</p>
				</div>
				<ul className="header__menu">
					<li className="menu-item btn"><GiClothes size={20} /></li>
					<li className="menu-item btn"><IoIosSettings size={20} /></li>
				</ul>
			</div>
			<div className="header__row">
				<div className="header__rang">
					<p className="rang__this">Новичок</p>
					<p className="rang__next">Продвинутый</p>
				</div>
				<div className="header__rang--progress">
					<div className="progress__bar"></div>
				</div>
			</div>
		</div>
	)
}

export default HeaderHome
