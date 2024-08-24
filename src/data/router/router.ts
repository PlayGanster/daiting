import React from 'react'
import { BiSolidHomeHeart } from 'react-icons/bi'
import { BsChatHeartFill } from 'react-icons/bs'
import { FaTasks, FaUserFriends } from 'react-icons/fa'
import { TbMapHeart } from 'react-icons/tb'

export interface RouterListType {
	id: number,
	page: any,
	active: boolean,
	name: string,
	icon: any,
	path: string
}

const HomePage = React.lazy(() => import("@pages/home/home"))


export const RouterList: RouterListType[] = [
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
	},{
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