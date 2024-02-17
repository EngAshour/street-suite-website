import "./SearchTerm.css";

export default function SearchTerm({ name }) {
  return (
    <div className="search-term">
      <span className="name">{name}</span>
      <span className="cross"></span>
    </div>
  );
}
