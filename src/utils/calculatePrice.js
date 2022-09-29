export const calculateTotalPrice = (array) => {
    return array.reduce((acc, item) =>  (item.price * item.count) + acc, 0)
}

