import { useToDoLocalStore } from '../stores/local'
import { ToDoListItem } from './list-item'

export const ToDoActiveList: React.FC = () => {
  const { actives } = useToDoLocalStore()

  return (<>{actives.map((todo) => (<ToDoListItem key={todo.uid} {...todo} />))}</>)
}
