import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Offers from './Component/Offers.jsx';
import Help from './Component/Help.jsx';
import SignIn from './Component/SignIn.jsx';
import Body from './Component/Body.jsx'
import Error from './Component/Error.jsx'
import ResturantDetail from './Component/ResturantDetail.jsx'
import Clock from './Component/Clock.jsx'
import Cart from './Component/Cart.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path:'/',
        element:<Body/>
      },

      {
        path: '/offers',
        element: <Offers />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        //dynamic routing

        path:'/resturant/:id',
        element:<ResturantDetail/>

      },
      {
        path:'/clock',
        element:<Clock/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
