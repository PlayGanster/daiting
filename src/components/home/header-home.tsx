import "@styles/components/home/home-header.scss"
import { Avatar, Button, Text } from '@telegram-apps/telegram-ui'
import { AiOutlineSkin } from 'react-icons/ai'

const tg = window.Telegram.WebApp

const HeaderHome = () => {
	return (
		<div className="home__header">
			<div className="header__row">
				<Button before={<AiOutlineSkin size={24} />} size='s'>Изменить скин</Button>
				<div style={{display: "flex", gap: 10, alignItems: "center"}}>
					<Avatar size={40} src={tg.initDataUnsafe.user?.photo_url}/>
					<Text style={{color: "black"}} weight='2'>{tg.initDataUnsafe.user?.username}</Text>
				</div>
			</div>
		</div>
	)
}

export default HeaderHome
