// import { useState } from 'react';

import { useState } from 'react';

const Cart = (props) => {
  const { cartItems, onAddToCart, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const { countCartItems } = props;
  const [viewCart, setIsViewCart] = useState(false);
  const [viewTotal, setIsViewTotal] = useState(false);

  const ViewTotalPrice = () => {
    return (
      <div className='flex flex-col text-zinc-700'>
        <h2 className='py-2'>Free shipping for orders over $2000!</h2>

        <div className='py-2 flex gap-4 flex-row justify-items-end'>
          <div className='w-2/3'>Total Items:</div>
          <div className='w-1/3'>{itemsPrice.toFixed(2)}</div>
        </div>
        <div className='py-2 flex gap-4 flex-row'>
          <div className='w-2/3'>Tax Price:</div>
          <div className='w-1/3'>{taxPrice.toFixed(2)}</div>
        </div>
        <div className='py-2 flex gap-4 flex-row'>
          <div className='w-2/3'>Shipping Price:</div>
          <div className='w-1/3'>{shippingPrice.toFixed(2)}</div>
        </div>
        <div className='py-2 flex gap-4 flex-row'>
          <div className='w-2/3'>Total Price:</div>
          <div className='w-1/3'>{totalPrice.toFixed(2)}</div>
        </div>
        <div>
          <button className='my-6 border-2 border-gray-400 w-full p-[5px] rounded-2xl text-sm text-gray-600 hover:border-stone-500'>
            Checkout
          </button>
        </div>
      </div>
    );
  };

  const IsCartOpen = () => {
    return (
      <div>
        {cartItems.length === 0 && <h2>Your cart is empty, add some items!</h2>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>

            <div className='flex flex-row py-2 text-zinc-700'>
              <div className='flex gap-2'>
                <button
                  className='border-2 border-gray-400 w-[30px] rounded-2xl text-sm text-gray-600 hover:border-stone-500'
                  onClick={() => onAddToCart(item)}
                >
                  +
                </button>
                <input
                  className='w-[10%] text-center bg-inherit'
                  placeholder={item.quantity}
                />
                <button
                  className='border-2 border-gray-400 w-[30px] rounded-2xl text-sm text-gray-600 hover:border-stone-500'
                  onClick={() => onRemove(item)}
                >
                  -
                </button>
              </div>

              <div className='text-right'> × ${item.price}</div>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <button
            className='my-6 border-2 border-gray-400 w-full p-[5px] rounded-2xl text-sm text-gray-600 hover:border-stone-500'
            onClick={() => setIsViewTotal(!viewTotal)}
          >
            View Order Summary
          </button>
        )}
        {cartItems.length !== 0 && (viewTotal ? <ViewTotalPrice /> : '')}
      </div>
    );
  };
  return (
    <div className='flex flex-col justify-center'>
      <button onClick={() => setIsViewCart(!viewCart)}>
        <svg
          className='h-6 w-6'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'></path>
        </svg>
      </button>
      <div className='rounded-xl'>
        {viewCart ? (
          <IsCartOpen />
        ) : (
          <div className='text-center'>{countCartItems}</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
