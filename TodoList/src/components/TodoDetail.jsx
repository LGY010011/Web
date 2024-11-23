import { useQuery } from "@tanstack/react-query";
import { useTodos } from "../context/TodoContext";
import { useEffect, useState } from "react";
import Button from "./Button";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { format } from "date-fns"; // 날짜 포맷팅 라이브러리 (선택)


const TodoDetail=({todo})=>{
    
    console.log("TodoDetail: ", todo);

    const { updateTodo, deleteTodo}=useTodos();
    const [title, setTitle]= useState(todo.title);
    const [content,setContent]= useState(todo.content);
    const [checked, setChecked] = useState(todo.checked || false);
    const [isEditing, setIsEditing] = useState(false); 
    const navigate=useNavigate();

    useEffect(()=>{
        setChecked(todo.checked);
    },[todo.checked]);

    const formatDate=(dateString)=>{
        const date = new Date(dateString);
        return format(date, "yyyy-MM-dd"); // date-fns 사용
    }

    const handleUpdate = () => {
        setIsEditing(false);
        const updatedTodo = { title, content, checked };
        updateTodo(todo.id, updatedTodo); // 수정 요청
        
    };
    
    const handleDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          deleteTodo(todo.id); // 삭제 요청
        }
    };

    const handleEditClick=()=>{
        setIsEditing(true); // 수정 모드로 전환
    }


    return (
        <>
            <Header>
                {isEditing? (
                    <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ):(
                    <Title>{todo.title}</Title>
                )}
                
            </Header>
            <Small>
                <div>ID : {todo.id}</div>
                <div>진행 상태 : {checked===true?"완료":"미완료"}</div>
                <div>{formatDate(todo.updatedAt)}</div>
            </Small>
            <Detail>
                {isEditing? (
                    <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                ):(
                    <Content>{todo.content}</Content>
                )}
            </Detail>
            <ActionButtons>
                {isEditing ? (
                    <>
                    <Button onClick={handleUpdate}content="완료"></Button>
                    <Button onClick={() => setIsEditing(false)}content="취소"></Button>
                    </>
                ) : (
                    <Button onClick={handleEditClick} content="수정"></Button>
                )}
                <Button onClick={handleDelete} content="삭제"></Button>
                <Button onClick={(e)=>{navigate("/todo")}} content={"뒤로"}/>
            </ActionButtons>
        </>
    )
}

export default TodoDetail;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

const Title = styled.h3`
    font-size: 20px;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const Detail = styled.div`
    margin-bottom: 15px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Content = styled.p`
    font-size: 16px;
    color: #555;
    line-height: 1.6;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 10px;
    font-size: 15px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 150px;
    resize: none;
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`;

const Small=styled.div`
    font-size:12px;
    display:flex;
    justify-content: flex-end;
    gap:20px;
`