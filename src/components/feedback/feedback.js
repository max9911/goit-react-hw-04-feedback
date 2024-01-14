import css from './feedback.module.css';

const Feedback = ({ oneClick, options }) => {
  return (
    <div className={css.btnList}>
      {options.map(elm => (
        <button key={elm} id={elm} className={css.btn} onClick={oneClick}>
          {elm}
        </button>
      ))}
    </div>
  );
};

export default Feedback;
