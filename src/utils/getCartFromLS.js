import { calculateTotalPrice } from "./calculatePrice"

export const getCartFormLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calculateTotalPrice(items)
    
    return {
        items,
        totalPrice
    }
}