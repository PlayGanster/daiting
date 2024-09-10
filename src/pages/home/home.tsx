import HomeClicker from '@/components/home/home-clicker'
import HomeHeader from '@/components/home/home-header'
import HomeSettings from '@/components/home/home-settings'
import { useAppSelector } from '@/redux/store'

const Home = () => {
	const home = useAppSelector(state => state.home)

	return (
		<div style={{width: "100%", height: "100%", position: "relative"}}>
			<HomeHeader />
			<HomeClicker />
			{home.settings_open ? (<HomeSettings />) : ""}
		</div>
	)
}

export default Home
