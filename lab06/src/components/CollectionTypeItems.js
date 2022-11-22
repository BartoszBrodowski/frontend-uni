import { useParams } from 'react-router-dom';
import './CollectionTypeItems.css';

const CollectionTypeItems = ({ collection }) => {
	const params = useParams();
	const filteredCollection = collection.filter((el) => {
		return el.type.toLowerCase() === params.type;
	});
	console.log(params.type);
	return (
		<div>
			<ul className='items-list'>
				{filteredCollection.map((item, index) => {
					return (
						<li className='list-item' key={index}>
							<div>{item.name}</div>
							<div>{item.color}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CollectionTypeItems;
