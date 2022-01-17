import  Styled  from "styled-components";


export const ContainerCabecalho = Styled.header`
    height: 70px;
	padding: 20px 135px;
	display: flex;
	align-items: center;
    background: #FFFFFF;
    justify-content: space-between;
    box-sizing: border-box;

`;

export const ListaNav= Styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
        color: #6E7275;
        
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 18px;
    }
    li{
        margin-right: 66px;
    }
    li:last-child {
    margin-right: 0 ;
    }
    a:hover{
        border-bottom: 2px solid #6E7275 ;

    }
`;