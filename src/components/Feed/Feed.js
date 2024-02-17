import { useState } from "react";
import FeedItem from "../FeedItem/FeedItem";
import "./Feed.css";

const feedItemsArr = [
  {
    id: 1,
    name: "AMZN",
    value: 200,
    percentageClr: "red",
    isRisk: false,
    isExpand: false,
  },
  {
    id: 2,
    name: "TSLA",
    value: 200,
    percentageClr: "green",
    isRisk: true,
    isExpand: false,
  },
  {
    id: 3,
    name: "ABQQ",
    value: 200,
    percentageClr: "green",
    isRisk: true,
    isExpand: false,
  },
  {
    id: 4,
    name: "MSFT",
    value: 200,
    percentageClr: "red",
    isRisk: false,
    isExpand: false,
  },
  {
    id: 5,
    name: "PYPL",
    value: 200,
    percentageClr: "green",
    isRisk: false,
    isExpand: false,
  },
  {
    id: 6,
    name: "NFLX",
    value: 200,
    percentageClr: "red",
    isRisk: false,
    isExpand: false,
  },
  {
    id: 7,
    name: "NFLX",
    value: 200,
    percentageClr: "red",
    isRisk: false,
    isExpand: false,
  },
  {
    id: 8,
    name: "NFLX",
    value: 200,
    percentageClr: "red",
    isRisk: false,
    isExpand: false,
  },
  {
    id: 9,
    name: "NFLX",
    value: 200,
    percentageClr: "red",
    isRisk: false,
    isExpand: false,
  },
  {
    id: 10,
    name: "NFLX",
    value: 200,
    percentageClr: "red",
    isRisk: false,
    isExpand: false,
  },
];

export default function Feed() {
  const [feedItems, setFeedItems] = useState(feedItemsArr);

  function handleExpand(id) {
    setFeedItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, isExpand: !item.isExpand };
        }
        return item;
      });
    });
  }
  return (
    <div className="feed">
      {feedItems.map((item) => (
        <FeedItem
          onClick={() => handleExpand(item.id)}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
