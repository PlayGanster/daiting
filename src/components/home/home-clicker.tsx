import "@styles/components/home/home-clicker.scss"
import COIN_IMG from "@assets/home/coin.webp"
import ClickerAvatar from './clicker-avatar'
import { PiBatteryChargingVerticalFill } from 'react-icons/pi'
import { MdRocketLaunch } from 'react-icons/md'

const HomeClicker = () => {
	return (
		<div className="home__clicker">
			<div className="clicker__amount--coin">
				<img className="coin__icon" src={COIN_IMG} />
				<p className="coin__amount">560,145,561</p>
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
					<div className="content-item">
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
