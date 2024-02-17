import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchTerm from "../SearchTerm/SearchTerm";
import Industry from "../Industry/Industry";
import RadioInput from "../RadioInput/RadioInput";
import WheelInput from "../WheelInput/WheelInput";
import "./Filter.css";

export default function Filter() {
  const [appliedFilters] = useState(["Real Estate"]);
  return (
    <div className="filter">
      <h3>Filters</h3>
      <div className="filters-applied-container">
        <h4>Filters Applied</h4>
        <button type="button" className="clear">
          Clear All
        </button>
        <div className="filters-applied">
          {appliedFilters.map((item) => {
            return <SearchTerm key={item} name={item} />;
          })}
        </div>
      </div>
      <div className="stock-container">
        <div className="stock">
          <h4>Stock</h4>
          <SearchInput
            placeholder="$ TICKER"
            height="27px"
            iconSrc="stock-search.svg"
            marginInlineStart="22px"
            marginInlineEnd="32px"
          />
        </div>
        <div className="filter-options">
          <Industry />
          <div className="filter-row">
            <div className="market-cap">
              <RadioInput
                title="Market Cap"
                options={["Micro", "Small", "Large"]}
                selectedInput="Large"
              />
            </div>
            <RadioInput
              title="Risk Level"
              options={["Low-Risk", "Mid Risk", "Low Risk"]}
              selectedInput="Mid Risk"
            />
          </div>
          <div className="filter-row">
            <div className="strategy">
              <WheelInput />
            </div>
            <WheelInput />
          </div>
        </div>
      </div>
      <button className="apply-button" type="button">
        Apply
      </button>
    </div>
  );
}
