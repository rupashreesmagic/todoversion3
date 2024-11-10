import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems , onDeleteClick }) => {
  return (
    <div >
      {todoItems.map(item => <ToDoItem todoDate = {item.dueDate} todoName = {item.name}
      onDeleteClick = {onDeleteClick}></ToDoItem>)}
    </div>
  );
};
export default ToDoItems;
