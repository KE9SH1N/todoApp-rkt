import React from 'react'

import { useDispatch, useSelector } from 'react-redux'


const CartList = () => {

    const cartItems = useSelector((state:any) => state.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      <div className="bg-gray-100 p-4 rounded">
        {
            cartItems.map(product => {
                    return(
                        <div key={cartItems.id} className="border-b-2 pb-2 mb-2">
                            <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                            <p className="text-sm">Price: ${product.price}</p>
                            <p className="text-sm">Quantity: </p>
                        </div>
                    )   
          
                }
            )
        }
      </div>
    </div>
  )
}

export default CartList