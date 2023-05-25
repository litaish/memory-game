import AppStyles from '../assets/styles/App.module.css';

const Scoreboard = ({ currentScore, scores }) => {
  return (
    <div className={AppStyles.scoreboard}>
      <p className={AppStyles.scoreboard__text}>Your Score: {currentScore}</p>
      <p className={AppStyles.scoreboard__text}>Best Score: {Math.max(...scores)}</p>
    </div>
  );
}

export default Scoreboard;
