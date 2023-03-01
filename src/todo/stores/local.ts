import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { type TodoLocalStorage } from '../types'

export const useToDoLocalStore = create(persist<TodoLocalStorage>(
  (set) => ({
    todos: [],
    add: (todo) => { set((state) => ({ todos: [...state.todos, todo] })) }
  }),
  {
    name: 'todo-local-store',
    storage: createJSONStorage(() => localStorage)
  }
))
