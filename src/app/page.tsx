import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import DropDown from "./components/DropDown";
import Counter from "./components/Counter";

// import { store } from "./store/store";
// import {Provider} from "react-redux"

import CartList from "./components/CartList";
import ProductItem from "./components/ProductItem";
import CartPage from "./components/CartPage";

export default function Home() {
  return (
    // <Provider store={store}>
      <main className=" capitalize ct-container">
        <Header/>
        <TodoList/>
        <DropDown/>
        <Counter/>
        <TodoFooter/>
        
      </main>
    // </Provider>
  );
}
