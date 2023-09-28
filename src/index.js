import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navigationBar/navBar';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    }>
      <Route path="/" element={<App/>} />
      <Route path="/streams" element={<App/>} />
      <Route path="/party" element={<App/>} />
      <Route path="/premium" element={<App/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
