import './App.css';
import NavBar from "./NavBar";
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from "./Cart";
import { Provider } from "react-redux";
import { store } from "./store/store"
function App() {
  return (
    <div className="bg-light">
      <Provider store={store}>
        <Cart />
        <NavBar />
        <Header />
        <ProductList />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
