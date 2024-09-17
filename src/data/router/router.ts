import React from 'react'
import { BiSolidHomeHeart } from 'react-icons/bi'
import { BsChatHeartFill } from 'react-icons/bs'
import { FaTasks, FaUserFriends } from 'react-icons/fa'
// import { IoGameController } from 'react-icons/io5'
import { TbMapHeart } from 'react-icons/tb'

export interface RouterListType {
	id: number,
	page: any,
	active: boolean,
	name: string,
	icon: any,
	path: string
}

export interface RouterListTypeNo {
	id: number,
	page: any,
	path: string
}

const HomePage = React.lazy(() => import("@pages/home/home"))
const SettingsPage = React.lazy(() => import("@pages/settings/settings"))
const BoostPage = React.lazy(() => import("@pages/boost/boost"))


export const RouterListMenu: RouterListType[] = [
	{
		id: 1,
		page: HomePage,
		active: false,
		name: "Главная",
		icon: BiSolidHomeHeart,
		path: "/"
	},{
		id: 2,
		page: HomePage,
		active: false,
		name: "Друзья",
		icon: FaUserFriends,
		path: "/friends"
	},
	{
		id: 3,
		page: HomePage,
		active: false,
		name: "Чаты",
		icon: BsChatHeartFill,
		path: "/chats"
	},{
		id: 4,
		page: HomePage,
		active: false,
		name: "Задания",
		icon: FaTasks,
		path: "/tasks"
	},{
		id: 5,
		page: HomePage,
		active: false,
		name: "Карта",
		icon: TbMapHeart,
		path: "/map"
	}
]

export const RouterList: RouterListTypeNo[] = [
	{
		id: 1,
		page: HomePage,
		path: "/"
	},{
		id: 2,
		page: HomePage,
		path: "/friends"
	},
	{
		id: 3,
		page: HomePage,
		path: "/chats"
	},{
		id: 4,
		page: HomePage,
		path: "/tasks"
	},{
		id: 5,
		page: HomePage,
		path: "/map"
	},{
		id: 6,
		page: SettingsPage,
		path: "/settings"
	}, {
		id: 7,
		page: BoostPage,
		path: "/boost"
	}
]


// ,{
// 	id: 5,
// 	page: HomePage,
// 	active: false,
// 	name: "Одежда",
// 	icon: FaTshirt,
// 	path: "/wear"
// },{
// 	id: 6,
// 	page: HomePage,
// 	active: false,
// 	name: "Игры",
// 	icon: IoGameController,
// 	path: "/games"
// }