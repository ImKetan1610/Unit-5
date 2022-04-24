export const TodoItem = (props) => {
  return (
    <li className='todo-item'>
      {props.data.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => props.toggle(props.data.id)}
        className={props.data.status ? "todo-done" : "todo-not-done"}
      >T</button>
    </li>
  );
};
