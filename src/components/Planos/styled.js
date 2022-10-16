import styled from "styled-components";

export const ContainerPlanos = styled.section`
    height: 850px;
    text-align: center;
    background: #ffffff;
    padding: 0 135px;
    
    h2{
        font-family: 'Sora',sans-serif;
        font-size: 40px;
        line-height: 50.4px;
        font-weight: 600;
        display: inline-block;
        margin-top: 50px;
        margin-bottom: 16px;
    }
    ul{
     
     display: flex;
     justify-content: center;
     align-items: center;
    
    }
`;
export const SubText = styled.p`
    font-family: 'Roboto',sans-serif;
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
    margin-bottom: 96px;

`;

export const Card1 = styled.li`
    width: 370px;
    height: 420px;
    background: #EFF8FF;
    border-radius: 8px;
    padding: 40px 32px;
    margin-right: 30px;
    box-sizing: border-box;
    &::after{
        margin-right: 0;
    }
    h3{
        font-family: 'Sora', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 30.24px;
        color: #293145;
        margin-bottom: 56px;
    }
    img{
        margin-bottom: 56px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 58px;
        color: #6E7275;
    }
    a{  
        text-decoration: none;
        height: 230px;
        width: 43px;
        border-radius: 50px;
        padding: 8px 80px 8px 80px;
        background: #0F9AFE;
        color: #ffffff;
        transition: 0.3s;
    }
    a:hover{
        color: #0F9AFE;
        background-color: #ffffff ;
        border: 2px solid #0F9AFE;
    }
`;
export const Card2 = styled.li`
    width: 370px;
    height: 471px;
    background: #293145;
    border-radius: 8px;
    padding: 32px;
    margin-right: 30px;
    box-sizing: border-box;
    h3{
        font-family: 'Sora', sans-serif;
        font-weight: 600;
        font-size: 32px;
        line-height: 40.32px;
        color: #ffffff;
        margin-bottom: 13.73px;
    }

    img{
        margin-bottom: 56px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 58px;
    }
    a{  
        text-decoration: none;
        height: 230px;
        width: 43px;
        border-radius: 50px;
        padding: 8px 80px 8px 80px;
        background: #0F9AFE;
        color: #ffffff;
        transition: 0.3s;
    }
    a:hover{
        color: #0F9AFE;
        background-color: #ffffff ;
        border: 2px solid #0F9AFE;
    }

`;

export const TextPlanoDestaque = styled.p`
    margin: auto;
    width: 100px;
    height: 20px;
    border-radius: 15px;
    padding: 5px  15px;
    color: #ffffff;
    background:#0F9AFE;
    text-transform: uppercase;

`;
export const TextPlanoPrincipal = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #DBDBDB;

`;