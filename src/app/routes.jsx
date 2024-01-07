import { lazy } from 'react';
import Loadable from './theme/Loadable';
import MatxLayout from './theme/MatxLayout/MatxLayout';
import MatxLayout2 from './theme/MatxLayout/MatxLayout2';
import QualityAssessment from './views/steps/QualityAssessment';




// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));
const ResetPassword = Loadable(lazy(() => import('app/views/sessions/ResetPassword')));

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
const DataExtraction = Loadable(lazy(() => import('app/views/steps/DataExtraction')));
const DataSynthesis = Loadable(lazy(() => import('app/views/steps/DataSynthesis')));
const Report = Loadable(lazy(() => import('app/views/steps/Report')));
const Chat = Loadable(lazy(() => import('app/views/communication/Chat')));
const Files = Loadable(lazy(() => import('app/views/communication/Files')));
const Tasks = Loadable(lazy(() => import('app/views/communication/Tasks')));

const routes = [
  {
    element: (
        <MatxLayout />
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
        <MatxLayout2 />
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
        element: <DataExtraction />,
      },
      {
        path: '/projects/:id/data-synthesis',
        element: <DataSynthesis />,
      },
      {
        path: '/projects/:id/report',
        element: <Report />,
      },
      {
        path: '/projects/:id/chat',
        element: <Chat />,
      },
      {
        path: '/projects/:id/files',
        element: <Files />,
      },
      {
        path: '/projects/:id/tasks',
        element: <Tasks />,
      }
    ]
  },

  // session pages route
  { path: '/404', element: <NotFound /> },
  { path: '/sign-in', element: <JwtLogin /> },
  { path: '/sign-up', element: <JwtRegister /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/reset-password/:token', element: <ResetPassword /> },

  { path: '/', element: <LandingPage /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
