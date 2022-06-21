const Product = (props) => {
  const { product, onAddToCart } = props;
  return (
    <div className='flex flex-col mb-8'>
      <img
        className='cursor-pointer rounded-xl'
        alt={product.name}
        src={product.image}
      />
      <div className='py-4'>
        <div className='hover:text-lg cursor-pointer text-base font-semibold'>
          {product.name}
        </div>
        <div className='cursor-pointer text-base font-semibold'>
          $ {product.price}
        </div>
      </div>
      <div>
        <button
          className='border-2 border-gray-400 p-2 w-full rounded-lg text-sm text-gray-600 hover:border-4 hover:border-stone-500'
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
