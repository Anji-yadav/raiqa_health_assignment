import React, { useState } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  const handleAddToList = (num) => {
    if (!list.includes(num)) {
      const newList = [...list, num];
      setList(sortList(newList, sortOrder));
    }
  };

  const handleSortToggle = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    setList(sortList(list, newOrder));
  };

  const handleResetList = () => setList([]);

  const handleRemoveAtIndex = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const sortList = (arr, order) =>
    [...arr].sort((a, b) => (order === "asc" ? a - b : b - a));

  return (
    <div className="main-bg">
      <div className="card center-card">
        <h2 className="main-title">Counter & List App</h2>
        <Counter onAdd={handleAddToList} />
      </div>
      <div className="card center-card" style={{ marginTop: "1.5rem" }}>
        <ListView
          list={list}
          sortOrder={sortOrder}
          onSortToggle={handleSortToggle}
          onReset={handleResetList}
          onRemove={handleRemoveAtIndex}
        />
      </div>
    </div>
  );
}

export default App;



