import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIngredientModal from '../../components/myfridgecomponents/AddIngredientModal';
import IngredientList from '../../components/myfridgecomponents/IngredientList';
import AddIngredientDetailModal from '../../components/myfridgecomponents/AddIngredientDetailModal';

const MyFridge = () => {

  const [step, setStep] = useState("empty"); // empty | add

  return (
    <div>
      <h1>나의 냉장고</h1>
      <Link to={"/foodrecommendation"}>추천 요리 보기</Link>
      {/* 재료가 있을 때만 grid */}
      {step !== "empty" && <IngredientList />}
      {step === "empty" && (
        <AddIngredientModal onNext={() => setStep("add")} />
      )}
      {step === "add" && (
        <AddIngredientDetailModal onClose={() => setStep("empty")} />
      )}
      <p>컴포넌트</p>
    </div>
  );
};

export default MyFridge;