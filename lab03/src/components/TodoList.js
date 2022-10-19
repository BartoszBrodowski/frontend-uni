const TodoList = (props) => {
  return (
    <ul>
        {props.todos.map((todo, index) => (<li key={index}>Task: {todo.todo}, Date: {todo.date}</li>))}
    </ul>
  )
}

export default TodoList