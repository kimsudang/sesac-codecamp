import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aaa from "./routes/aaa.js";
import Bbb from "./routes/bbb.js";
import Board from "./routes/board1.js";
import Refactoring from "./routes/board2-refactoring.js";

const 철수의페이지목록 = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aaa", element: <Aaa /> },
  { path: "/bbb", element: <Bbb /> },
  { path: "/board1", element: <Board /> },
  { path: "/board2", element: <Refactoring /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={철수의페이지목록} />);

reportWebVitals();
