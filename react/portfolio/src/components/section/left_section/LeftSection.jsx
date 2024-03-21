import React, { Fragment, Component } from "react";
import styled from "styled-components";

import HeaderLogo from "./header_logo/HeaderLogo"
import ProjectList from "./project_list/ProjectList"


const LeftSectionContainer = styled.div` 
    width : 15%;
    padding : 5px;
    display : flex;
    justify-content : space-between;
    flex-direction : column;
`;

/* 함수형 컴포넌트 */
export default function LeftSection() {
    return (
        <LeftSectionContainer>
            <HeaderLogo></HeaderLogo>
            <ProjectList></ProjectList>
        </LeftSectionContainer>
    );
}
