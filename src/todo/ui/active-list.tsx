import { useToDoLocalStore } from '../stores/local'
import { ToDoListItem } from './list-item'

export const ToDoActiveList: React.FC = () => {
  const { getActives } = useToDoLocalStore()

  return (<>{getActives().map((todo) => (<ToDoListItem key={todo.uid} {...todo} />))}</>)
}
