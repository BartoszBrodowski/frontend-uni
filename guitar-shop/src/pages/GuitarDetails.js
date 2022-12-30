import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const GuitarDetails = () => {
	const guitarsList = useSelector((state) => state.guitarsList.value)
	const { id } = useParams();
	const guitar = guitarsList.find((guitar) => guitar.id === id)
	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<div className="flex flex-col items-center w-[1200px]">
				<h1 className="font-bold text-4xl mb-8">{guitar.name}</h1>
				<div className="grid grid-cols-3 items-center">
					<img className="h-78" src={require('../images/' + guitar.image)} alt="Guitar" />
					<div className="flex justify-center items-center border-l-2 border-r-2 border-orange-500 h-full">{guitar.description}</div>
					<div className="flex flex-col items-center justify-center p-4 h-full">
						<div className="text-green-700 font-bold text-2xl">Price: {guitar.price}</div>
						<button className="text-white bg-green-700 font-bold text-4xl p-2 rounded">Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GuitarDetails