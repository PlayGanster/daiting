import { setSettingsOpen } from '@/redux/features/homeSlice'
import { useAppDispatch } from '@/redux/store'
import "@styles/components/home/home-settings.scss"
import { MdArrowForwardIos } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'

const HomeSettings = () => {
	const dispatch = useAppDispatch()

	return (
		<div className="home-settings__wrapper">
			<div className="wrapper__content">
				<div className="settings__header"><p className="header__name">Настройки</p><RxCross2 size={26} onClick={() => {dispatch(setSettingsOpen({data: false}))}} /></div>
				<div className="content__page">
					<ul className="page__leader--settings">
						<li className="settings-item">
							<div className="item__left">
								<p className="left__name">Язык приложения</p>
								<p className="left__value">Русский</p>
							</div>
							<MdArrowForwardIos size={24} />
						</li>
						<li className="settings-item">
							<div className="item__left">
								<p className="left__name">Любимый магазин</p>
								<p className="left__value">ЦУР</p>
							</div>
							<MdArrowForwardIos size={24} />
						</li>
						<li className="settings-item">
							<div className="item__left">
								<p className="left__name">Валюта</p>
								<p className="left__value">RUB</p>
							</div>
							<MdArrowForwardIos size={24} />
						</li>
					</ul>
					<ul className="page__check--settings">
						<li className="settings-item">
							<p className="item__name">Уведомления</p>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</li>
						<li className="settings-item">
							<p className="item__name">Помощь для разработки</p>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</li>
						<li className="settings-item">
							<p className="item__name">Анимации</p>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default HomeSettings
