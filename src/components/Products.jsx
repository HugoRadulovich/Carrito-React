import { useContext } from 'react'
//  import {products} from '../mocks/products.json'
import { CartContext } from '../context/cart'

export const Products = ({products}) => {

    console.log(products)

    const {addToCart, cart,deleteToCart} = useContext(CartContext)
    
    const cartChecked = (product) => {
        return cart?.some(cart => cart.id === product.id)
    }
    
    

    return (
       <>
            <ul className="">
                {
                    products?.map(product => {
                    const isProductInCart = cartChecked(product)
                    
                        return(
                        <li className="" key={product.id}>
                            <img src={product.thumbnail} alt="" className="" />
                            <p className="">{product.title}</p>
                            <p className="">${product.price}</p>
                           {
                            isProductInCart ?  <button className="border-2 border-sky-950"  onClick={()=>deleteToCart(product)}>Borrar</button>
                                        : <button className="border-2 border-sky-950" onClick={()=>addToCart(product)}>Agregar</button>
                           }
                         
                        </li>
                        )})
                }
            </ul>
       </>
    )
}
