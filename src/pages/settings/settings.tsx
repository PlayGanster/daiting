import SettingsBody from '@/components/settings/settings-body'
import SettingsHeader from '@/components/settings/settings-header'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const tg = window.Telegram.WebApp

const SettingsPage = () => {

	const navigate = useNavigate();

	useEffect(() => {
		tg.BackButton.show()
	}, [])

	tg.BackButton.onClick(() => navigate("/"))

	return (
		<>
			<SettingsHeader />
			<SettingsBody />
		</>
	)
}

export default SettingsPage
