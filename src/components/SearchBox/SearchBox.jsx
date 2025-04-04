import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div style={{ width: '145px' }}>
      <label
        htmlFor="search"
        style={{ width: '100%', height: '10px', fontSize: '12px' }}
      >
        Find contacts by name
      </label>

      <input
        type="text"
        name="search"
        id="search"
        value={filter}
        onChange={handleFilterChange}
        style={{ width: '100%', marginLeft: '2px', marginRight: '2px' }}
      />
    </div>
  );
};

export default SearchBox;


