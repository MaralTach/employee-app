import React from "react";

const List = ({ startIndex, data }) => {
  const endIndex = Math.min(startIndex + 5, data.length); // Gösterilecek son indeks
  const visibleData = data.slice(startIndex, endIndex); // Gösterilecek veri aralığı

  return (
    <>
      {visibleData.map(({ id, name, image, email, age }) => (
        <article className="person" key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>Email:{email}</p>
            <p>Age:{age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;



