import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../redux/contactsSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <label htmlFor="filter-input">Пошук</label>
      <input
        id="filter-input"
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Введіть ім'я..."
      />
    </div>
  );
}

export default Filter;