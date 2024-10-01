import "@styles/pages/home/home-header.scss"
import { IoMdSettings } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const HomeHeader = () => {

    const navigate = useNavigate();

  return (
    <div className="home-header">
        <div className="header-row">
            <div className="header__user">
                <div className="user__name">Пользователь</div>
                <span className="point-separator"></span>
                <div className="user__level">LOOSER</div>
            </div>
            <button className="default-button-small" onClick={() => navigate("/settings")}>
                <IoMdSettings size={20} />
            </button>
        </div>
        <div className="header-row">
            <p className="header__level">Looser</p>
            <p className="header__level">Medium</p>
        </div>
        <div className="header-row">
            <div className="header__progress"><div className="progress__bar"></div></div>
        </div>
    </div>
  )
}

export default HomeHeader
