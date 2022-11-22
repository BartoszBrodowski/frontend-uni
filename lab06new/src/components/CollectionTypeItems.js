import { useParams } from 'react-router-dom';

const CollectionTypeItems = ({ collection }) => {
	const { type } = useParams();
	const filtered = collection.filter((el) => el.type == JSON.stringify(type));
	return (
		<div>
			<ul>
				{filtered.map((item, index) => {
					return <li>{item.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default CollectionTypeItems;
