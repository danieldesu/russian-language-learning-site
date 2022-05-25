import letters from "./transliteration.json";

export default function Cheatsheet() {
  const CapitalLetters = letters.map((letter, index) => {
    return (
      <div key={index}>
        {letter.upperCyrillic} - <span>{letter.upperLatin}</span>
      </div>
    );
  });

  return (
    <div className="cheatsheet">
      <h1>CHEAT SHEET</h1>

      <div className="cheatsheet__grid">
        {CapitalLetters}
        <div>
          Ь <span>- soft sign</span>
        </div>
        <div>
          Ъ <span>- hard sign</span>
        </div>
      </div>
    </div>
  );
}
