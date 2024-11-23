import { useTodos } from "../context/TodoContext";
import TodoInput from "./TodoInput";
import Button from "./Button";
import { useState } from "react";
import styled from "styled-components";

function TodoForm(){
    const {addTodo, isLoading} = useTodos();
    const [title, setTitle]= useState("");
    const [content, setContent]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 입력해주세요!");
            return;
        }
        try{
            addTodo({ title, content });
            setTitle("");
            setContent("");
        } catch(error){
            alert("할 일을 추가하는 중 오류가 발생했습니다.");
        }
    };

    return (
        <Form>
        <TodoInput value={title} onChange={setTitle} placeholder="제목" />
        <TodoInput value={content} onChange={setContent} placeholder="내용" />
        <Button
          onClick={handleSubmit}
          content="등록"
          disabled={isLoading || !title.trim() || !content.trim()} // Disabled 조건 추가
        />
      </Form>
    )
}

export default TodoForm;


const Form=styled.form`
    width:100vh;
    display: flex;
    align-items:center;
    justify-content: center;
`