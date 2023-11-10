import React, { useState, useEffect } from "react";
import Accordion from "./accordion";
import axios from "axios";

function App() {
  const [redditData, setRedditData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.reddit.com/r/reactjs.json"
        );
        setRedditData(response.data); // Assuming the response is an array of data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className="task">
      <Accordion data={redditData} />
    </div>
  );
}

export default App;
