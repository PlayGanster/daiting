import { BoostListBoost, BoostListLeader } from "@/data/boost/boost-data"
import { BoostListType } from "@/types/types"
import "@styles/pages/boost/boost-content.scss"

const BoostContent = () => {
  return (
    <div className="boost-content">
        <p className="content-subname">Основные бусты</p>
        <div className="content-list">
            {
                BoostListLeader.map((el:BoostListType, index: number) => (
                    <div className="list-item" key={index}>
                        <img src={el.img} className="item__img" />
                        <div className="item__info">
                            <p className="info__name">{el.name}</p>
                            {
                                el.show_count ? (<p className="info__count">3/{el.count}</p>) : ""
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        <p className="content-subname">Прокачка</p>
        <div className="content-list">
            {
                BoostListBoost.map((el:BoostListType, index: number) => (
                    <div className="list-item" key={index}>
                        <img src={el.img} className="item__img" />
                        <div className="item__info">
                            <p className="info__name">{el.name}</p>
                            {
                                el.show_count ? (<p className="info__count">3/{el.count}</p>) : (<p className="info__count">{el.price}</p>)
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BoostContent
