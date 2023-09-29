

export const cartReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[CART] Add to Cart':
            return[
                ...initialState, action.payload
            ]
            case '[DELETE] Delete to Cart':
                return initialState.filter( product => product.id !== action.payload.id)
            
            break;
            case '[DELETE] Delete  Cart':
                return []
            
            break;
    
        default:
            break;
    }
}
