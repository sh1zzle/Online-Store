import Items from './data/items';
import data from './data/data';
import { useState } from 'react';
import Cart from './data/cart';

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row shadow-md sm:mb-12 mb-6 p-4 fixed w-full bg-zinc-100'>
        <div className='w-full'>
          <h1 className='font-medium text-zinc-600 text-2xl p-2 uppercase hover:text-stone-400 tracking-wide cursor-pointer'>
            CrossFit Equipments and Gears
          </h1>
        </div>

        <div className='flex justify-end w-1/5 gap-12 text-base text-zinc-600 font-medium'>
          <div>
            <Cart
              onAddToCart={onAddToCart}
              onRemove={onRemove}
              cartItems={cartItems}
              countCartItems={cartItems.length}
            />
          </div>
        </div>

        <div class='mx-4 w-[400px]'>
          <div class='relative w-auto'>
            <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                class='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              class='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search'
              required
            />
          </div>
        </div>
      </div>
      <div className='w-100 px-12'>
        <Items
          products={products}
          onAddToCart={onAddToCart}
          pageTitle='Products'
        />
      </div>
    </div>
  );
};

export default App;
