import { TodoProvider } from './context/TodoContext';
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  
  return (
    <TodoProvider>
      <div className='section'>
        <div className='header'>
          <TodoForm/>
        </div>
        
        <div className='section'>
          <TodoList/>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
