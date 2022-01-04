import { Link } from "react-router-dom";
import { LanguageContext, languages } from "./LanguageContext";
import { useContext } from "react";

const Header = () => {
  const [lang, setLang] = useContext(LanguageContext);

  return (
    <header>
      <div className="header">
        <select
          id="Language"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          onBlur={(e) => setLang(e.target.value)}
        >
          {languages.map((language) => {
            return (
              <option value={language.lang} key={language.lang}>
                {language.displayName}
              </option>
            );
          })}
        </select>
        <nav>
          <Link to="/">
            <strong>Valorant-Info</strong>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
