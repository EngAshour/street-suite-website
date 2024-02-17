import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Feed from "../components/Feed/Feed";

import "./Alerts.css";

export default function Alerts() {
  return (
    <main>
      <div className="placeholder"></div>
      <Sidebar />
      <section className="alerts">
        <Header />
        <Feed />
      </section>
    </main>
  );
}
