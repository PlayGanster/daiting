// import { Layer, Stage } from 'react-konva'
// import AvatarHead from './body/avatar-head'
import CARD_IMG from "@assets/home/identification-card.png"
import FACE_IMG from "@assets/home/face.png"
import WEAR_IMG from "@assets/home/wear.png"
import SHOE_IMG from "@assets/home/shoe.png"
import CART_IMG from "@assets/home/cart.png"
import "@styles/components/home/clicker-avatar.scss"

const ClickerAvatar = () => {
	return (
		<div className="avatar__wrapper">
			<div className="wrapper__content">
				<ul className="content-menu">
					<li className="menu-item">
						<img className="item__icon" src={CARD_IMG} />
					</li>
					<li className="menu-item">
						<img className="item__icon" src={FACE_IMG} />
					</li>
					<li className="menu-item">
						<img className="item__icon" src={WEAR_IMG} />
					</li>
					<li className="menu-item">
						<img className="item__icon" src={SHOE_IMG} />
					</li>
					<li className="menu-item">
						<img className="item__icon" src={CART_IMG} />
					</li>
				</ul>
				<div>
					Avatar
				</div>
			</div>
		</div>
		// <Stage width={window.innerWidth} height={window.innerHeight}>
		// 	<Layer>
		// 		<AvatarHead />
		// 	</Layer>
		// </Stage>
	)
}

export default ClickerAvatar
