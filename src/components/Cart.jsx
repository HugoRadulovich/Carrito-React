import {  useContext } from "react"
import { CartContext } from "../context/cart"




export const Cart = () => {

    const {cart,deleteCart} = useContext(CartContext)



    return (
        <ul className="">
            {
                cart?.map(product => (
                    <li className='' key={product.id}>
                        <img src={product.thumbnail} alt="" />
                        <p className="">{product.title}</p>
                        <p className="">${product.price}</p>
                        <button className="">Cantidad: </button>
                    </li>
                ))
            }
             <button className="" onClick={()=> deleteCart()}>Borrar Todo</button>
        </ul>
       
    )
}
