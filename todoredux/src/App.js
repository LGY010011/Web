import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import styled from"styled-components";

function App() {
  return (
    <Container>
      <InputTodo />
      <TodoList/>
    </Container>
  );
}

export default App;

const Container=styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;  
  flex-direction: column;
  margin-top:100px;

`
