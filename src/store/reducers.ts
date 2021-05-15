import {
  ActionTypes,
  DELETE_TODO,
  SET_TODOS,
  SET_NEWTODO,
  UPDATE_TODO,
  ADD_TODO,
  TOGGLE_TODO,
} from "./actions";
import { Store, Todo } from "./types";

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const deleteTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Redux reducer
export function todoReducer(
  state: Store = { todos: [], newTodo: "" },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: deleteTodo(state.todos, action.payload),
      };
    case SET_NEWTODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.text),
      };
    case ADD_TODO:
      return {
        ...state,
        newTodo: "",
        todos: addTodo(state.todos, state.newTodo),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload),
      };
    default:
      return state;
  }
}
