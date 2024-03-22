import "./App.css";

import styled, { createGlobalStyle } from "styled-components";
import { Fragment } from "react";
import LeftSection from "./components/section/left_section/LeftSection";
import RightSection from "./components/section/right_section/RightSection";
import Footer from "./components/footer/Footer";


const GlobalStyles = createGlobalStyle`

  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 10px;
      vertical-align: baseline;
      font-family: 'SCDream7' !important;
  }
  html {
    height : 100%
  }
  body{
      line-height: 1;
      background-color: #000000;
      margin-bottom: 100px;
      height : 100%
  }
  ol, ul{
      list-style: none;
  }
  button {
      border: 0;
      background: transparent;
      cursor: pointer;
  }
`;

const VerticalContainer = styled.div`
  width: 100%;
  min-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const HorizontalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding : 10px;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <VerticalContainer>
        <HorizontalContainer>
          <LeftSection></LeftSection>
          <RightSection></RightSection>
        </HorizontalContainer>
        <Footer></Footer>
      </VerticalContainer>
    </Fragment>
  );
}

export default App;
