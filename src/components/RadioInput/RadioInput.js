import { useState } from "react";
import "./RadioInput.css";

export default function RadioInput({ title, options, selectedInput }) {
  const [selected, setSelected] = useState(selectedInput);

  const handleOptionChange = (option) => {
    setSelected(option);
  };

  return (
    <div className="radio-container">
      <div className="radio-header">
        <div className="down-arrow"></div>
        <h4>{title}</h4>
      </div>

      <div className="radio-options">
        {options.map((option) => (
          <div
            key={option}
            className={`radio-option ${selected === option ? "selected" : ""}`}
            onClick={() => handleOptionChange(option)}
          >
            <div className="radio-circle">
              <div
                className={`inner-circle ${
                  selected === option ? "selected" : ""
                }`}
              ></div>
            </div>
            <div>{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
