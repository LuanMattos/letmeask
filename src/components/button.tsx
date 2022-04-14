import { useState, ButtonHTMLAttributes } from "react";
import "../styles/button.scss"

// type ButtonProps = {
//     text?:string,
//     children?: string
// }
// Aqui criamos a tipagem de maneira dinâmica que o próprio React proporciona
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * 1 - No React não podemos criar variáveis nativas esperando que ocorra mudança de estado (let, const e etc)
 * 
 * Gerenciamento de estado:
 * 
 * Os estados no React (não só o React) levam como regra a mudança de estado única, ou seja, no exemplo do setCounter, o estado nunca muda o valor
 *  apenas cria-se uma nova instância, o nome disso é imutabilidade
 * 
 * Clousures (funções aninhadas)
 * Note que a primeira vez que clicamos no botão (ao abrir a page pela primeira vez), notamos no console log que o valor se inicia com zero mesmo
 * mudando o seu valor teoricamente, isso tem a ver com o funcionamento das clousures, ou seja, o console.log estava executando a chamada anterior ainda, 
 * por isso sempre que clicamos no botão, o console ainda está executando a chamada anterior:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
 
**/ 
export function Button( props: ButtonProps ){
    /** 1  **/
    // let counter = 0;
    const [counter, setCounter] = useState(0);

    function increment(){
        /** 1  **/
        // counter ++;
        setCounter(counter + 1)
        console.log(counter)
    }
    return (
        // <button onClick={increment}>
        //     {counter}
        // </button>
        <button className="button" {...props} />
    )
    // return (
    //     <button>{props.text || props.children || 'default'}</button>
    // )
}