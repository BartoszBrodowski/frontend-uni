import { useParams, Link } from 'react-router-dom';
import './CollectionTypeItems.css';

const CollectionTypeItems = ({ collection }) => {
	const params = useParams();
	const filteredCollection = collection.filter((el) => {
		return el.type.toLowerCase() === params.type.toLowerCase();
	});
	return (
		<div className='items-list-container'>
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
			<div>
				<Link to="/guitars">Go back to Collection</Link>
			</div>
		</div>
	);
};

export default CollectionTypeItems;
