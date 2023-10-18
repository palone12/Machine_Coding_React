import { useCallback, useRef, useState } from "react";
import "./App.css";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getData = useCallback((query, pageNumber) => {
    return new Promise(async (resolve, reject) => {
      try {
        const promise = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: query,
              page: pageNumber,
            })
        );
        const data = await promise.json();
        console.log(data);
        resolve();
        setData((prevData) => [...prevData, ...data.docs]);
      } catch (e) {
        reject();
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <input placeholder="Search Here" value={input} onChange={handleInput} />

      <InfiniteScroll getData={getData} data={data} input={input} />
    </div>
  );
}

export default App;
