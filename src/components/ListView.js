import React from "react";

function ListView({ list, sortOrder, onSortToggle, onReset, onRemove }) {
  if (list.length === 0) {
    return <p style={{ textAlign: "center", color: "#666" }}>No numbers added yet.</p>;
  }

  const maxVal = Math.max(...list);
  const minVal = Math.min(...list);

  return (
    <div>
      {/* Header row with Reset + Sort buttons */}
      <div className="list-header">
        <span>Numbers List</span>
        <button className="reset-btn" onClick={onReset}>Reset</button>
        <button className="sort-btn" onClick={onSortToggle}>
          Sort {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>

      {/* The number items */}
      <ul className="number-list">
        {list.map((num, idx) => (
          <li key={idx} className="number-item">
            <span
              className={
                num === maxVal
                  ? "number-value max"
                  : num === minVal
                  ? "number-value min"
                  : "number-value"
              }
            >
              {num}
            </span>
            <span className="number-index">#{idx + 1}</span>
            <button
              className="remove-x"
              onClick={() => onRemove(idx)}
              title="Remove"
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {/* Footer showing total */}
      <div className="list-footer">Total numbers: {list.length}</div>
    </div>
  );
}

export default ListView;


