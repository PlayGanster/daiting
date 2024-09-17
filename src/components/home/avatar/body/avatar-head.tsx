import { Circle, Ellipse } from 'react-konva'

const AvatarHead = () => {
	return (
		<>
			{/* Face */}
			<Ellipse
				x={innerWidth / 2}
				y={100}
				radiusX={50}
				radiusY={60}
				width={100}
				height={120}
				fill={'white'}
				stroke={'black'}
				strokeWidth={2}
			/>
			
			{/* Eyes */}
			<Circle
				x={innerWidth / 2 - 30}
				y={90}
				radius={10}
				fill={'black'}
			/>
			<Circle
				x={innerWidth / 2 + 30}
				y={90}
				radius={10}
				fill={'black'}
			/>
			
			{/* Nose */}
			<Ellipse
				x={innerWidth / 2}
				y={110}
				radiusX={10}
				radiusY={5}
				width={20}
				height={10}
				fill={'black'}
			/>
			
			{/* Mouth */}
			<Ellipse
				x={innerWidth / 2}
				y={130}
				radiusX={20}
				radiusY={5}
				width={40}
				height={10}
				fill={'black'}
			/>
		</>
	)
}

export default AvatarHead
