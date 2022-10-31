import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import './ShoppingList.css'

const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => setShoppingList(res.data))
    }, [])
    console.log(shoppingList.length)
    return (
        <ul className='shopping-list'>
            {shoppingList.map((item, index) => {
                return (<ListItem key={index} id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} />)
            })}  
        </ul>
    )
}

export default ShoppingList