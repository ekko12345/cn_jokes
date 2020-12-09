import "./App.css";
import SearchFilters from "./components/search-filters/SearchFilters";
import ListJokes from "./components/list-jokes/ListJokes";
import React, { useState } from "react";

function App() {
  const [jokes, setJokes] = useState();

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
        console.log(jokes);
      });
  };
  return (
    <div className="App">
      <SearchFilters getJokes={getJokes}></SearchFilters>
      <ListJokes jokes={jokes}></ListJokes>
    </div>
  );
}

export default App;
