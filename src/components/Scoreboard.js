import AppStyles from '../assets/styles/App.module.css';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className={AppStyles.scoreboard}>
      <p className={AppStyles.scoreboard__text}>Your Score: 0</p>
      <p className={AppStyles.scoreboard__text}>Best Score: 0</p>
    </div>
  );
}

export default Scoreboard;
