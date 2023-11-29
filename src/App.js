import styled from "@emotion/styled";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const TopBar = styled.header`
    display: flex;
    width: 100%;
    height: 64px;
    padding: 8px 4px;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    flex-shrink: 0;
    background: #fef7ff;

    h2 {
      font-weight: 400;
    }

    button {
      display: flex;
      width: 48px;
      height: 48px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;

      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  `;

  const Contents = styled.main`
    width: 100%;
    min-height: 500px;
  `;

  const BotBar = styled.footer`
    display: flex;
    width: 100%;
    height: 80px;
    padding: 0px 16px 0px 4px;
    align-items: center;
    gap: 276px;
    flex-shrink: 0;
  `;

  return (
    <div className="layout">
      <div className="wrap">
        <Header></Header>
        <Contents>중심컨텐츠</Contents>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
