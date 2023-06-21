import {useState} from 'react';

const ToDoItem = ({items, setItems, item, itemIndex, toggleCompleteItem, deleteItem }) => {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => { 
      e.preventDefault()
      if (input) {
        let newItems = [...items]
        newItems[itemIndex].name = input
        newItems[itemIndex].currentlyEditing = false
        setItems(newItems) 
        setInput('') 
      } else {
        let newItems = [...items]
        newItems[itemIndex].currentlyEditing = false
        setItems(newItems) 
      }
    }
    
    const enterEditMode = (itemIndex) => {
      let newItems = [...items]
      if (newItems[itemIndex].currentlyEditing === false) {
        newItems[itemIndex].currentlyEditing = true
      } else {
        newItems[itemIndex].currentlyEditing = false
      }
      setItems(newItems)
      setInput('')

    }

    const cancelEditing = (itemIndex) => {
      let newItems = [...items]
      newItems[itemIndex].currentlyEditing = false
      setItems(newItems)
      setInput('')
    }

    let listItemClass = "unselectedItem";
    if (item.isSelected){
      listItemClass = "selectedItem";
    }

    let completeButtonClass = "buttonUnpressed";
    if (item.isSelected){
        completeButtonClass = "buttonPressed";
    }
    
   return (
     <div className = "box">
      <div className = "list">
       {item.currentlyEditing === false ?
        <li key={itemIndex} className = {listItemClass}>{item.name}</li>
        :
        <div className = "box">
          <form onSubmit = {handleSubmit}>
            <input
              type = "text"
              value = {input}
              onChange = {(event) => setInput(event.target.value)}/>
          </form>
          <button id = "cancelEditingButton" onClick = {() => cancelEditing(itemIndex)}>X</button>
        </div>
        }
      </div>
      <div className = "box">
        <button className = {completeButtonClass} onClick = {() => toggleCompleteItem(itemIndex)}>{item.isSelected ? "-" : "✓"}</button>
        <button id = "deleteButton" onClick = {() => deleteItem(itemIndex)}>X</button>
        <button id= "editButton" onClick = {() => enterEditMode(itemIndex)}>Edit</button>
      </div>
       
     </div>
   );
 };
 
 export default ToDoItem;