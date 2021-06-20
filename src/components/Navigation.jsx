import React, { useContext, useEffect } from "react";
import TranslationContext from "../contexts/Translation/TranslationContext";

const Navigation = () => {
  const translationContext = useContext(TranslationContext);
  const { language, setLanguage,getLanguage} = translationContext;

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {language === "Español" && (
          <a href="/" className="navbar-brand">
            Traducir
          </a>
        )}
        {language === "English" && (
          <a href="/" className="navbar-brand">
            Translate
          </a>
        )}

        <div>
          <ul className="navbar-nav ms-auto">
            <li>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  setLanguage(e.target.value);
                  localStorage.setItem(
                    "language",
                    JSON.stringify(e.target.value)
                  );
                }}
              >
                <option selected={language === "Español"}>Español</option>
                <option selected={language === "English"}>English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
