import { TaskRow } from "./TaskRow";

export const TaskList = ({ tasks, toggleTask, showCompleted = false, tableName }) => {
  const filteredTasks = tasks.filter(task => task.done === showCompleted);

  if (filteredTasks.length === 0) return null;

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8">
      <table className="w-full text-sm text-left text-gray-800">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">{tableName}</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <TaskRow key={task.name} task={task} toggleTask={toggleTask}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
