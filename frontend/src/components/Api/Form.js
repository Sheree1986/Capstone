import { useEffect, useRef, useState } from "react";
import "./styles/Form.css";

function Form(props) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (formSubmitted) {
      props.onSaveFormSubmitted(formSubmitted);
    } else {
      props.onSaveFormSubmitted(false);
    }
  }, [formSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSaveInput(inputRef.current.value);
    inputRef.current.value = "";
    setFormSubmitted(!formSubmitted);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="Typos hapen. We striving to correct them. Individuals with dyslexia often struggles with spelling, grammar, reading and writing. The Language Tool Api is used to check a spell checking app.  input your own text to get it proofread." ref={inputRef} />
      <button>Search</button>
    </form>
  );
}

export default Form;