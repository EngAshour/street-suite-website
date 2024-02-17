import Profile from "../Profile/Profile";
import SidebarItem from "../SidebarItem/SidebarItem";

import "./Sidebar.css";

const SidebarItems = [
  {
    name: "Alerts",
    imgSrc: "alerts.svg",
    isActive: true,
  },
  {
    name: "Training",
    imgSrc: "training.svg",
  },
  {
    name: "Automation",
    imgSrc: "automation.svg",
    isComingSoon: true,
  },
  {
    name: "Portfolio",
    imgSrc: "portfolio.svg",
    isComingSoon: true,
  },
  {
    name: "Trading",
    imgSrc: "trading.svg",
    isComingSoon: true,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <img
          className="logo-img"
          src="street_suite_logo.svg"
          alt="street_suite_logo"
        />
        <ul>
          {SidebarItems.map((item) => (
            <SidebarItem key={item.name} {...item} />
          ))}
        </ul>
      </div>
      <div className="sidebar-footer">
        <Profile />
        <div className="copyright">Street Suite. 2.0</div>
      </div>
    </aside>
  );
}
