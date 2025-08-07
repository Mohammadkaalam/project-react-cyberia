
import { setSortOrder } from "../features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function TodoSort() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.todos.sortOrder);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(e.target.value as any));
  };

  return (
    <div className="mb-3 d-flex justify-content-end">
      <select className="form-select w-auto" value={sort} onChange={handleChange}>
        <option value="newest">مرتب‌سازی: جدیدترین</option>
        <option value="oldest">مرتب‌سازی: قدیمی‌ترین</option>
        <option value="category">مرتب‌سازی: دسته‌بندی</option>
      </select>
    </div>
  );
}
