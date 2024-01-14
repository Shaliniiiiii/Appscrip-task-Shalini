// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Description from './components/Description';
import ProductDropdown from './components/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Description/>
      <Component {...pageProps} />
      <ProductDropdown/>
    </>
  );
}

export default MyApp;