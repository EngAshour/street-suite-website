import { useState } from "react";
import "./SearchInput.css";

export default function SearchInput({
  placeholder,
  height,
  iconSrc,
  marginInlineEnd,
  marginInlineStart,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div
      style={{
        marginInlineEnd: marginInlineEnd,
        marginInlineStart: marginInlineStart,
      }}
      className="search-bar"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        style={{ height: height }}
      />
      <img src={iconSrc || "search.svg"} alt="Search icon" />
    </div>
  );
}
