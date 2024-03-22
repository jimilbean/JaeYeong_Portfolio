import React from "react";
import styled from "styled-components";
import libraryIcon from "../../../../assets/image/library_icon.png"




export default function ProjectList(){
    return(
        <ProjectListDesign>
            <ProjectTitleDesign>
                <img src ={libraryIcon}></img>
                Project
            </ProjectTitleDesign>

        </ProjectListDesign>
    )
}

const ProjectListDesign = styled.div`
    width : 100%;
    height : 89%;
    background-color: #121212;
    border-radius : 15px;
`

const ProjectTitleDesign = styled.div`
    width : 100%;
    color : #828282;
    font-size: 22px;
    font-family: "SCDream7" !important;
    padding: 25px;
    display: flex;
    align-items: center;
    
    &>img {
        width : 13px;
        margin-right: 8px;

    }
`