/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { getFormedData, getPairedPics, addUniqueIds, shuffleCards } from "../utils";

const MAX_VISIBLE_CARDS = 2;
const PACES = {
  easy: 1500,
  medium: 1000,
  hard: 500,
  pro: 250
}

const useGameLogic = (images,gamePace) => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedPics(a);
    const c = addUniqueIds(b);
    const d = shuffleCards(c);
    console.log({ d })
    setCards(d);
  };

  const flipCard = (clickedCardId) => {
    console.log('flippedCard', clickedCardId)
    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true
      }
      if(card.isShown) {
        setVisibleCards(oldState => [...oldState, card.uniqueId])
      }
      return card
    })
    setCards(flippedCards)
  }

  const onCardClick = (clickedCardId) => {
    if (visibleCards.length < MAX_VISIBLE_CARDS ) { flipCard(clickedCardId) }
    
  }

  useEffect(() => {
    if (images.length > 0) {
      prepareCards()
    }

  }, [images])

  useEffect(()=>{ 
    if(visibleCards.length >= MAX_VISIBLE_CARDS) {
      const updatedCards = cards.map((card) => ( card.isShown = false))
      setTimeout(() => {
        setCards(updatedCards)
        setVisibleCards([])
      }, PACES[gamePace] )
    }
   },
  [visibleCards]
  )

  return { cards, onCardClick };
};

export default useGameLogic;
