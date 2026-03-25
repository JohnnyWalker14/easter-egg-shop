import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <>
      <Hero />
      <div id="products">
        <ProductList />
      </div>
    </>
  );
};

export default Home;
