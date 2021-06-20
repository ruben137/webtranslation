import React, { useContext } from "react";
import "../index.css";
import image from "../img/translation.png";
import TranslationContext from "../contexts/Translation/TranslationContext";

export default function Cover() {
  const translationContext = useContext(TranslationContext);
  const { language } = translationContext;
  return (
    <>
      <div className="container">
        <div className="row columna">
          <div className="col-md-6 d-flex justify-content-center flex-column">
            {language === "Español" && <h1>¿Quieres traducir tu sitio web?</h1>}
            {language === "English" && (
              <h1>Do you want to translate your website?</h1>
            )}

            {language === "Español" && (
              <p>
                Con una simple implementación de reactjs se puede traducir
                manualmente tu sitio web, esto es de utilidad si eres bilingue y
                quieres que tu portafolio sea multi-language, esto ayudara a que
                tu pagina web pueda ser leida por la mayor cantidad de usuarios
                posible
              </p>
            )}
            {language === "English" && (
              <p>
                With a simple implementation of reactjs you can manually
                translate your website, this is useful if you are bilingual and
                you want your personal website to be multi-language, this will
                help by making your website readable by the largest quantity of
                users as possible
              </p>
            )}
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <img src={image} alt="" className="w-50" />
          </div>
        </div>
      </div>
    </>
  );
}
