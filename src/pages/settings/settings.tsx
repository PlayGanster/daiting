import SettingsBody from '@/components/settings/settings-body'
import SettingsHeader from '@/components/settings/settings-header'
import { useEffect } from 'react'

const tg = window.Telegram.WebApp

const SettingsPage = () => {

	useEffect(() => {
		tg.BackButton.show()
	}, [])

	return (
		<>
			<SettingsHeader />
			<SettingsBody />
		</>
	)
}

export default SettingsPage
