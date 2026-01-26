import React from "react";
import { CardStyle, CardTextStyle, IconStyle } from "../../pages/myfridge/style";

const IngredientCard = ({ name }) => {
  return (
    <CardStyle>
      <IconStyle>🥬</IconStyle>
      <CardTextStyle>{name}</CardTextStyle>
    </CardStyle>
  );
};

export default IngredientCard;
