import './ListItem.css'

const ListItem = ({id, title, price, category, image}) => {
  return (
    <li className='list-item'>
      <img className='item-image' src={image} alt='Clothing photo'></img>
      <div>Item's id: {id}</div>
      <div>{title}</div>
      <div>{price}$</div>
      <div className='item-category-name'>Category: {category}</div>
    </li>
  )
}

export default ListItem