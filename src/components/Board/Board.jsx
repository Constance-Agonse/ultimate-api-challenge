import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useGetImages from './../../hooks/useGetImages';
import styles from './Board.module.css';
import Loader from './../Loader';
import useGameLogic from '../../hooks/useGameLogic'
import Card from '../Card'

const Board = ({ gameOptions }) => {
    const [isLoading, setIsLoading] = useState(true)
    const images = useGetImages(gameOptions);
    const {cards, onCardClick} = useGameLogic(images, gameOptions.pace);


useEffect(() => {
    if(images.length > 0) {setIsLoading(false)}
}, [images] )


    return  (<div>{ isLoading? <Loader/> : (cards.map((card)=>
   <Card key={card.uniqueId}  card={card} onCardClick={onCardClick}/>
    ))}
    </div>) ;
};

export default Board;

Board.propTypes = {
    gameOptions: PropTypes.shape({
        pace: PropTypes.string.isRequired,
        cardsCount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    })
}
