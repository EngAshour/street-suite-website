import IndustryItem from "../IndustryItem/IndustryItem";
import "./Industry.css";

export default function Industry() {
  const IndustryItems = [
    {
      name: "Health care",
      imgSrc: "health-care.svg",
    },
    {
      name: "Materials",
      imgSrc: "materials.svg",
    },
    {
      name: "Energy",
      imgSrc: "energy.svg",
    },
    {
      name: "Consumer discretionary",
      imgSrc: "consumer-discretionary.svg",
    },
    {
      name: "Consumer staples",
      imgSrc: "consumer-staples.svg",
    },
    {
      name: "Real estate",
      imgSrc: "real-estate.svg",
    },
    {
      name: "IT",
      imgSrc: "it.svg",
    },
    {
      name: "Communication",
      imgSrc: "communication.svg",
    },
    {
      name: "Industrials",
      imgSrc: "industrials.svg",
    },
    {
      name: "Utilities",
      imgSrc: "utilities.svg",
    },
    {
      name: "Financials",
      imgSrc: "financials.svg",
    },
  ];

  return (
    <div className="industry-container">
      <div className="industry-title">
        <div className="down-arrow"></div>
        <h4>Industry</h4>
      </div>
      <div className="industry">
        {IndustryItems.map((item) => {
          return <IndustryItem key={item.name} {...item} />;
        })}
      </div>
    </div>
  );
}
