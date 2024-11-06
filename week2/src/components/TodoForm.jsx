import { useTodos } from "../context/TodoContext";
import TodoInput from "./TodoInput";
import Button from "./Button";
import '../App.css'

function TodoForm(){
    const {text, setText,addTodo}=useTodos();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
    };

    return (
       <form className="my-form" onSubmit={handleSubmit}>
            <TodoInput hasDefault={false} type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={addTodo}  text="등록"/>
       </form>
    )
}

export default TodoForm;