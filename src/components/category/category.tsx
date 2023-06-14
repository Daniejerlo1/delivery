import React from "react";

interface Props {
  name: string;
  icon: React.ReactNode;
}

function Category({ name, icon }: Props) {
  return (
    <div>
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default Category;
