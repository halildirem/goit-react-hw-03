import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.box}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="filter"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
