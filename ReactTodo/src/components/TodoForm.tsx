import { useState } from 'react';
import { addTodo } from '../features/todos/todoSlice';
import { useAppDispatch } from '../store/hooks';

export default function TodoForm() {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState<'personal' | 'work'>('personal');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            setError('عنوان نباید خالی باشد');
            return;
        }
        dispatch(addTodo(title, category));
        setTitle('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row g-2 align-items-center">
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="عنوان وظیفه..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value as 'personal' | 'work')}
                            >
                                <option value="personal">شخصی</option>
                                <option value="work">کاری</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success ">افزودن</button>
                        </div>
                    </div>
                    {error && <div className="text-danger mt-2">{error}</div>}
                </div>
            </div>
        </form>

    );
}
