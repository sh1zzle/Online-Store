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
          <h1 className='font-medium text-zinc-600 text-xl p-2 uppercase hover:text-stone-400 tracking-wide cursor-pointer'>
            CrossFit Equipments and Gears
          </h1>
        </div>

        <div className='flex flex-row justify-end  w-2/3 gap-12 text-base text-zinc-600 font-medium'>
          <div>
            <Cart
              onAddToCart={onAddToCart}
              onRemove={onRemove}
              cartItems={cartItems}
              countCartItems={cartItems.length}
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
