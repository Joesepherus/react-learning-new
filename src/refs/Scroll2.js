import { useRef, useState } from "react";
import Layout from "../Layout";

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}

export default function Scroll2() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

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
        <button onClick={() => scrollToCat(catList[0])}>Tom</button>
        <button onClick={() => scrollToCat(catList[5])}>Maru</button>
        <button onClick={() => scrollToCat(catList[9])}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li key={cat} ref={(node) => setupMap(node, cat)}>
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
