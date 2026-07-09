import css from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.card}>
      <p className={css.row}>
        <svg className={css.icon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z"
          />
        </svg>
        {name}
      </p>
      <p className={css.row}>
        <svg className={css.icon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.6 10.79c1.44 2.83 3.76 5.14 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02z"
          />
        </svg>
        {number}
      </p>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
