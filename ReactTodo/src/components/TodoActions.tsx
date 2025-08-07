import { useAppDispatch } from "../store/hooks";
import { clearCompleted } from "../features/todos/todoSlice";

export default function TodoActions() {
  const dispatch = useAppDispatch();

  const handleClear = () => {
    if (window.confirm("آیا مطمئنی می‌خواهی همه وظایف انجام‌شده را حذف کنی؟")) {
      dispatch(clearCompleted());
    }
  };

  return (
    <div className="d-flex justify-content-end my-3">
      <button className="btn btn-danger btn-sm" onClick={handleClear}>
        پاک کردن همه وظایف انجام‌شده
      </button>
    </div>
  );
}
