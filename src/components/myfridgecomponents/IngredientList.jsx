import React from "react";
import IngredientCard from "./IngredientCard";
import { GridStyle, GridWrapperStyle } from "../../pages/myfridge/style";

const dummyIngredients = [
  { id: 1, name: "토마토" },
  { id: 2, name: "양파" },
  { id: 3, name: "감자" },
  { id: 4, name: "계란" },
  { id: 5, name: "치즈" },
  { id: 6, name: "고기" },
  { id: 7, name: "토마토" },
  { id: 8, name: "양파" },
  { id: 9, name: "감자" },
  { id: 10, name: "계란" },
  { id: 11, name: "치즈" },
  { id: 12, name: "고기" },
  { id: 13, name: "토마토" },
  { id: 14, name: "양파" },
  { id: 15, name: "감자" },
  { id: 16, name: "계란" },
  { id: 17, name: "치즈" },
  { id: 18, name: "고기" },
  { id: 19, name: "토마토" },
  { id: 20, name: "양파" },
  { id: 21, name: "감자" },
  { id: 22, name: "계란" },
  { id: 23, name: "치즈" },
  { id: 24, name: "고기" },
];

const IngredientList = () => {
  return (
    <GridWrapperStyle>
      <GridStyle>
        {dummyIngredients.map((item) => (
          <IngredientCard key={item.id} name={item.name} />
        ))}
      </GridStyle>
    </GridWrapperStyle>
  );
};

export default IngredientList;
