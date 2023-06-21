'use client' 

import {useState} from 'react';
import Form from './Form'
import ToDoItem from './ToDoItem'
import './main.css'
import Counter from'./Counter'

const App = () => {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => { 
    e.preventDefault()
    let newItems = [...items]
    let submittedItem = { name: input, isSelected: false, currentlyEditing: false}
    newItems.push(submittedItem) 
    setItems(newItems) 
    setInput('') 
  }

  const deleteAll = () => {
    setItems([])
  }

  const deleteItem = (index) => {
    let newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const toggleCompleteItem = (itemIndex) => {
    let newItems = [...items]
    if (newItems[itemIndex].isSelected === true) {
      newItems[itemIndex].isSelected = false
    } else {
      newItems[itemIndex].isSelected = true
    }
    setItems(newItems);    
  }

  return (
    <div className = "mainContainer">
      <div className = "headerContainer">
        <h1>To-Do List</h1>
      </div>
      <div>
        <Form input = {input} setInput = {setInput} handleSubmit = {handleSubmit}/>
      </div>
      <div className = "middleContainer">
        <div className = "box">
          <ul>
            {items.map((item, index) => {
              return (
                <ToDoItem key={index} items = {items} setItems = {setItems} item={item} itemIndex={index} toggleCompleteItem={toggleCompleteItem} deleteItem={deleteItem} />
            )})}
          </ul>
        </div>
        <div className = "deleteContainer">
          <button disabled = {items.length < 1} id = "deleteAllButton" onClick = {() => deleteAll()}>Delete All</button>
        </div>
      </div>
      <div className = "counterContainer">
        <Counter items = {items}/>
      </div>
      
    </div>
  )
}

export default App;
