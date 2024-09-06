import ClickerHome from '@/components/home/clicker-home'
import HeaderHome from '@/components/home/header-home'

const Home = () => {

	return (
		<div className='scroll--novisible' style={{width: "100%", height: "100%",}}>
			<HeaderHome />
			<ClickerHome />
		</div>
	)
}

export default Home
