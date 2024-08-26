import "@styles/components/home/home-clicker.scss"
import { FaAngleDoubleUp } from 'react-icons/fa'
import { SlEnergy } from 'react-icons/sl'
import { TbCoinFilled } from 'react-icons/tb'

const ClickerHome = () => {
	return (
		<div className="home__clicker">
			<div className="clicker__header">
				<TbCoinFilled color='green' size={36} />
				<p className="header__amount">1,000,000</p>
			</div>
			<div className="clicker__player">
				PLAYER
			</div>
			<div className="clicker__footer">
				<div className="footer__energy">
					<SlEnergy size={22} />
					<p className="energy__amount">5000 / 5000</p>
				</div>
				<div className="footer__boost">
					<FaAngleDoubleUp size={22} />
					<p className="boost__name">Улучшить</p>
				</div>
			</div>
		</div>
	)
}

export default ClickerHome
