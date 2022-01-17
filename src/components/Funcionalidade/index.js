import Conect from '../../assets/img/conect.svg'
import Escudo from '../../assets/img/escudo.svg'
import Happy from '../../assets/img/happy.svg'
import { ContainerFuncionalidade, TextDestaque, TextNormal } from './styled'

export default function Funcinalidade (){
    return(
        <ContainerFuncionalidade>
            <h2>Como funciona</h2>
            <ul>
                <li>
                    <img src={Conect} alt='imagem' />
                    <TextDestaque>Crie conexões</TextDestaque>
                    <TextNormal>Lorem ipsum dolor sit amet,<br/> consecteteu</TextNormal>
                </li>
                <li>
                    <img src={Escudo} alt='imagem'/>
                    <TextDestaque>100% gratuito</TextDestaque>
                    <TextNormal>Lorem ipsum dolor sit amet,<br/> consecteteu</TextNormal>
                </li>
                <li>
                    <img src={Happy} alt='imagem' />
                    <TextDestaque>Compartilhamento</TextDestaque>
                    <TextNormal>Lorem ipsum dolor sit amet,<br/> consecteteu</TextNormal>
                </li>
            </ul>
        </ContainerFuncionalidade>
    )
}