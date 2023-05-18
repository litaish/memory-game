import AppStyles from '../assets/styles/App.module.css';
import Clubs2 from '../assets/images/clubs_2.png';
import Clubs10 from '../assets/images/clubs_10.png';
import ClubsJack from '../assets/images/clubs_jack.png';
import Diamonds9 from '../assets/images/diamonds_9.png';
import Diamonds10 from '../assets/images/diamonds_10.png';
import DiamondsQueen from '../assets/images/diamonds_queen.png';
import Hearts10 from '../assets/images/hearts_10.png';
import HeartsJack from '../assets/images/hearts_jack.png';
import HeartsQueen from '../assets/images/hearts_queen.png';
import JokerRed from '../assets/images/joker_red.png';
import Spades2 from '../assets/images/spades_2.png';
import Spades4 from '../assets/images/spades_4.png';

const cards = [{
    id: 1,
    image: Clubs2
},
{
    id: 2,
    image: Clubs10
},
{
    id: 3,
    image: ClubsJack
},
{
    id: 4,
    image: Diamonds9
},
{
    id: 5,
    image: Diamonds10
},
{
    id: 6,
    image: DiamondsQueen
},
{
    id: 7,
    image: Hearts10
},
{
    id: 8,
    image: HeartsJack
},
{
    id: 9,
    image: HeartsQueen
},
{
    id: 10,
    image: JokerRed
},
{
    id: 11,
    image: Spades2
},
{
    id: 12,
    image: Spades4
}]

const CardsGrid = () => {
    return (
        <div className={AppStyles.cards}>
            {cards.map(card => { return (<img src={card.image} alt='' ></img>) })}
        </div>
    );
}

export default CardsGrid;
