import { useState } from 'react';
import './Collection.css';
import { v4 as uuidv4 } from 'uuid';

const Collection = ({ collection, setCollection }) => {
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [color, setColor] = useState('');

	const setCollectionHandler = (e) => {
		const newGuitar = {
			id: uuidv4(),
			name: name,
			type: type,
			color: color,
		};
		setCollection((oldState) => [...oldState, newGuitar]);
		console.log(newGuitar);
	};

	const setNameHandler = (e) => {
		setName(e.target.value);
	};
	const setTypeHandler = (e) => {
		setType(e.target.value);
	};
	const setColorHandler = (e) => {
		setColor(e.target.value);
	};

	const deleteItemHandler = (id) => {
		const newCollection = collection.filter((el, itemIndex) => {
			return el.id !== id;
		});
		setCollection(newCollection);
	};

	return (
		<div className='collection-container'>
			<ul className='collection'>
				{collection.map((item, index) => {
					return (
						<li key={index} className='collection-item'>
							<div>{item.name}</div>
							<div>{item.type}</div>
							<div>{item.color}</div>
							{/* Wstawienie indexu do nawiasów powoduje nieusuwanie elementów */}
							<button type='button' onClick={() => deleteItemHandler(item.id)}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
			<div className='input-container'>
				<div>Add Guitar to collection</div>
				<div>
					<input type='text' placeholder='Name' onChange={setNameHandler} />
					<input type='text' placeholder='Type' onChange={setTypeHandler} />
					<input type='text' placeholder='Color' onChange={setColorHandler} />
					<button type='button' onClick={setCollectionHandler}>
						Add guitar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Collection;
