import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';
import styled from 'styled-components';

export default function TodoList() {
    const todolist = useSelector(state => state.todo);
    const dispatch = useDispatch();


    const todolistView = todolist.map((todo, idx) => (
        <ListItem key={todolist[idx].id}>
            <Checkbox 
                type="checkbox" 
                onChange={() => dispatch(complete(todolist[idx].id))} 
                checked={todo.complete}
            />
            <TodoText complete={todo.complete}>{todo.complete === false ? todo.text : <del>{todo.text}</del>}</TodoText>
            <DeleteButton type="button" onClick={() => dispatch(remove(todolist[idx].id))}>
                삭제
            </DeleteButton>
        </ListItem>
    ));

    return (
        <TodoListContainer>
            <ul>{todolistView}</ul>
        </TodoListContainer>
    );
}

// 스타일 컴포넌트
const TodoListContainer = styled.div`
    margin-top: 20px;
    width:60%;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    margin: 5px 0;
    background-color: #f9f9f9;
    border-radius: 5px;
`;

const Checkbox = styled.input`
    margin-right: 15px;
    cursor: pointer;
`;

const TodoText = styled.div`
    flex-grow: 1;
    font-size: 18px;
    color: ${({ complete }) => (complete ? '#aaa' : '#333')};
    text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #ff6347;
    transition: color 0.3s;

    &:hover {
        color: #e53e36;
    }

    &:focus {
        outline: none;
    }
`;

