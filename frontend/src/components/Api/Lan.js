
import React, { useState, createContext, useEffect } from "react";
import Form from "./Form";
import Save from "./Save";
import "./CSS/Lan.css";

export const StoreValue = createContext();

function Lan() {
 
    const [inputText, setInputText] = useState("");
    const [formSubmitted, setFormSubmitted] = useState();
    const [fetchedData, setFetchedData] = useState("");
    const [language, setLanguage] = useState();
    const [warnings, setWarnings] = useState();
    const [matches, setMatches] = useState();
    const [software, setSoftware] = useState();


  useEffect(() => {
    if (inputText) {
    fetch(`https://dnaber-languagetool.p.rapidapi.com/v2/check${inputText}`)
        .then((response) => response.json())
        .then((data) => {
        data.map((sp) => {
            setSoftware(sp.software);
            setLanguage(sp.language);
            setWarnings(sp.warnings);
            setMatches([
                     Object.values(sp.matches).filter((matches, index) => {
                         if (index === 0) {
                             return true;
                         }
                        return false;
                    }),
                ]);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
         
        return;
      }
      
      }, [inputText]);
    

  const saveData = (data) => {
    return setFetchedData(data);
  };


  const saveValue = (enteredValue) => {
    return setInputText(enteredValue());
  };

  const saveFormSubmitted = (value) => {
    return setFormSubmitted(value);
  };

  return (

    <div>
      <Form onSaveInput={saveValue} onSaveFormSubmitted={saveFormSubmitted} />
      
      <StoreValue.Provider
        value={{
          input: inputText,
          language: language,
          software: software,
          matches: matches,
          warnings: warnings,
        }} >

        <div className="Lan-container">
          <software />
          <warnings />
          <languages />
          <matches />
         
          <div
            className="save-container"
            style={{ display: inputText ? "block" : "none" }} >
                 </div>
          <Save />
    
        </div>
        </StoreValue.Provider>
    
  </div>
  );
}

export default Lan;