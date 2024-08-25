import HeaderHome from '@/components/home/header-home'
import { useAppSelector } from '@/redux/store'

const Home = () => {
	const homeState = useAppSelector(state => state.home)

	function renderBlock() {
		if(homeState.select_block === 1){
			return (
				<div style={{width: "100%", height: "calc(100% - 80px)", backgroundImage: "url('https://bigfoto.name/uploads/posts/2022-01/1642453951_14-bigfoto-name-p-komnata-dlya-podrostka-v-svetlikh-tonakh-19.jpg')", backgroundSize: "cover"}}>
				</div>
			)
		}
		return (
			"Работа"
		)
	}

	return (
		<div style={{width: "100%", height: "100%"}}>
			<HeaderHome />
			{renderBlock()}
		</div>
	)
}

export default Home
