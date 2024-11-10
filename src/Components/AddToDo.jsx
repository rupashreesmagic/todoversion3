import { useState } from "react";

function AddToDo({ onNewItem }) {

  const [todoName,setTodoName] = useState();
  const [dueDate,setDueDate] = useState();

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    console.log(event.target.value);
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = () =>{
    onNewItem(todoName,dueDate);
    setDueDate();
    setTodoName();
  }
  return (
    <div class="container ">
      <div class="row rr-row">
        <div class="col-6">
          <input type="text" placeholder="Enter ToDo Here" onChange = {handleNameChange} />
        </div>
        <div class="col-4">
          <input type="date" onChange = {handleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success rr-btn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
