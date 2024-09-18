import HomeClicker from '@/components/home/home-clicker'
import HomeHeader from '@/components/home/home-header'
import { useEffect } from 'react'

	const tg = window.Telegram.WebApp

const Home = () => {	

	useEffect(() => {
		tg.headerColor = "#06000E"
		tg.BackButton.hide()
	}, [])

	return (
		<>
			<HomeHeader />
			<HomeClicker />
		</>
	)
}

export default Home
