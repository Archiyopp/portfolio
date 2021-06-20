import React from "react";
import { useGlobalContext } from "../context";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const buttons = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

export default function Pagination() {
  const { setSearch, search } = useGlobalContext();
  const [offset, setOffset] = React.useState(0);
  const nextPage = () => {
    if (offset === 850) {
      setOffset(0);
      setSearch(`?limit=50`);
    } else {
      setSearch(`?limit=50&offset=${offset + 50}`);
      setOffset(offset + 50);
    }
  };
  const prevPage = () => {
    if (offset === 0 || search === "?limit=50") {
      setSearch(`?limit=50&offset=${850}`);
      setOffset(850);
    } else {
      setSearch(`?limit=50&offset=${offset - 50}`);
      setOffset(offset - 50);
    }
  };
  return (
    <div className="btn-container">
      <button onClick={prevPage} className="prev-btn">
        <FaArrowLeft />
      </button>
      {buttons.map((number) => {
        return (
          <button
            key={number}
            className={`page-btn ${
              offset === number * 50 - 50 ? "active-btn" : null
            }`}
            onClick={() => {
              setOffset(number * 50 - 50);
              setSearch(`?limit=50&offset=${number * 50 - 50}`);
            }}
          >
            {number}
          </button>
        );
      })}
      <button onClick={nextPage} className="next-btn">
        <FaArrowRight />
      </button>
    </div>
  );
}
