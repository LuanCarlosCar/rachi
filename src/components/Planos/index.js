import Preço1 from '../../assets/img/preço1.svg'
import Preço2 from '../../assets/img/preço2.svg'
import Preço3 from '../../assets/img/preço3.svg'
import { Card1, Card2, ContainerPlanos, SubText, TextPlanoDestaque, TextPlanoPrincipal  } from './styled'
export default function Planos(){
    return(
        <ContainerPlanos>
            <h2>Nossos Planos</h2>
            <SubText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia<br/> mi quis euismod ultrices.</SubText>



            <ul>
                <Card1>
                    <h3>Bronze</h3>
                    <img src={Preço1} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                    <a href="">Assinar</a>
                </Card1>
                <Card2>
                    <h3>Prata</h3>
                    <TextPlanoDestaque>preferido</TextPlanoDestaque>
                    <img src={Preço2}/>
                    <TextPlanoPrincipal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</TextPlanoPrincipal>
                    <a href="">Assinar</a>
                </Card2>
                <Card1>
                    <h3>ouro</h3>
                    <img src={Preço3}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                    <a href="">Assinar</a>
                </Card1>
            </ul>
        </ContainerPlanos>
    )
}