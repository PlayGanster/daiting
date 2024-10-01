import "@styles/pages/home/home-content.scss"
import FIRE_IMG from "@assets/img/home/fire.png"
import COIN_IMG from "@assets/img/home/coin.webp"
import BITING_IMG from "@assets/img/home/biting-lip.png"
import ContentClicker from "./content-clicker"
import { PiBatteryPlusVerticalFill } from "react-icons/pi"
import { IoIosRocket } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const HomeContent = () => {

    const navigate = useNavigate();

  return (
    <div className="home-content">
        <div className="content__data">
            <div className="data-coin">
                <img className="coin__img" src={COIN_IMG} />
                <p className="coin__amount">560,679,992</p>
            </div>
            <ul className="data-statistic">
              <li className="statistic-item">
                <img className="item__icon" src={FIRE_IMG}/>
                <p className="item__amount">1,000</p>
              </li>
              <span className="point-separator"></span>
              <li className="statistic-item">
                <img className="item__icon" src={BITING_IMG}/>
                <p className="item__amount">1,000</p>
              </li>
            </ul>
        </div>
        <ContentClicker />
        <div className="content__boost">
            <div className="boost-item">
                <PiBatteryPlusVerticalFill size={22} fill="#866F9B" />
                <p className="item__name">5000/5000</p>
            </div>
            <div className="boost-item" onClick={() => navigate("/boost")}>
                <IoIosRocket size={22} fill="#FEC64F" />
                <p className="item__name">Boost</p>
            </div>
        </div>
    </div>
  )
}

export default HomeContent
