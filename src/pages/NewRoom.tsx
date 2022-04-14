/**
* Usamos essa maneira de import para que o webpack possa fazer sua macumba/mágica 
**/

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import "../styles/auth.scss"
import { Button } from '../components/button';

export function NewRoom(){
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração da aplicação"/>
                <strong>Crie salas de bate-papo</strong>
                <p>Fale com seus amigos ao vivo</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <div className="separator"> Criar uma nova sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                           Cirar sala
                        </Button>
                    </form>
                    <p>
                        Entrar em uma sala existente? <a href="#">Clique aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )
}