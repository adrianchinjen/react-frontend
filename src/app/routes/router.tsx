import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { RootLayout } from '../components/layouts/RootLayout';
import { Home } from '../components/pages/Home';
import { About } from '../components/pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route />
    </Route>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
