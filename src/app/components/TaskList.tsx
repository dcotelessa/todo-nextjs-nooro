import TaskItem from './TaskItem';
import { type Status, type Task } from '../services/taskServices';
import { useRouter } from 'next/navigation';

export interface Task {
  id: string;
  title: string;
  status: Status;
}
interface TaskListProps {
  tasks: Task[];
  onComplete: (task: Task) => void;
  onDelete: (id: string) => void;
}

  const TaskList = ({ tasks, onComplete, onDelete }: TaskListProps) => {
    const router = useRouter();

    const handleEdit = (taskId: string) => {
      router.push(`/edit/${taskId}`);
    };

    return (
      <div className="w-full max-w-3xl mx-auto">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => onComplete(task)}
            onDelete={() => onDelete(task.id)}
            onEdit={() => handleEdit(task.id)}
          >{task.title}</TaskItem>
        ))}
      </div>
    );
  };

  export default TaskList;