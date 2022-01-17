import Garoto from '../../assets/img/garoto.svg'
import { ContainerConteudo, ImagemG, SectionContainer } from './styled'
export default function Cadastro(){
    return(
        <SectionContainer>
            <ContainerConteudo>
                <p>Rachi,<br/>é tudo que você<br/>precisa em um só lugar</p>
                <a href="#" >Cadastre-se</a>
            </ContainerConteudo>
            <ImagemG src={Garoto} alt='Garoto com um notebook'/>

        </SectionContainer>
    )
}