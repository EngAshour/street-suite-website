import { useState } from "react";
import "./WheelInput.css";

export default function WheelInput() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="wheel-container">
      <div className="wheel-title">strategy</div>
      <ul className="wheel">
        <li
          onClick={() => setSelectedIndex(0)}
          className={`wheel-input ${selectedIndex === 0 ? "selected" : ""}`}
        >
          Big Option Buys
        </li>
        <li
          onClick={() => setSelectedIndex(1)}
          className={`wheel-input ${selectedIndex === 1 ? "selected" : ""}`}
        >
          Merger Arbitrage
        </li>
        <li
          onClick={() => setSelectedIndex(2)}
          className={`wheel-input ${selectedIndex === 2 ? "selected" : ""}`}
        >
          Short Reports
        </li>
      </ul>
    </div>
  );
}
