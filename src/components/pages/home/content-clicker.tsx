import "@styles/pages/home/content-clicker.scss"
import CARD_IMG from "@assets/img/home/identification-card.png"
import FACE_IMG from "@assets/img/home/face.png"
import WEAR_IMG from "@assets/img/home/wear.png"
import SHOE_IMG from "@assets/img/home/shoe.png"
import CART_IMG from "@assets/img/home/cart.png"
import ClickerCoin from "./clicker-coin"

const ContentClicker = () => {
  return (
    <div className="content__clicker">
      <ul className="clicker__menu">
        <li className="menu-item">
            <img className="item__img" src={CARD_IMG} />
        </li>
        <li className="menu-item">
            <img className="item__img" src={FACE_IMG} />
        </li>
        <li className="menu-item">
            <img className="item__img" src={WEAR_IMG} />
        </li>
        <li className="menu-item">
            <img className="item__img" src={SHOE_IMG} />
        </li>
        <li className="menu-item">
            <img className="item__img" src={CART_IMG} />
        </li>
      </ul>
      <div className="clicker__person">
        <ClickerCoin
        canIClickPlease={true}
        sleep={false}
        funMode={false}
        clickValue={1}
        cooldown={0}
        handleClick={() => {/*nothing*/}}/>
      </div>
    </div>
  )
}

export default ContentClicker
