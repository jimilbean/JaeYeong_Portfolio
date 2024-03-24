import React from "react";
import styled from "styled-components";
import libraryIcon from "../../../../assets/image/library_icon.png"

export default function ProjectList(){

    const projectLanguageList = ['Android', 'Ios', 'Kotlin', 'Java', 'Swift', 'SwiftUI', 'Compose']

    var selectedCategoryList = [0, 3, 2];

    return(
        <ProjectListDesign>
            <ProjectTitleDesign>
                <img src ={libraryIcon}></img>
                Project
            </ProjectTitleDesign>
            <ProjectCategorySection>
                {
                    projectLanguageList.map(
                        (item, index) => (
                            <ProjectCategoryItem>
                                {item}
                            </ProjectCategoryItem>
                        )
                    )
                }        
            </ProjectCategorySection>

        </ProjectListDesign>
    )
}

const ProjectListDesign = styled.div`
    width : 100%;
    height : 89%;
    background-color: #121212;
    border-radius : 15px;
`

//프로젝트 텍스트 디자인
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

//프로젝트 카테고리 영역 디자인
const ProjectCategorySection = styled.div`
    /* width : 100%; */
    /* padding-left: 10px;
    padding-right: 10px; */
    padding: 10px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        height: 10px;
        padding: 10px;
        display: none;
    }
    &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
    }
`

//프로젝트 카테고리 아이템 디자인
const ProjectCategoryItem = styled.div`
    font-size: 15px;
    font-family: "SCDream7" !important;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 7px;
    padding-bottom: 7px;
    color : #FFFFFF;
    border: 3px solid #828282;
    border-radius: 15px;
    margin-right: 7px;
    cursor : pointer;
    &:hover {
        color : #1ed55f;
        border: 3px solid #1ed55f;
    }
   
`
