import styled from "styled-components";
import NoteBook from'../../assets/img/notebook.svg'

export const ContainerContato = styled.section`
    width: 100%;
    height: 382px;
    background-image: url(${NoteBook});
    text-align: center;
    padding-top: 50px;
    box-sizing: border-box;
    h3{
        font-family: 'Sora', sans-serif;
        font-weight: 600;
        font-size: 40px;
        line-height: 50.4px;
        color: #ffffff;
        margin-bottom: 16px;
    }
    p{
       
        width: 458px;
        margin: auto;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 25px;
        color: #DBDBDB;
        margin-bottom: 100px;
    }
    input{
        padding: 10px;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 18px;
        color: #DBDBDB;
        background: transparent ;
        border: none;
        border-bottom: 2px solid #DBDBDB;;
    }
    button{
    
        text-decoration: none;
        width: 118px;
        height: 35px;
        border-radius: 50px;
        padding:  8px 32px;
        background: #0F9AFE;
        color: #ffffff;
        transition: 0.3s;
        box-sizing: border-box;

        font-family: 'Inter',sans-serif;
        font-size: 18px;
        font-weight: 500;
    
    }
    button:hover{
        color: #0F9AFE;
        background-color: #ffffff ;
        border: 2px solid #0F9AFE;
    }
`;