import { useState } from "react";
import './Nav.css'

export function BotoncitoC (){
    const [colores, setColores] = useState(false);
    const toggleColores = ()=>{
        setColores(!colores);
    };
    return(
        <div>
                <button className="botones" onClick={toggleColores}> Colores </button>
                {colores  && (
                    <div>
                            <button className="opciones"><span> Blanco </span></button>
                            <button className="opciones"><span> Negro </span></button>
                            <button className="opciones"><span> Rojo </span></button>
                            <button className="opciones"><span> Azul </span></button>
                            <button className="opciones"><span> Amarillo </span></button>
                    </div>
                )}
        </div>
    )
}

export function BotoncitoT (){
    const [Talles, setTalles] = useState(false);
    const toggleSizes = ()=>{
        setTalles(!Talles);
    };
    return(
        <div>
                <button className="botones" onClick={toggleSizes}> Talles </button>
                {Talles  && (
                    <div>
                            <button className="opciones"><span> XS </span></button>
                            <button className="opciones"><span> S </span></button>
                            <button className="opciones"><span> M </span></button>
                            <button className="opciones"><span> L </span></button>
                            <button className="opciones"><span> XL </span></button>
                    </div>
                )}
        </div>
    )
}