import HeaderPage from "./header-page"
import "@styles/shared.scss"

const PopupFull = (props: {name: string, content: JSX.Element | JSX.Element[] | string}) => {
  return (
    <div className="popup-full-wrapper">
        <div className="popup-full-content">
            <HeaderPage name={props.name} />
            <div className="popup__content">
                {
                    props.content
                }
            </div>
        </div>
    </div>
  )
}

export default PopupFull
