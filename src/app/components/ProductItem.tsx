import React from 'react'
import { dummyProducts } from "../data";
import ProductCard from './ProductCard';
const ProductItem = () => {
  return (
    <div className='p-4 flex flex-wrap gap-4'>
        {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductItem