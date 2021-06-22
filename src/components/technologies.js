import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { abilities } from "../data";

function Technologies() {
  return (
    <ul className="tech">
      {abilities.map((item, index) => {
        const { icon, skill } = item;
        return (
          <li key={skill} className="tech-item">
            <div>
              {icon}
              <p>{skill}</p>
            </div>
            <IoCheckmarkCircle />
          </li>
        );
      })}
    </ul>
  );
}

export default Technologies;
