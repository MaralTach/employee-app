import React from "react";
import data from "../helper/data";

const List = () => {
  return (
    <>
    {data.map((data) => {
      const { id, name, image, email, age } = data;
      return (
        <article className="person" key={id}>
          <img src={image} alt={"name"} />
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age} years</p>
          </div>
        </article>
      );
    })}
  
    </>
  );
};

export default List;