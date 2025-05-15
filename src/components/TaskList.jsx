export const TaskList = ({ tasks }) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-800">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr 
              key={index} 
              className="task-item bg-white border-b hover:bg-gray-50"
            >
              <td className="px-6 py-4">{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
