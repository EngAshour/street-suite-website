import SearchInput from "../SearchInput/SearchInput";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="page-title">ALERTS</div>
      <SearchInput placeholder="Search By..." />
      <img src="notification.svg" alt="notification icon" />
    </header>
  );
}
