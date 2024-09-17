import { RouterListMenu, RouterListType } from '@/data/router/router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "@styles/components/layout/layout-navbar.scss"

const LayoutNavbar = () => {
	const [menu, setMenu] = useState<RouterListType[]>([]);

	useEffect(() => {
		const copy: RouterListType[] = [...RouterListMenu];
		copy.filter((item: RouterListType) => {
			if(item.path === location.pathname) item.active = true
			else item.active = false
		})
		setMenu(copy)
	}, [location.pathname])

	return (
		<div className="navbar__wrapper">
			<div className="wrapper__content">
				{
					menu && menu.map((item: RouterListType, index: number) => (
						<Link key={index} to={item.path}>
							<div className={`content-item ${item.active ? "--active" : ""}`}>
								<item.icon size={22} />
								<p className="item__name">{item.name}</p>
							</div>
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default LayoutNavbar
