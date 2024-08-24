import { RouterList, RouterListType } from '@/data/router/router'
import Layout from "@app/layout/layout"
import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const tg = window.Telegram.WebApp

const Router = () => {

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<Routes>
			{
				RouterList && RouterList.map((item: RouterListType, index: number) => (
					<Route path={item.path} key={index} element={<Suspense fallback={"loading..."}><Layout><item.page /></Layout></Suspense>} />
				))
			}
		</Routes>
	)
}

export default Router
