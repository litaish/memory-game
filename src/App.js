import AppStyles from './assets/styles/App.module.css';
import CardsGrid from './components/CardsGrid';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

const App = () => {
  return (
    <div className={AppStyles.grid}>
      <Header />
      <Scoreboard />
      <CardsGrid />
    </div>
  );
}

export default App;
