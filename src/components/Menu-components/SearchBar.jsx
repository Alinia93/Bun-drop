import React from "react";

function SearchBar(props) {
  return (
    <>
      <div className="d-flex justify-content-end align-items-center mb-4">
        <div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => props.filterMenu("all")}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => props.filterMenu("burgers")}
            >
              Burgers
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => props.filterMenu("sides")}
            >
              Sides
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => props.filterMenu("desserts")}
            >
              Desserts
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => props.filterMenu("drinks")}
            >
              Drinks
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
