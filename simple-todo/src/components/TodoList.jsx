import { TodoItem } from "./TodoItem"


export const TodoList = (props) => {
    return(
        <ul className="todo-list">
            {props.data.map((e)=>{
                return <TodoItem data={e} toggle={props.toggle} />
            })}
        </ul>
    )
}