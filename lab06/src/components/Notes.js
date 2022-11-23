import { useParams } from 'react-router-dom'

const Notes = ({ collection }) => {
    const params = useParams();
    const guitar = collection.find(guitar => guitar.id === params.id)
    return (
        <div>
            <div>{guitar.name}</div>
            <div>{guitar.type}</div>
            <div>{guitar.color}</div>
        </div>
    )
}

export default Notes