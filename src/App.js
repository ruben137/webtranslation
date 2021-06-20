import React from "react";
import Cover from "./components/Cover";
import Navigation from "./components/Navigation";
import TranslationState from "./contexts/Translation/TranslationState";

function App() {
  return (
    <TranslationState>
      <Navigation />
      <Cover />
    </TranslationState>
  );
}

export default App;
