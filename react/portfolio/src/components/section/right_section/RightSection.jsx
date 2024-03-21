import React, { Fragment, Component } from "react";
import styled from "styled-components";
import MainContentSection from "./main_content/MainContentSection"

const RightSectionContainer = styled.header` 
    width : 85%;
    padding : 5px;
`;

/* 함수형 컴포넌트 */
export default function LeftSection() {
    return (
        <RightSectionContainer>
            <MainContentSection>
                
            </MainContentSection>
        </RightSectionContainer>
    );
}
