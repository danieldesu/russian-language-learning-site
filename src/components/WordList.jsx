import words from "./wordList.json";

function WordList() {
  const mappedWords = words.map((word, index) => {
    return (
      <div key={index} className="wordContainer__item">
        <h2>{word.russianWord}</h2>
        <h3>{word.englishWord}</h3>
      </div>
    );
  });

  return <div className="wordContainer">{mappedWords}</div>;
}

export default WordList;
