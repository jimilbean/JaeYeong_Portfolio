import logo from './logo.svg';
import './App.css';

import styled, { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';
import MainContainer from './components/Container';
import FirstSection from './components/first_section/FirstSection';

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
  }
  body{
      line-height: 1;
      font-family: 'Noto Sans KR', sans-serif;
      background-color: #F6F9F0;
      margin-bottom: 100px;
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

function App() {
  return (
    <Fragment>
        <FirstSection>
           
        </FirstSection>
    </Fragment>
  );
}

export default App;
