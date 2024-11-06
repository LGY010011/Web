import { createContext, useContext, useState } from "react";

//컨텍스트 생성 => 여러 컴포넌트에서 이용 가능하도록
const TodoContext=createContext(); 

//TodoContext의 Provider 정의.
export function TodoProvider({children}){
    const[todos, setTodos]=useState([{id:1, task:'투두 만들어보기'}]); //할일 목록들
    const[text,setText]=useState(''); //새로 추가할 일의 텍스트 관리
    const[editingID, setEditingID]=useState('') //현재 수정 중인 할 일의 ID 저장
    const[editText, setEditText]=useState('') //수정 중인 할 일의 텍스트를 관리

    //추가하기
    const addTodo=()=>{
        if (text.trim() === '') return; // 입력이 비어있는 경우 추가하지 않음
        setTodos((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 100) + 2, task: text },
        ]);
        setText(''); // 추가 후 입력창 비우기
    };

    //삭제하기
    const deleteTodo=(id)=>{
        setTodos((prev)=>
        prev.filter((item)=>item.id!=id));
    };


    //수정하기 
    const updateTodo=(id, newText)=>{
        setTodos((prev)=>
        prev.map((item)=>
            (item.id===id ? {...item, task:newText} : item)
        )
        );
        setEditingID('');
    }

    return (
        <TodoContext.Provider
          value={{
            todos, text, setText,
            addTodo, deleteTodo, updateTodo,
            editingID, setEditingID,
            editText, setEditText,
          }}
        >
          {children}
        </TodoContext.Provider>
      );

}

export function useTodos(){
    return useContext(TodoContext);
}