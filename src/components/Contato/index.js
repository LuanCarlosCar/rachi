import { ContainerContato } from "./styled";

export default function Contato(){
    return(
        <ContainerContato>
            <h3>Contato</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            <form>
            <input type='email' placeholder="Seu melhor e-mail" />
            <button>Enviar</button>
            </form>
        </ContainerContato>
    )
}