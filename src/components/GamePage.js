import { useState } from "react";
import Loss from './Loss';
import Win from './Win';
import React from 'react';
import GameScreen from './GameScreen'


function GamePage() {

const gameCheck = (tries, guess, number, setTries) => {
    if(tries !== 0){
        let G = parseInt(guess)
        if(G === number){
            youWin();
        } else{
            setTries(tries - 1);
        }
    } else{
        youLose(tries);
    }
}

const youWin = () => {
    console.log("Winner");
    setPage(<Win/>)
    
}

const youLose = (tries) => {
    if(tries === 0) {
        console.log("Loser");
        setPage(<Loss />)
    }
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

const [page, setPage] = useState(<GameScreen gameCheck={gameCheck} getRandomNumberBetween={getRandomNumberBetween}/>)

    
  return (
      <div>
        {/* {tries === 0? <h1 className="font-specs">loser!</h1> :<h1 className="font-specs">winner!</h1>} */}

       {page}
      </div>
  );
}

export default GamePage;
