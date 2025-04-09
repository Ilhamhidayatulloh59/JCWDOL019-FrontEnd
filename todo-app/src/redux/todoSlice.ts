import { ITodo } from "@/types/todo";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITodo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;
