import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import LayOut from './page/Layout/LayOut';
import React, { Suspense, lazy } from 'react';



function App() {
  const routers = createHashRouter([
    {
      path: '', element: <LayOut />, children: [
        { index: true, element: <Home /> },
      ]
    }
  ]);

  console.clear();

  return (
    <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
