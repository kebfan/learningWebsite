import {createBrowserRouter,RouterProvider, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavbarComponent from './components/Navbarcomponent/navbar';
import Loginpage from './pages/loginpage/Login';
import Register from './pages/registerpage/Register';
import Home from './pages/homepage/Home';
import './App.css';

const router = createBrowserRouter([
  {
  path:'/',element:<Home />,
},
{ 
  path:'/login',element:<Loginpage/>
},
{
  path:'/register',element:<Register/>
}
])

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
