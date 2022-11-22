import { useParams } from 'react-router-dom';

const CollectionItem = ({ collection }) => {
	const params = useParams();
	const filtered = collection.filter((el) => {
		return el.id === params.id;
	});

	return (
		<div>
			{filtered.map((item) => {
				return null;
			})}
		</div>
	);
};

export default CollectionItem;
