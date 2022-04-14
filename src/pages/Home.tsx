/**
* Usamos essa maneira de import para que o webpack possa fazer sua macumba/mágica 
**/

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import "../styles/auth.scss"
import { Button } from '../components/button';

export function Home(){
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
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logotipo do Google"/>
                        Criar sala com o Google
                    </button>
                    <div className="separator"> ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}