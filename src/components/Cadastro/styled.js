import styled from "styled-components";

export const SectionContainer= styled.section`
    height: 40rem;
    display: flex;
    justify-content: space-between;
    padding: 0 8.4375rem;
`;
export const ContainerConteudo = styled.div`
    margin-top: 8.4375rem;
    p{
        font-family: "Sora", sans-serif;
        font-weight: 600;
        font-size: 3rem;
        color: #293145;
        line-height:3.78rem;
        position: relative;
        margin-bottom: 4.125rem;
    }
    a{
        text-decoration: none;
        color: #ffffff;
        padding: 1rem 2.2rem;
        background-color: #0F9AFE;
        border-radius: 20px;
        font-family: 'inter';
        font-size: 1.25rem;
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
    height: 31.25rem;
    width:  31.25rem;
`;