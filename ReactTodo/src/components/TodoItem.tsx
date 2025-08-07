import { motion } from "framer-motion";
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { deleteTodo, toggleTodo, editTodo } from '../features/todos/todoSlice';
import type { Todo } from '../features/todos/types';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: todo.id, title: newTitle }));
      setIsEditing(false);
    }
  };

  return (
    <motion.li
      className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      layout
    >
      <div className="d-flex align-items-center gap-2 flex-wrap">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />

        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.title}
          </span>
        )}

        <span
          className={`badge ms-2 ${todo.category === 'personal' ? 'bg-info' : 'bg-warning text-dark'}`}
        >
          {todo.category === 'personal' ? 'شخصی' : 'کاری'}
        </span>
      </div>

      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        حذف
      </button>
    </motion.li>
  );
}
