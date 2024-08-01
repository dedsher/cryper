import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '@pages/home';
import { Explore } from '@pages/explore';
import ProtectedRoute from '@shared/components/ProtectedRoute';
import { useAuth } from '@shared/hooks/useAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Explore />,
      },
    ],
  },
  // {
  //   path: '/wallet',
  //   element: <Wallet />,
  // },
  // {
  //   path: '/auth',
  //   element: <Auth />,
  // },
  // {
  //   path: '/profile',
  //   element: (
  //     <ProtectedRoute>
  //       <Profile />
  //     </ProtectedRoute>
  //   ),
  // },
]);

export default router;
