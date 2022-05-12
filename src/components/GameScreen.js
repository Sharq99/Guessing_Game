import { useState } from "react";

function GameScreen({gameCheck, getRandomNumberBetween }) {
const [guess, setGuess] = useState(0);
const [number, setNumber] = useState(getRandomNumberBetween(1,100));
const [tries, setTries] = useState(3);
    return(
        <div >
            <div className="font-pos">
                <h1 className="font-specs">Your Chance Of Freedom</h1>
                <h1 className="font-specs">So you got yourself into a little bit of trouble, as your lawyer I have manged to STRIKE a deal with the judge and All you have to do is guess a number ranging from 1 to 100 to gain your freedom.</h1>
                <h2 className="font-specs">But choose wisely as you only have 3 Chances</h2>
                <h2 className="font-specs">Guess the Number that gives you your Freedom</h2>
            </div>
            <div>
                <div className="search-specs">
                    <input
                        className="font-ch"
                        type="number"
                        onChange = {(event) => setGuess(event.target.value)}
                        placeholder="Enter Your Guess"
                        aria-label="Guess"
                        aria-describedby="search-addon"
                    />
                </div>
                <div className="btn-pos">
                    <button className="font-ch btn-specs" onClick={() => gameCheck(tries, guess, number, setTries)} >Chance Your Freedom</button>
                </div>
            </div>
            <h3 className="font-specs">You Have {tries} Chance/s Left</h3>
        </div>
    );
}

export default GameScreen;