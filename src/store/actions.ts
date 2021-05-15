import { Todo, Store } from "./types";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";
export const SET_TODOS = "SET_TODOS";
export const LOAD_TODOS = "LOAD_TODOS";

export type ActionTypes =
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | {
      type: typeof UPDATE_TODO;
      payload: {
        id: number;
        text: string;
      };
    }
  | { type: typeof TOGGLE_TODO; payload: number }
  | { type: typeof SET_NEWTODO; payload: string }
  | { type: typeof SET_TODOS; payload: Todo[] }
  | { type: typeof LOAD_TODOS; payload: string };

// action creators
export const addTodo = (): ActionTypes => {
  return {
    type: ADD_TODO,
  };
};

export const deleteTodo = (id: number): ActionTypes => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (id: number, text: string): ActionTypes => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      text,
    },
  };
};

export const toggleTodo = (id: number): ActionTypes => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const setNewTodo = (text: string): ActionTypes => {
  return {
    type: SET_NEWTODO,
    payload: text,
  };
};

export const setTodos = (todos: Todo[]): ActionTypes => {
  return {
    type: SET_TODOS,
    payload: todos,
  };
};

export const loadTodos =
  (url: string): ThunkAction<void, Store, unknown, Action<string>> =>
  async (dispatch) => {
    const res = await axios.get(url);
    const todos: Todo[] = res.data;
    dispatch(setTodos(todos));
  };
