import { useState } from 'react';
import AppStyles from './assets/styles/App.module.css';
import CardsGrid from './components/CardsGrid';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import initialCards from './data/initialCards';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [scores, setScores] = useState([0]);
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
    // Adding current score to set of scores for displaying best score
    setScores((prevScores) => [...prevScores, currentScore]);
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
