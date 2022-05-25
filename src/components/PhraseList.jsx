import phrases from "./phraseList.json";

function PhraseList() {
  const mappedPhrases = phrases.map((phrase, index) => {
    return (
      <div key={index} className="wordContainer__item">
        <h2>{phrase.russianPhrase}</h2>
        <h3>{phrase.englishPhrase}</h3>
      </div>
    );
  });

  return <div className="wordContainer">{mappedPhrases}</div>;
}

export default PhraseList;
