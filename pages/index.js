// pages/index.js
import Head from 'next/head';
import axios from 'axios';
import Product from './components/Product';

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Shopping Website - Buy Quality Products</title>
        <meta name="description" content="Discover a wide range of quality products on our shopping website." />
      </Head>

      <section>
        {products.map(product => (
          <Product
            key={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.image}
            onAddToCart={() => console.log(`Product ${product.id} added to cart`)}
          />
        ))}
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('https://fakestoreapi.com/products/');
  const products = response.data;

  return {
    props: {
      products,
    },
  };
}

export default Home;
