import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';
import styled from 'styled-components';

export default function InputTodo() {
    
    const dispatch = useDispatch();

    const [todolist, setTodolist] = useState({
        id: 0,
        text: "",
    });

    function handleText(e) {
        setTodolist({ text: e.target.value });
        console.log(todolist);
    }

    function onReset() {
        setTodolist({ text: "" });
    }

    return (
        <InputTodoContainer>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (todolist.text !== "") {
                    dispatch(add(todolist.text));
                } else {
                    alert("할 일을 입력해주세요!");
                }
                onReset();
            }}>
                <FormContainer>
                    <InputField 
                        type="text" 
                        value={todolist.text} 
                        onChange={handleText} 
                    />
                    <SubmitButton type="submit" onChange={handleText}  value="+" />
                </FormContainer>
            </form>
        </InputTodoContainer>
    );
}

// 스타일 컴포넌트
const InputTodoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const InputField = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 5px;
    width: 300px;
    transition: border 0.3s;

    &:focus {
        border-color: #ff6347; /* Tomato 색상 */
        outline: none;
    }

    &::placeholder {
        color: #888;
    }
`;

const SubmitButton = styled.input`
    padding: 10px 20px;
    font-size: 20px;
    background-color: #ff6347; /* Tomato 색상 */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e53e36; /* 더 진한 색 */
    }
`;

