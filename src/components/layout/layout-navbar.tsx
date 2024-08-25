import { RouterList, RouterListType } from '@/data/router/router'
import "@styles/components/layout/layout-navbar.scss"
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LayoutNavbar = () => {
	const [router, setRouter] = useState<RouterListType[]>([]);
	const location = useLocation();
	let navigate = useNavigate();

	function getNotification(path: string) {
		switch(path) {
			case "/":
				const random: number = Math.floor(Math.random() * 2)
				return random;
			case "/map":
				const randoms: number = Math.floor(Math.random() * 2)
				return randoms;
			case "/friends":
				const randomss: number = Math.floor(Math.random() * 2)
				return randomss;
			case "/tasks":
				const randoma: number = Math.floor(Math.random() * 2)
				return randoma;
			case "/chats":
				const randomd: number = Math.floor(Math.random() * 2)
				return randomd;
		}
	}

	function renderNotify(notification: any){
		if(notification >= 1) return (<div className="item__notify"></div>)
		else return "";
	}

	useEffect(() => {
		const copy: RouterListType[] = [...RouterList]
		copy.filter((item: RouterListType) => {
			if(item.path === location.pathname) item.active = true
			else item.active = false
		})
		setRouter(copy)
	}, [location])

	return (
		<div className="layout__navbar--wrapper">
			<div className="navbar__content">
				{
					router.map((item: RouterListType, index: number) => {
						const notification = getNotification(item.path)
						return (
						<div key={index} className={`content-item ${item.active ? "--active" : ""}`} onClick={() => navigate(item.path)}>
							{renderNotify(notification)}
							<item.icon size={24} />
							<p className="item__name">{item.name}</p>
						</div>)
					})
				}
			</div>
		</div>
	)
}

export default LayoutNavbar