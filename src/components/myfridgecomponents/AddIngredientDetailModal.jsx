import React from "react";

const AddIngredientDetailModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "600px",
          height: "400px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <h2>재료 추가</h2>

        <p>여기에 재료 선택 UI가 들어갈 예정</p>

        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default AddIngredientDetailModal;
