function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={`task-item priority-${task.priority} ${task.status === 'done' ? 'done' : ''}`}>
      <div className="task-info">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span className="priority-tag">{task.priority}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.status === 'done' ? '↩ Undo' : '✓ Done'}
        </button>
        <button onClick={() => onDelete(task.id)}>🗑</button>
      </div>
    </li>
  );
}

export default TaskItem;