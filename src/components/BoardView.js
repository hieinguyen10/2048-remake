import React, { useEffect, useState } from "react";
import Tile from "./Tile.js";
import Cell from "./Cell.js";
import { Board } from "../helper/index.js";
import useEvent from "../hooks/useEvent.js";
import trophyImage from "../assets/img/trophy.png"
import scoreImage from "../assets/img/score.png"
import { Result } from "./Result.js";

const BoardView = () => {
    const [board,setBoard] = useState(new Board());

    const handleKeyDown = (event) => {
        if(board.hasWon() || board.hasLost()) {
            return
        }

        if(event.keyCode>=37 && event.keyCode<=40) {
            let direction = (event.keyCode - 37) ;
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
            let newBoard = boardClone.move(direction);
            setBoard(newBoard);
        }
    }

    useEvent('keydown',handleKeyDown);

    const cells = board.cells.map((row,rowIndex) => {
        return (
            <div key={rowIndex}>
                {row.map((col,colIndex) => {
                    return (<Cell  key={rowIndex * board.size + colIndex}/>)
                })}
            </div>
        );
    });

    const tiles = board.tiles
    .filter((tile) => (tile.value !== 0))
    .map((tile, index) => {
        return <Tile key={index} tile={tile}/>
    });

    const [scoreHighest, setScoreHighest] = useState(() => {
        const savedScore = localStorage.getItem("highestScore");
        return savedScore ? JSON.parse(savedScore) : 0;
    });

    useEffect(() => {
        localStorage.setItem("highestScore", JSON.stringify(scoreHighest));
      }, [scoreHighest]);

    useEffect(() => {
        if (scoreHighest < board.score)
            setScoreHighest(board.score)
    }, [board.score, scoreHighest]);

    const newGame=()=>{
        setBoard(new Board);
    }

    return (
        <div className="game-section">
            <div className="tool-box">
                <div className="score-box">
                    <div className="score current">
                        <img src={scoreImage} alt=""/>
                        <div className="score-label">
                            <label>{board.score}</label>
                        </div>
                    </div>
                    <div className="score highest">
                        <img src={trophyImage} alt=""/>
                        <div className="score-label">
                            <label>{scoreHighest}</label>
                        </div>
                    </div>
                </div>
                <div className="resetButton" onClick={newGame}>New Game</div>
            </div>
            <div className="board">
                {cells}{tiles}
                <Result onNewGame={newGame} board={board} />
            </div>
        </div>
    )
};

export default BoardView;