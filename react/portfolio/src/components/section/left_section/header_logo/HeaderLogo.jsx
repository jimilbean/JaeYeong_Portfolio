import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect'

export default function HeaderLogo(){

    return(
        <LogoSectionDesign>
            <LogoDesign>
                <Typewriter
                    options={{
                        strings : "『 Yeong DevLog. 』",
                        autoStart : true,
                        delay : 150,
                        pauseFor : 5000,
                        loop : true,
                        wrapperClassName : "LogoName"
                    }}
                />
            
            </LogoDesign>
        </LogoSectionDesign>
    )
}

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
    &>div>span{
        color : #1ed55f;
        font-size : 25px;
        font-family: 'SCDream9' !important;
    }
`