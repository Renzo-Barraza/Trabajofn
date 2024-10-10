import './Nav.css'
import { BotoncitoC } from './botones';
import { BotoncitoT } from './botones';
import Image from '../img/carro.png'

export function Nav(){
    return (
        <>
        <header>
            <h1>Catálogo</h1>
        </header>
            <nav>
                <div>
                    <button className='botones'>Home</button>
                    <button id='carrito'>
                        <img id='carritodecompra' src={Image} alt="Carrito" />
                    </button>
                    <BotoncitoC />
                    <BotoncitoT />
                </div>
            </nav>
        </>
    );
}