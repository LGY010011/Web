import styled from 'styled-components'

const TodoInput=({ value, onChange, placeholder })=>{

    return(
        <Input
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            placeholder={placeholder}
        />
    )
}

export default TodoInput;

const Input=styled.input`
    padding: 8px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;

`