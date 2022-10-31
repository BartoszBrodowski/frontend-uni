import React from 'react'
import './FormAddItem.css'

const FormAddItem = ({ setTitle, setPrice, setDescription, setImage, setCategory, submit }) => {
  return (
	<form className='item-form'>
		<div>Add an item to list:</div>
		<input placeholder='Name' onChange={(e) => setTitle(e)}></input>
		<input placeholder='Price' onChange={(e) => setPrice(e)}></input>
		<input placeholder='Description' onChange={(e) => setDescription(e)}></input>
		<input placeholder='Image link' onChange={(e) => setImage(e)}></input>
		<input placeholder='Category' onChange={(e) => setCategory(e)}></input>
		<button type='button' onClick={submit}>Add Item</button>
	</form>
  )
}

export default FormAddItem