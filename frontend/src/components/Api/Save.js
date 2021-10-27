import { useContext } from "react";
import { StoreValue } from "./Lan";

function Save(props) {
  const {
    input,
    language,
    software,
    warnings,
    matches,

  } = useContext(StoreValue);

  return (
    <div
      style={{ display: input ? "block" : "none" }}
      className={props.className}
    >
      
  
      <h5>
        <strong>language:</strong> {language}
      </h5>
      <p>
        <strong>matches:</strong> {matches}
      </p>
      <p>
        <strong>warnings:</strong> {warnings}
      </p>
      <p>
        <strong>software:</strong> {software}
      </p>
    
    </div>
  );
}

export default Save;