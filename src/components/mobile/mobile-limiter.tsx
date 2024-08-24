import "@styles/components/mobile/mobile-limiter.scss"

const MobileLimiter = (props: {children: JSX.Element[] | JSX.Element | string}) => {
	return (
		<section className="mobile-limiter__wrapper">
			<div className="wrapper__content">
				{props.children}
			</div>
		</section>
	)
}

export default MobileLimiter
