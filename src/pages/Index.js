import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { redirect } from "react-router";

const Index = () => {
  return (
    <>
      <Header>My Diary</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫화면</h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Index;
