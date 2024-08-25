import "@styles/components/home/home-header.scss"

const tg = window.Telegram.WebApp

console.log(tg.initDataUnsafe)

const HeaderHome = () => {
	return (
		<div className="home__header">
			<div className="header__row">
			</div>
		</div>
	)
}

export default HeaderHome
