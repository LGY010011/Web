const TodoInput = ({hasDefault, type, onChange,value, defaultValue=''} ) => {
    return (
        <input 
            className="todo-input"
            type={type} 
            {...(hasDefault 
                ? { defaultValue } //hasDefault가 참이라면 default로 설정
                : { value, onChange })}
        />
    );
}

export default TodoInput;