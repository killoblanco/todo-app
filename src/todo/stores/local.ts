import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { TODO_STATUS } from '../consts'
import { type Todo, type TodoLocalStorage } from '../types'

export const useToDoLocalStore = create(persist<TodoLocalStorage>(
  (set, get) => ({
    todos: [],
    getActives: () => get().todos.filter((todo) => todo.status === TODO_STATUS.ACTIVE),
    getCompleted: () => get().todos.filter((todo) => todo.status === TODO_STATUS.COMPLETED),
    add: (todo) => { set((state) => ({ todos: [...state.todos, todo] })) },
    toggleComplete: ({ uid }: Pick<Todo, 'uid'>) => {
      set((state) => ({
        todos: state.todos.map((todo) => todo.uid === uid
          ? {
              ...todo,
              status: todo.status === TODO_STATUS.ACTIVE ? TODO_STATUS.COMPLETED : TODO_STATUS.ACTIVE
            }
          : todo)
      }))
    }
  }),
  {
    name: 'todo-local-store',
    storage: createJSONStorage(() => localStorage)
  }
))
