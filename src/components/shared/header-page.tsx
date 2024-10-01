import "@styles/shared.scss"

const HeaderPage = (props: {name: string}) => {
  return (
    <div className="header-page">
        <div className="page__name">
            {props.name}
        </div>
    </div>
  )
}

export default HeaderPage
