

const products =[
    {name: 'shampo', price: 300, quantity: 1},
    {name: 'ciruni', price: 50, quantity: 1},
    {name: 'shirt', price: 500, quantity: 2},
    {name: 'pant', price: 800, quantity: 2},
]

function cartTotal(products){
    let total =0;
    for(product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const cart = cartTotal(products)
console.log(cart)