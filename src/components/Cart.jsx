import {  useContext } from "react"
import { CartContext } from "../context/cart"




export const Cart = () => {

    const {cart,deleteCart} = useContext(CartContext)
    console.log(cart)



    return (
        <ul className="">
            {
                cart?.map(product => (
                    <li className='' key={product.id}>
                        <img src={product.thumbnail} alt="" />
                        <p className="">{product.title}</p>
                        <p className="">${product.price}</p>
                    </li>
                ))
            }
             <button className="" onClick={()=> deleteCart()}>Borrar Todo</button>
        </ul>
       
    )
}
