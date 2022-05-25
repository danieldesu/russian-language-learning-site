import { Link } from "react-router-dom";

function Mainmenu() {
  return (
    <div className="mainmenu__container">
      <Link to="/cyrillic">
        <div className="mainmenu__item">
          <p>Cyrillic / Alphabet</p>
        </div>
      </Link>

      <Link to="/words">
        <div className="mainmenu__item">
          <p>Words</p>
        </div>
      </Link>

      <Link to="/phrases">
        <div className="mainmenu__item">
          <p>Phrases</p>
        </div>
      </Link>

      <a
        href="https://www.buymeacoffee.com/danieldesu"
        target="_blank"
        rel="noreferrer"
        id="buymeacoffee"
      >
        <div className="mainmenu__item">
          <p>Buy Me A Coffee</p>
        </div>
      </a>
    </div>
  );
}

export default Mainmenu;
