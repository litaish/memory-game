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
import uniqid from 'uniqid';

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
}];

export default initialCards;