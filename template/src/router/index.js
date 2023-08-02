import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import App from '@/pages/App';

const routeMap = [
  {
    path: '/',
    indexed: true,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: 'about',
        element: <About />,
      },
      {
        index: true,
        path: 'app',
        element: <App />,
      },
    ],
  },
];

export const router = createBrowserRouter(routeMap);
