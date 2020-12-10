import "./App.css";
import SearchFilters from "./components/search-filters/SearchFilters";
import ListJokes from "./components/list-jokes/ListJokes";
import React, { useState } from "react";

let uniqueJokes = [];

function App() {
  const [jokes, setJokes] = useState();
  const [uniqueJokesCount, setUniqueJokesCount] = useState(uniqueJokes.length);
  

  const getQueryParams = (values) => {
    let str = [];
    if (values.firstName !== "") str.push(`firstName=${values.firstName}`);
    if (values.lastName !== "") str.push(`lastName=${values.lastName}`);
    if (values.category !== "") str.push(`limitTo=${[values.category]}`);
    return str.join("&");
  };
  const getJokes = (values) => {
    fetch(
      `https://api.icndb.com/jokes/random/${values.amount}?${getQueryParams(
        values
      )}`
    )
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.value);
        res.value.forEach((item) => {
          if (!uniqueJokes.includes(item.id)) {
            uniqueJokes.push(item.id)
          }
        })
        setUniqueJokesCount(uniqueJokes.length);
      });
  };
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>CN-JOKES</h1>
      <SearchFilters getJokes={getJokes}></SearchFilters>
      <ListJokes jokes={jokes} uniqueJokes={uniqueJokesCount}></ListJokes>
    </div>
  );
}

export default App;
