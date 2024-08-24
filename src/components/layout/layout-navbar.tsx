import { RouterList, RouterListType } from '@/data/router/router'
import { Tabbar } from '@telegram-apps/telegram-ui'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LayoutNavbar = () => {
	const [router, setRouter] = useState<RouterListType[]>([]);
	const location = useLocation();
	let navigate = useNavigate();

	useEffect(() => {
		const copy: RouterListType[] = [...RouterList]
		copy.filter((item: RouterListType) => {
			if(item.path === location.pathname) item.active = true
			else item.active = false
		})
		setRouter(copy)
	}, [location])

	return (
		<Tabbar style={{position: "fixed", bottom: 0, maxWidth: 1024, width: "100%", margin: "0 auto", borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
			{
				router.map((item: RouterListType, index: number) => (
					<Tabbar.Item key={index} text={item.name} selected={item.active} onClick={() => navigate(item.path)}>
						<item.icon size={24}/>
					</Tabbar.Item>
				))
			}
		</Tabbar>
	)
}

export default LayoutNavbar
{/* <div className="layout-navbar">
			
</div> */}