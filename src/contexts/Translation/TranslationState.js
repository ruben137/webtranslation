import React, { useReducer } from "react";
import { GET_LANGUAGE, SET_LANGUAGE } from "../types";
import TranslationContext from "./TranslationContext";
import TranslationReducer from "./TranslationReducer";

const TranslationState = (props) => {
  const initialState = {
    language: null,
  };

  const [state, dispatch] = useReducer(TranslationReducer, initialState);

  const getLanguage = () => {
    try {
      const language = JSON.parse(localStorage.getItem("language"));
      dispatch({ type: GET_LANGUAGE, payload: language ? language : 'English' });

    } catch (error) {
      console.log(error);
    }
  };

  const setLanguage = (language) => {
    try {
      localStorage.setItem("language", language);
      dispatch({ type: SET_LANGUAGE, payload: language });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TranslationContext.Provider
      value={{
        language: state.language,
        getLanguage,
        setLanguage,
      }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
};

export default TranslationState;
