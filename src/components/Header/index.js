import Logo from '../../assets/img/logo.svg'
import { ContainerCabecalho, ListaNav } from './styled'
export default function Header(){
    return (
        <ContainerCabecalho>
            <img src={Logo} alt='logo da Rachi' />
            <nav>
                <ListaNav>
                    <li><a href="#">Funcionalidades</a></li>
                    <li><a href="#">App</a></li>
                    <li><a href="#">Planos</a></li>
                    <li><a href="#">Contatos</a></li>
                </ListaNav>
            </nav>
        </ContainerCabecalho>
    )
}