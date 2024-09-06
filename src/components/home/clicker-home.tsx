import "@styles/components/home/home-clicker.scss"
import { TbCoinFilled } from 'react-icons/tb'
import ClickerAvatar from './clicker-avatar'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import { IoRocket } from 'react-icons/io5'

const ClickerHome = () => {
	return (
		<div className="home__clicker">
			<div className="clicker__header">
				<TbCoinFilled color='green' size={36} />
				<p className="header__amount">1,000,000</p>
			</div>
			<div className="clicker__player">
				<ClickerAvatar />
			</div>
			<div className="clicker__footer">
				<div className="footer__wrapper">
					<div className="wrapper__energy wrapper-item">
						<MdEnergySavingsLeaf size={26} color='#F5B64D' />
						<div className="energy__amount">
							<p className="amount__text--all">5000/</p>
							<p className="amount__text--this">5000</p>
						</div>
					</div>
					<div className="wrapper__boost wrapper-item">
						<p className="boost__name">Улучшить</p>
						<IoRocket size={26} color='#56C6F8' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ClickerHome
