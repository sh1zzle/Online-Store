import Product from './product';

const Items = (props) => {
  const { products, onAddToCart } = props;

  return (
    <div>
      <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-2 block'>
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
