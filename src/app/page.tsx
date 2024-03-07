"use client"
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import DropDown from "./components/DropDown";
import Counter from "./components/Counter";

import { store } from "./store/store";
import {Provider} from "react-redux"

export default function Home() {
  return (
    <Provider store={store}>
      <main className=" capitalize ct-container">
        <Header/>
        <TodoList/>
        <Counter/>
        <DropDown/>
        <TodoFooter/>
      </main>
    </Provider>
  );
}
