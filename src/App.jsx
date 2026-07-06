import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { About } from './pages/About';
import { BoilerOperationSolution } from './pages/BoilerOperationSolution';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Industries } from './pages/Industries';
import { Sustainability } from './pages/Sustainability';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'boiler-operation-solution', element: <BoilerOperationSolution /> },
      { path: 'industries', element: <Industries /> },
      { path: 'sustainability', element: <Sustainability /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
