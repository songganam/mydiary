import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const DiaryAdd = () => {
  return (
    <>
      <Header>DiaryAdd</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 추가 화면
        </h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 추가 화면</p>
      </Footer>
    </>
  );
};

export default DiaryAdd;
