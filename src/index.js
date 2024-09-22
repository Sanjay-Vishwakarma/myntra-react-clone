import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.js'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Bags from './routes/Bags.jsx'
import Home from './routes/Home.jsx';
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/bags",
          element: <Bags />
        },
        /* { path: "/create-post", element: <CreatePost /> } */
      ]
    }
  ]
);



root.render(
  <React.StrictMode>
    <Provider store = {myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
