import { useParams, Link } from 'react-router-dom';

const CollectionItem = ({ collection }) => {
    const params = useParams();
    const guitar = collection.find(guitar => guitar.id === params.id)
    return (
        <div>
			<div>
				<div>{guitar.name}</div>
				<div>{guitar.type}</div>
				<div>{guitar.color}</div>
			</div>
			<Link to='/guitars'>Go back to collection</Link>
        </div>
    )
}

export default CollectionItem;
