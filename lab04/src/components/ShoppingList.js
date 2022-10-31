import ListItem from './ListItem';
import './ShoppingList.css'

const ShoppingList = ({ shoppingList }) => {
    return (
        <ul className='shopping-list'>
            {shoppingList.map((item, index) => {
                return (<ListItem key={index} id={item.id ? item.id : index + 1} title={item.title} price={item.price} category={item.category} image={item.image}/>)
            })}
        </ul>
    )
}

export default ShoppingList