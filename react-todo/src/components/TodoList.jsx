import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
    var x = props.data.filter((ele)=>{
        console.log('x:', x)
        return ele.status === false;
    })

    return (
        <ul className="todo-list" >
            {x.map((ele)=>{
                return <TodoItem data={ele} toggle={props.toggle} />
            })}
        </ul>
    )
}

