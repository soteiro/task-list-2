export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr
      key={task.name}
      className="task-item bg-white border-b hover:bg-gray-50"
    >
      <td className="px-6 py-4 flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
          className="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300 rounded focus:ring-gray-700 focus:ring-2 cursor-pointer"
        />
        <span className={task.done ? "line-through text-gray-500" : ""}>
          {task.name}
        </span>
      </td>
    </tr>
  );
};
