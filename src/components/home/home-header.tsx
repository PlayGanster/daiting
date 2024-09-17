import "@styles/components/home/home-header.scss"
import { IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom'

const tg = window.Telegram

const HomeHeader = () => {
	return (
		<div className="home__header">
			<div className="header-row">
				<div className="header__user">
					<p className="user__name">
						{
							tg.WebApp.initDataUnsafe.user ? `${tg.WebApp.initDataUnsafe.user.first_name} ${tg.WebApp.initDataUnsafe.user.last_name}` : "Пользователь"
						}
					</p>
					<p className="user__point"></p>
					<p className="user__rang">
						NELLON
					</p>
				</div>
				<ul className="header__menu">
					<Link to="/settings"><li className="menu-item"><IoMdSettings size={22} /></li></Link>
				</ul>
			</div>
			<div className="header-row">
				<div className="header__row--rang">
					<p className="rang-item rang--this">Looser</p>
					<p className="rang-item rang--next">Medium</p>
				</div>
				<div className="header__rang--progress"><div className="progress__bar"></div></div>
			</div>
		</div>
	)
}

export default HomeHeader
