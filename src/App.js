import React from "react";
import TodoAppPage from "./pages/TodoAppPage";
import { StoreContext } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <TodoAppPage />
    </div>
  );
};

export default App;
