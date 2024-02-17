/* eslint-disable jsx-a11y/anchor-is-valid */
import "./FeedItem.css";

export default function FeedItem({
  name,
  value,
  percentageClr,
  isRisk,
  isExpand,
  onClick,
}) {
  return (
    <>
      <div className="feed-item" onClick={onClick}>
        <div className="item-name">
          <img
            style={{ width: "35px" }}
            src="alert-strip.svg"
            alt="alert strip icon"
          />
          {name}
        </div>
        <div className="item-value item-divider">
          <img style={{ width: "25px" }} src="paper.svg" alt="paper icon" />
          {value}
        </div>
        <div
          className="item-percentage item-divider"
          style={{ color: percentageClr }}
        >
          <img style={{ width: "25px" }} src="stock.svg" alt="stock icon" />
          -0.25%
        </div>
        <div className="item-risk item-divider">
          <img
            style={{ width: "25px" }}
            src={isRisk === true ? "money.svg" : "money-low.svg"}
            alt="money icon"
          />
          {isRisk === true ? "High Risk" : "Low Risk"}
        </div>
      </div>
      {isExpand && (
        <div className="expanded-box">
          <strong>${name}</strong> just announced an acquisition of $NFLX at{" "}
          <strong>${value} B</strong>. <br /> <br />
          This is an <a href="#">arbitrage opportunity</a>, with the max gain
          being %X if the deal closes, but the possible risk is %Y if the deal
          fails, If the deal success is % and therefore the recommended play is{" "}
          <a href="#">long/short</a> $ABC
        </div>
      )}
    </>
  );
}
