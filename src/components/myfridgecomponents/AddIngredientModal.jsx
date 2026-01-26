import React from 'react';
import S, { AddButton, Page, Wrapper } from '../../pages/myfridge/style';

const AddIngredientModal = ({onNext}) => {



  return (
    <Page>
      <Wrapper>
        <div>
          <img className='firdgeImg' src={`${process.env.PUBLIC_URL}/assets/images/fridge.png`} alt="냉장고" />
        </div>
        <div>
          <AddButton onClick={onNext}>냉장고를 채워볼까요?</AddButton>
        </div>
      </Wrapper>
    </Page>
  );
};

export default AddIngredientModal;