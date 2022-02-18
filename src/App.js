import React from "react";
import TodoAppPage from "./pages/TodoAppPage";
import { StoreContext } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoAppPageMiu from "./pages/ToDoAppPageMiu";

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/bootstrap" element={<TodoAppPage />} />
        <Route path="/miu" element={<TodoAppPageMiu />} />
      </Router>
    </BrowserRouter>

    // <div>
    //   <TodoAppPage />
    // </div>
  );
};

export default App;
