import css from './stats.module.css';

export default function Stats({ data: { good, neutral, bad } }) {
  const total = good + neutral + bad;
  const positive = (((neutral + good) / total) * 100).toFixed(1);
  if (total > 0) {
    return (
      <div className={css.container}>
        <p className={css.string}>Good: {good}</p>
        <p className={css.string}>Neutral: {neutral}</p>
        <p className={css.string}>Bad: {bad}</p>
        <p className={css.string2}>Total: {total}</p>
        <p className={css.string2}>Positive: {positive} %</p>
      </div>
    );
  } else {
    return (
      <div className={css.container}>
        <p className={css.string}>No feedback given</p>
      </div>
    );
  }
}
