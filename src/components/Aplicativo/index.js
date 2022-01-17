import Play from '../../assets/img/btn1.svg'
import Store from '../../assets/img/btn2.svg'
import Sofa from '../../assets/img/sofa.svg'
import { ContainerAplica, ContainerConteudo, ImgSofa } from './styled'
export default function Aplicativo(){
    return(
        <ContainerAplica>
            <ContainerConteudo>
                <h2>Baixe o app para desfrutar mais!</h2>
                <p>Amet in elementum nulla scelerisque dui, egestas at. Elit<br/> consectetur turpis elementum amet vitae et etiam nec.<br/> Varius volutpat hac adipiscing tincidunt pretium.</p>

                <a href="#">
                    <img src={Play} />
    
                </a>
                <a href="#">
                  <img src={Store} />
                </a>

            </ContainerConteudo>
            <ImgSofa src={Sofa} />
        </ContainerAplica>
    )
}