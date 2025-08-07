import { useAppSelector } from '../store/hooks';
import TodoItem from './TodoItem';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";


export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.items);
  const [filter, setFilter] = useState<'all' | 'personal' | 'work'>('all');

  const filteredTodos = todos.filter((todo) =>
    filter === 'all' ? true : todo.category === filter
  );

  return (
    <div>
      {/* فیلتر دسته‌بندی */}
      <div className="mb-3 text-center">
        <div className="btn-group">
          <button
            className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            همه
          </button>
          <button
            className={`btn btn-outline-info ${filter === 'personal' ? 'active' : ''}`}
            onClick={() => setFilter('personal')}
          >
            شخصی
          </button>
          <button
            className={`btn btn-outline-warning ${filter === 'work' ? 'active' : ''}`}
            onClick={() => setFilter('work')}
          >
            کاری
          </button>
        </div>
      </div>

      {/* لیست وظایف با انیمیشن */}
      <ul className="list-group">
        <AnimatePresence>
          {filteredTodos.length === 0 ? (
            <motion.li
              className="list-group-item text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              وظیفه‌ای یافت نشد.
            </motion.li>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
}
