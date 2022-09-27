export const calculateTotalPrice = (hto) => {
    hto.reduce((acc, item) => {
        return (item.price * item.count) + acc
    }, 0)
}