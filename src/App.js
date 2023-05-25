import { useState } from 'react';
import AppStyles from './assets/styles/App.module.css';
import CardsGrid from './components/CardsGrid';
import Header from './components/Header';
import uniqid from 'uniqid';
import Scoreboard from './components/Scoreboard';
import Clubs2 from './assets/images/clubs_2.png';
import Clubs10 from './assets/images/clubs_10.png';
import ClubsJack from './assets/images/clubs_jack.png';
import Diamonds9 from './assets/images/diamonds_9.png';
import Diamonds10 from './assets/images/diamonds_10.png';
import DiamondsQueen from './assets/images/diamonds_queen.png';
import Hearts10 from './assets/images/hearts_10.png';
import HeartsJack from './assets/images/hearts_jack.png';
import HeartsQueen from './assets/images/hearts_queen.png';
import JokerRed from './assets/images/joker_red.png';
import Spades2 from './assets/images/spades_2.png';
import Spades4 from './assets/images/spades_4.png';

const initialCards = [{
  id: uniqid(),
  image: Clubs2,
  isClicked: false,
},
{
  id: uniqid(),
  image: Clubs10,
  isClicked: false,
},
{
  id: uniqid(),
  image: ClubsJack,
  isClicked: false,
},
{
  id: uniqid(),
  image: Diamonds9,
  isClicked: false,
},
{
  id: uniqid(),
  image: Diamonds10,
  isClicked: false,
},
{
  id: uniqid(),
  image: DiamondsQueen,
  isClicked: false,
},
{
  id: uniqid(),
  image: Hearts10,
  isClicked: false,
},
{
  id: uniqid(),
  image: HeartsJack,
  isClicked: false,
},
{
  id: uniqid(),
  image: HeartsQueen,
  isClicked: false,
},
{
  id: uniqid(),
  image: JokerRed,
  isClicked: false,
},
{
  id: uniqid(),
  image: Spades2,
  isClicked: false,
},
{
  id: uniqid(),
  image: Spades4,
  isClicked: false,
}]

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [scores, setScores] = useState([]);
  const [cards, setCards] = useState(initialCards);

  const setCardClicked = (cardId) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map(card => {
        if (card.id === cardId) {
          // Create copy for rest of card properties, set isClicked to true
          return { ...card, isClicked: true };
        }
        // If id does not match, just return the same object
        return card;
      });

      // Set as new state value
      return updatedCards;
    })
  }

  const resetCards = () => {
    setCards((prevCards) => {
      const resetCards = prevCards.map(card => {
        return { ...card, isClicked: false };
      });

      return resetCards;
    })
  }

  const checkCardClicked = (cardId) => {
    const foundCardIndex = cards.findIndex(card => card.id === cardId);

    return cards[foundCardIndex].isClicked ? true : false;
  }

  const resetGame = () => {
    setCurrentScore(0);

    resetCards();
  }

  const handleCardClick = (e) => {

    if (checkCardClicked(e.target.id)) {

      resetGame();

    } else {
      setCardClicked(e.target.id);

      setCurrentScore(prevScore => prevScore + 1);
    }

  }

  return (
    <div className={AppStyles.grid}>
      <Header />
      <Scoreboard
        currentScore={currentScore}
        scores={scores}
      />
      <CardsGrid cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
