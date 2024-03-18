import React, { Fragment, Component } from "react";
import styled from "styled-components";
import MainContainer from "../Container";

const FirstSectionBackground = styled.header` 
    width : 100%;
    height : 300px;
    background-color: #F7F8F0;
`;

/* 함수형 컴포넌트 */
export default function FirstSection() {
    return (
        <FirstSectionBackground>
            <MainContainer>

            </MainContainer>
        </FirstSectionBackground>
    );
}
