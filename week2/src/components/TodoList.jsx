import { useTodos } from "../context/TodoContext";
import Button from "./Button";
import TodoInput from "./TodoInput";
import '../App.css'

function TodoList(){
    const {todos, deleteTodo, updateTodo, editingID, setEditingID
        ,editText, setEditText
        }=useTodos();
    
    return (
        <>
        {todos.map(({ id, task }) => (
            <div className="list" key={id}>
              {editingID !== id ? (
                <div>
                  <p>{id}. {task}</p>
                </div>
              ) : ( //
                <div>
                  <p>{id}.
                    <TodoInput hasDefault={false} 
                        type="text" 
                        onChange={(e) => setEditText(e.target.value)} 
                        value={editText}  />
                  </p>
                </div>
              )}
              <div className="buttons">
                <Button onClick={() => deleteTodo(id)} text="삭제 하기" />
                {editingID === id ? (
                  <Button onClick={() => updateTodo(editingID, editText)} text="수정 완료" />
                ) : (
                  <Button onClick={() => { setEditingID(id); setEditText(task); }} text="수정 진행" />
                )}
              </div>
            </div>
          ))}
          </>
    )
}

export default TodoList;