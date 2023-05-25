import AppStyles from '../assets/styles/App.module.css';

const CardsGrid = ({ cards, handleCardClick }) => {
    return (
        <div className={AppStyles.cards}>
            {cards?.map(card => { return (<img key={card.id} id={card.id} onClick={handleCardClick} src={card.image} alt='' ></img>) })}
        </div>
    );
}

export default CardsGrid;
