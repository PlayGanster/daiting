import "@styles/components/home/home-header.scss"
import { Avatar, Button, Text } from '@telegram-apps/telegram-ui'
import { AiOutlineSkin } from 'react-icons/ai'

const tg = window.Telegram.WebApp

console.log(tg.initDataUnsafe)

const HeaderHome = () => {
	return (
		<div className="home__header">
			<div className="header__row">
				<Button before={<AiOutlineSkin size={24} />} size='s'>Изменить скин</Button>
				<Text style={{color: "black"}} weight='2'>{tg.initDataUnsafe.user?.first_name}</Text>
			</div>
		</div>
	)
}

export default HeaderHome
