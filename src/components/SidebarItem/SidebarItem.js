import "./SidebarItem.css";
export default function SidebarItem({ imgSrc, name, isActive, isComingSoon }) {
  return (
    <li
      className={`sidebar-item ${isActive ? "active" : ""}${
        isComingSoon ? "coming-soon" : ""
      }`}
    >
      <div className="sidebar-item-container">
        <div className="sidebar-item-img-container">
          <img src={imgSrc} alt={name} />
        </div>
        <span>{name}</span>
      </div>
    </li>
  );
}
