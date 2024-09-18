import "@styles/components/settings/list-select.scss"

const ListSelect = (props: {name?: string, data?: any}) => {
	return (
		<div className="list-select__wrapper">
			<div className="wrapper__content">
				{props.name}
			</div>
		</div>
	)
}

export default ListSelect
