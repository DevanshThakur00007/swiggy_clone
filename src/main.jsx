import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Offers from './Component/Offers.jsx';
import Help from './Component/Help.jsx';
import SignIn from './Component/SignIn.jsx';
import Body from './Component/Body.jsx'
import Error from './Component/Error.jsx'

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
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
