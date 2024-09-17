import "@styles/components/home/home-clicker.scss"
import COIN_IMG from "@assets/home/coin.webp"
import FIRE_IMG from "@assets/home/fire.png"
import BITING_IMG from "@assets/home/biting-lip.png"
import ClickerAvatar from './avatar/clicker-avatar'
import { PiBatteryChargingVerticalFill } from 'react-icons/pi'
import { MdRocketLaunch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const HomeClicker = () => {
	const navigate = useNavigate()

	return (
		<div className="home__clicker">
			<div>
				<div className="clicker__amount--coin">
					<img className="coin__icon" src={COIN_IMG} />
					<p className="coin__amount">560,145,561</p>
				</div>
				<div className="clicker__statistic--user">
					<div className="statistic-item">
						<img className="item__icon" src={FIRE_IMG} />
						<p className="item__value">1,000</p>
					</div>
					<div className="statistic__point"></div>
					<div className="statistic-item">
						<img className="item__icon" src={BITING_IMG} />
						<p className="item__value">56</p>
					</div>
				</div>
			</div>
			<ClickerAvatar />
			<div className="clicker__user--stamin">
				<div className="stamin__content">
					<div className="content-item">
						<PiBatteryChargingVerticalFill size={20} color='#866F9B' />
						<p className="item__name">
							5000/5000
						</p>
					</div>
					<div className="content-item" onClick={() => navigate("/boost")}>
						<MdRocketLaunch size={20} color='#FEC64F' />
						<p className="item__name">
							Boost
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeClicker
