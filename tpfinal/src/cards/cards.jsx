import { data } from "./data";
import './cards.css'

export const Cards = ({Productos, setProductos}) =>{ 
    const agregarProducto = (product) => {

        if (Productos.find(item => item.id === product.id)){
            const abcd = Productos.map(item => item.id === product.id ?
                {...item, cantidad: item.cantidad + 1} : item
            );
            return setProductos([...abcd]);
        }
        setProductos(...Productos, product)
        console.log(Productos)
    }
    
    return(
    <div className="conteiner-cards">
        {data.map(product => (
            <div className="producto" key={product.id}>
                <div>
                    <img className="ropa" src={product.img}></img>
                </div>
                <h4>{product.producto}</h4>
                <h3>{product.talle}</h3>
                    <p> {product.precio} </p>
                    <button className="añadirBoton" onClick={()=> agregarProducto(product)}> Añadir al carrito </button>
            </div>
        ))}
    </div>
    );
};