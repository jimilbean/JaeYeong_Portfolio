import React from "react";
import styled from "styled-components";

const LogoSectionDesign = styled.div`
    width : 100%;
    height : 10%;
    background-color: #121212;
    border-radius : 15px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const LogoDesign = styled.div`
    color : white;
    font-size : 25px;
    font-family : 'SCDream1';
`

export default function HeaderLogo(){
    return(
        <LogoSectionDesign>
            <LogoDesign>
                Yeong's Portfolio
            </LogoDesign>
        </LogoSectionDesign>
    )
}