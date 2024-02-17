import "./IndustryItem.css";

export default function IndustryItem({ name, imgSrc }) {
  return (
    <div className="industry-item">
      <img width="15" src={imgSrc} alt={name} />
      <span>{name}</span>
    </div>
  );
}
