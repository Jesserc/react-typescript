import React from "react";

import { IState } from "../App";

const List: React.FC<IState> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-Header">
            <img src={person.img} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>

          <p>{`${person.age} years old`}</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return (
    <>
      <ul>{renderList()}</ul>
    </>
  );
};

export default List;
