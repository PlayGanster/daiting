import LayoutNavbar from '@/components/layout/layout-navbar'
import "@styles/layout/layout.scss"

const Layout = (props: {children: JSX.Element | JSX.Element[] | string}) => {
	return (
		<div className="layout">
			<div className="layout__content">
				{props.children}
			</div>
			<LayoutNavbar />
		</div>
	)
}

export default Layout
