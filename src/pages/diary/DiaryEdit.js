import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header>My Diary 수정</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정 화면 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 수정 화면</p>
      </Footer>
    </>
  );
};

export default DiaryEdit;
