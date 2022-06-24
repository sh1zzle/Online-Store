import Product from './product';

const Items = (props) => {
  const { products, onAddToCart, pageTitle } = props;

  return (
    <div className='sm:mt-20 mt-24'>
      <h2 className='hover:text-2xl text-zinc-600 hover:text-stone-400 uppercase cursor-pointer text-xl font-semibold py-8'>
        {pageTitle}
      </h2>
      <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-2'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
