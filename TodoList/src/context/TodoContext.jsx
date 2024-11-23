import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { axiosInstanceBE } from "../apis/axios-instance-BE";

const TodoContext=createContext();

export function TodoProvider({children}){
    const queryClient=useQueryClient();


    //Todos 조회
    const { data: todos = [], isLoading, error } = useQuery({
      queryKey: ["todos"],
      queryFn: async () => {
        const response = await axiosInstanceBE.get("/todo");
        console.log(response.data);
        return response.data;
      },
    });

    //todo 상세 조회
    const fetchTodoById= async (id) => {
      const response = await axiosInstanceBE.get(`/todo/${id}`);
      return response.data;
    }

    //추가하기 
    const addTodoMutation = useMutation({
      mutationFn: async (newTodo) => {
        const response = await axiosInstanceBE.post("/todo", newTodo);
        console.log(response.data);
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]); // Todos 리스트 새로고침
      },
      onError: (error) => {
        console.error("Error adding todo:", error); // 오류 처리
      },
    });

    const addTodo=(todo)=>{
      addTodoMutation.mutate(todo);
    };

    //삭제하기
    const deleteTodoMutation = useMutation({
      mutationFn: async (id) => {
        await axiosInstanceBE.delete(`/todo/${id}`);
      },
      onSuccess: () => queryClient.invalidateQueries("todos"), // 성공 시 쿼리 새로고침
      onError: (error) => {
        console.error("Error deleting todo:", error); // 오류 처리
      },
    });

    const deleteTodo = (id) => {
      deleteTodoMutation.mutate(id);
    };

    // Todo 수정
    const updateTodoMutation = useMutation({
      mutationFn: async ({ id, updatedTodo }) => {
        const response = await axiosInstanceBE.patch(`/todo/${id}`, updatedTodo);
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]); // 수정 후 쿼리 새로고침
      },
      onError: (error) => {
        console.error("Error updating todo:", error); // 오류 처리
      },
    });
  
    const updateTodo = (id, updatedTodo) => {
      updateTodoMutation.mutate({ id, updatedTodo });
    };

    return (
        <TodoContext.Provider
          value={{
            todos,
            isLoading,
            error,
            addTodo,
            deleteTodo,
            updateTodo,
            fetchTodoById,
          }}
        >
          {children}
        </TodoContext.Provider>
      );
}

export function useTodos(){
    return useContext(TodoContext);
}