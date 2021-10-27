import { bestSuggestion } from "languagetool-api";
import React, { useState } from "react";
// import { Link } from "react-router-dom";

import "../CSS/Api.css";

const languagetool = require("languagetool-api");

// const initialText = `Typos hapen. We striving to correct them. Individuals with dyslexia often struggles with spelling, grammar, reading and writing. The Language Tool Api is used to check a spell checking app.  input your own text to get it proofread.`;

const Api = () => {
  const [info, setInfo] = useState([]);
  const [mistakes, setMistakes] = useState([{}]);

  const handleSubmit = (e) => e.preventDefault();
  console.log();

  const handleChange = (e) => {
    setInfo(e.target.value);
    console.log(info);
  };

  const checkInfo = (text) => {
    console.log(text, languagetool);
    languagetool.check(
      {
        language: "en-US",
        text: text,
      },
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("res", res);
          languagetool.showMistakes(res, (mis) => {
            setMistakes(mis);
            // console.log("showMistakes", mistakes)
          });

          languagetool.bestSuggestion(res, (mis) => {
            setMistakes(mis);
            // console.log("mistakes", mistakes)
          });
        }
      }
    );
  };
  // const bestSuggestion =
  console.log("mistakes", mistakes);
  return (
    <div className="access">
      <h1 className="access">
        Proofreading API
        <label htmlFor=""></label>
        <input
          onSubmit={handleSubmit}
          onChange={handleChange}
          id="info"
          type="text"
          spellcheck={true}
          placeholder=""
        />
       
    
      </h1>

      <button type="button" id="getproofreader" onClick={() => checkInfo(info)}>
        Click Here
      </button>
      {mistakes.map(
        (item, index) => console.log(item.bestSuggestion)

        
      )}
      <h1 className="access">mistake: {mistakes[0].mistake}</h1>
      <h1 className="access">Best Suggestion: {mistakes[0].bestSuggestion}</h1>
     
    </div>
  );
};

export default Api;

