import { lazy } from 'react';
import AuthGuard from './auth/AuthGuard';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import MatxLayout2 from './components/MatxLayout/MatxLayout2';


// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

// landing page
const LandingPage = Loadable(lazy(() => import('landing-page/LandingApp')));

// project pages
const NewProjectPage = Loadable(lazy(() => import('app/views/projects/NewProjectPage')));
const ProjectDetails = Loadable(lazy(() => import('app/views/projects/ProjectDetails')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      // dashboard route
      {
        path: '/dashboard/app',
        element: <Analytics />,
      },

      // project routes
      {
        path: '/projects/new',
        element: <NewProjectPage />,
      }      
    ]
  },

  // project pages route
  {
    element: (
      <AuthGuard>
        <MatxLayout2 />
      </AuthGuard>
    ),
    children: [
      {
        path: '/projects/:id',
        element: <ProjectDetails />,
      }
    ]
  },

  // session pages route
  { path: '/404', element: <NotFound /> },
  { path: '/sign-in', element: <JwtLogin /> },
  { path: '/sign-up', element: <JwtRegister /> },
  { path: '/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <LandingPage /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
