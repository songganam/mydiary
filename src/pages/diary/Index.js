import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary 홈</Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫화면</h2>
      </Main>

      <Footer>
        {" "}
        <p>Copyright 2023. 첫화면</p>
      </Footer>
    </>
  );
};

export default Index;
