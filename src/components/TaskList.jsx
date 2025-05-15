export const TaskList = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index} className="task-item">
            <td>{task.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
