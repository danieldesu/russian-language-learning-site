import { useEffect, useState } from "react";
import letters from "./transliteration.json";

export default function Cyrillicgame() {
  //setting target letter, correct answer to letter via trackedNumber, player score, and what answer player is typing to form

  const [letter, setLetter] = useState("");
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [trackedNumber, setTrackedNumber] = useState("");

  //typing to input field
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  //prevent page refresh/default
  const handleSubmit = (e) => {
    e.preventDefault();

    //if answer is the same as its correct latin answer is through check, increase score and continue
    if (answer.trim().toUpperCase() === letters[trackedNumber].upperLatin) {
      setScore(score + 1);
      setAnswer("");
    } else {
      //reset score, clear answer and continue, because player got it wrong
      setScore(0);
      setAnswer("");
    }
  };

  //getting random number between 0 and given max param

  const getRandomNumber = (max) => {
    let number = Math.floor(Math.random() * max);

    // making sure the same letter is not given twice
    if (number === trackedNumber) {
      if (number <= 32 && number > 0) {
        setTrackedNumber(number - 1);
        return number - 1;
      } else if (number >= 0) {
        setTrackedNumber(number + 1);
        return number + 1;
      }
    }
    // otherwise simply return the first randomed number
    setTrackedNumber(number);
    return number;
  };

  //when component first loads and then whenever score changes, load a cyrillic/letter to display
  useEffect(() => {
    setLetter(letters[getRandomNumber(32)].upperCyrillic);
  }, [score]);

  return (
    <div className="letterGame">
      <div className="letterGameDisplay">
        <div className="letterGameDisplay__Header">
          <h4>Passport 2013, ICAO rules transliteration</h4>
          <p id="correctCounterText">
            <span id="correctCounter">{score}</span> correct
          </p>
        </div>
        <p id="targetLetter">{letter}</p>

        <div className="letterGameDisplay__Inputs">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="answer"
              placeholder="Answer..."
              maxLength="6"
              autoComplete="off"
              autoFocus
              value={answer}
              onChange={handleChange}
            ></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
