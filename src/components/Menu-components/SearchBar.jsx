import React from "react";

function SearchBar() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Menu</h1>
        <div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => filterMenu("all")}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => filterMenu("burgers")}
            >
              Burgers
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => filterMenu("sides")}
            >
              Sides
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => filterMenu("desserts")}
            >
              Desserts
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => filterMenu("drinks")}
            >
              Drinks
            </button>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default SearchBar;
