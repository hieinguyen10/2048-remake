import React from 'react'
import handIcon from '../assets/img/handIcon.png'

export const Result = ({onNewGame, board}) => {
    if (board.hasWon()) {
        return (
            <div className='result'>
                <img
                    src="https://media.giphy.com/media/j4XhzP9Q7qIf4qdIEV/giphy.gif"
                    alt="Giphy Sticker"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <div className='winner'>
                    <span>W</span><span>I</span><span>N</span><span>N</span><span>E</span><span>R</span>
                </div>
            </div>
        )
    } else if (board.hasLost()) {
        return (
            <div className='result'>
                <div className='lost'>
                    <span>GAME</span><span>OVER</span>
                </div>
                <div className='tryAgain'>
                    <img src={handIcon} alt=''></img><span className='buttonTryAgain' onClick={onNewGame}>Try Again</span>
                </div>
            </div>
        );
    }

    return null;
}
