import styled from "styled-components";

export const SectionContainer= styled.section`
    height: 640px;
    display: flex;
    padding: 0 135px;
    box-sizing: border-box;
`;
export const ContainerConteudo = styled.div`
    margin-top: 138px;
    p{
        font-family: "Sora", sans-serif;
        font-weight: 600;
        font-size: 48px;
        color: #293145;
        line-height: 60.48px;
        position: relative;
        margin-bottom: 66px;
    }
    a{
        text-decoration: none;
        color: #ffffff;
        padding: 16px 36px;
        background-color: #0F9AFE;
        border-radius: 20px;
        font-family: 'inter';
        font-size: 20px;
        font-weight: 600;
        transition: 0.3s;
    }
    a:hover{
        color: #0F9AFE;
        background-color: #ffffff ;
        border: 2px solid #0F9AFE;
    }
`;
export const ImagemG = styled.img`
    height: 500px;
    width: 500px;
`;