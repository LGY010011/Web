import styled from "styled-components"
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListItem=({todo, onDelete, onEdit})=>{
  //수정 기능
  const [isEditing,setIsEditing]=useState(false);
  const [isChecked, setIsChecked]=useState(todo.checked);
  const [editedTitle, setEditedTitle]=useState(todo.title);
  const [editedContent, setEditedContent]=useState(todo.content);

  //수정 모드
  const handleEditClick=()=>{
    setIsEditing(true);
  }

  //수정 완료 처리
  const handleSaveClick=()=>{
    onEdit(todo.id, {title:editedTitle, content:editedContent, checked: isChecked});
    setIsEditing(false);
  };

  //todo 완료 변경 처리
  const handleCompleteChange=()=>{
    console.log(isChecked);
    const newStatus=!isChecked;
    
    onEdit(todo.id,{checked:newStatus});
    setIsChecked(newStatus);
  }

  //todo 상세 조회로 넘어가기
  const navigate =useNavigate();

  return(
    <Li>
      {isEditing? 
        <>
          <Input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <Input
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <Actions>
            <Button onClick={handleSaveClick} content="저장" />
            <Button onClick={() => setIsEditing(false)} content="취소" />
          </Actions>
        </>
      :
        <>
          <Checkbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCompleteChange}
          />
          <Title $isChecked={isChecked}>{todo.title}</Title>
          <Content>{todo.content}</Content>
          <Actions>
              <Button onClick={handleEditClick} content="수정" />
              <Button onClick={() => onDelete(todo.id)} content="삭제" />
              <Button onClick={()=> navigate(`${todo.id}`)} content="자세히" />
          </Actions>
        </>
      }
    </Li>
)
}

export default ListItem;

const Li = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.div`
  font-weight: bold;
  text-decoration: ${({ isChecked }) =>
    isChecked ? "line-through" : "none"};
  color: ${({ isChecked }) => (isChecked ? "#999" : "#000")};
`;

const Content = styled.div`
  margin: 5px 0;
`;

const Actions = styled.div`
  display: flex;
  margin-top:20px;
  justify-content: center;
  gap: 10px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Checkbox = styled.input`
  cursor: pointer;
  margin-bottom:10px;
`;