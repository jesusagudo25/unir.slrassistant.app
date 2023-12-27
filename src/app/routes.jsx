import { lazy } from 'react';
import AuthGuard from './auth/AuthGuard';
import Loadable from './theme/Loadable';
import MatxLayout from './theme/MatxLayout/MatxLayout';
import MatxLayout2 from './theme/MatxLayout/MatxLayout2';
import QualityAssessment from './views/steps/QualityAssessment';


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

//steps
const General = Loadable(lazy(() => import('app/views/steps/General')));
const ReviewProtocol = Loadable(lazy(() => import('app/views/steps/ReviewProtocol')));
const Timeline = Loadable(lazy(() => import('app/views/steps/Timeline')));
const Search = Loadable(lazy(() => import('app/views/steps/Search')));
const Selection = Loadable(lazy(() => import('app/views/steps/Selection')));

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
      },
      {
        path: '/projects/:id/general',
        element: <General />,
      },
      {
        path: '/projects/:id/review-protocol',
        element: <ReviewProtocol />,
      },
      {
        path: '/projects/:id/timeline',
        element: <Timeline />,
      },
      {
        path: '/projects/:id/search',
        element: <Search />,
      },
      {
        path: '/projects/:id/selection',
        element: <Selection />,
      },
      {
        path: '/projects/:id/quality-assessment',
        element: <QualityAssessment />,
      },
      {
        path: '/projects/:id/data-extraction',
        element: <>Demo</>
      },
      {
        path: '/projects/:id/results',
        element: <>Demo</>
      },
      {
        path: '/projects/:id/visualization',
        element: <>Demo</>
      },
      {
        path: '/projects/:id/chat',
        element: <>Demo</>
      },
      {
        path: '/projects/:id/files',
        element: <>Demo</>
      },
      {
        path: '/projects/:id/kanban',
        element: <>Demo</>
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
