import React, { useState, useRef } from "react";
import "./styles.css";
import Layout from "../Layout";

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://loremflickr.com/320/240/cat?lock=" + i,
  });
}

export default function CatFriends() {
  const itemsRef = useRef();
  const [index, setIndex] = useState(0);

  function scrollToCat(cat) {
    console.log("cat: ", cat);
    const map = getMap();
    console.log("map: ", map);
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  // In this example, itemsRef doesn’t hold a single DOM node.
  // Instead, it holds a Map from item ID to a DOM node.
  // (Refs can hold any values!)
  function setupMap(node, cat) {
    const map = getMap();
    if (node) {
      map.set(cat, node);
    } else {
      map.delete(cat);
    }
    return map;
  }
  return (
    <Layout>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
              scrollToCat(index + 1);
            } else {
              setIndex(0);
              scrollToCat(0);
            }
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={(node) => setupMap(node, cat.id)}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
