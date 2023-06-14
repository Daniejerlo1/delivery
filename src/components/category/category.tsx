import React from "react";
import "./category.scss";

interface Props {
  name: string;
  icon: string;
}

function Category({ name, icon }: Props) {
  return (
    <div className="category">
      <div className='category-circulo'>
        <img src={icon} alt="icone" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Category;
