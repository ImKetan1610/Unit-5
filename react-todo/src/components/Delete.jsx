
export const Delete = (data) => {
    return (
        <ul className="todo-list">
            {data.data.map((ele)=>{
                return <li className="todo-item todo-done">{ele.title}</li>
            })}

        </ul>
    )
}
