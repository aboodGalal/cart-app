import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './pages/Store.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Provider } from 'react-redux'
import store from './redux/Store.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/store",
    element: <Store />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
