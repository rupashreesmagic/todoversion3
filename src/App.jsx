import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
function App(){
  
  const[todoItems,setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemDueDate) => {
    console.log(`New Item Added : ${itemName} Date : ${itemDueDate}`);
    const newToDoItems = [...todoItems,{name : itemName,dueDate : itemDueDate}];
    setTodoItems(newToDoItems);
  }

   const handleDeleteItem = (todoItemName) => {
    console.log(`Item Deleted : ${todoItemName}`);
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
   }
  
   
  return (
    <center className="todo-container">
      <AppName></AppName>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <div className = "styles.itemsContainer">
      <AddToDo onNewItem = {handleNewItem}></AddToDo>
      <ToDoItems todoItems = {todoItems} onDeleteClick = {handleDeleteItem}></ToDoItems>
      
      </div>
      
    </center>
  );
}

export default App;
