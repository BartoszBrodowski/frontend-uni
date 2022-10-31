import ShoppingList from "./components/ShoppingList";
import FormAddItem from "./components/FormAddItem";
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then(res => setShoppingList(res.data))
  }, [])

  const setTitleHandler = (e) => {
    setTitle(e.target.value)
  }
  const setPriceHandler = (e) => {
    setPrice(e.target.value)
  }
  const setDescriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  const setImageHandler = (e) => {
    setImage(e.target.value)
  }
  const setCategoryHandler = (e) => {
    setCategory(e.target.value)
  }

  const submitHandler = async () => {
      try {
        await axios.post('https://fakestoreapi.com/products', JSON.stringify({
          title: {title},
          price: {price},
          description: {description},
          image: {image},
          category: {category}
        }))
        const newItem = {
          'title': title,
          'price': price,
          'description': description,
          'image': image,
          'category': category
        }
        setShoppingList(prevState => [...prevState, newItem])
        console.log(shoppingList)
      } catch(error) {
        return console.log('Error')
      }
  }

  return (
    <div className="App">
      <ShoppingList shoppingList={shoppingList}/>
      <FormAddItem setTitle={setTitleHandler} setPrice={setPriceHandler} setDescription={setDescriptionHandler} setImage={setImageHandler} setCategory={setCategoryHandler} submit={submitHandler} />
    </div>
  );
}

export default App;
