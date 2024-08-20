import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/Error';
import Home from './components/home/Home.jsx';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        }
      ],
    },
  ],
  {
    basename: '/react-portfolio', // Add basename here
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
