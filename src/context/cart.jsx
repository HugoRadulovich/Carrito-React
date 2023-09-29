import { createContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";


export const CartContext = createContext();
const initialState = []; 


export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer,initialState)

    const addToCart = (product) => {
        const action = {
            type: '[CART] Add to Cart',
            payload: product
        }
        dispatch(action)
    }

    const deleteToCart = (product) => {
        const action = {
            type: '[DELETE] Delete to Cart',
            payload: product
        }
        dispatch(action)
    }

    const deleteCart = () => {
        const action = {
            type: '[DELETE] Delete Cart'
        }
        dispatch(action)
    }

    return (
        <CartContext.Provider 
        value={{
            cart,
            addToCart,
            deleteToCart,
            deleteCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
