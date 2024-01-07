import { CssBaseline } from '@mui/material';
import axios from 'axios';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './theme';

import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';

// ----------------------------------------------------------------------

axios.interceptors.request.use( (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ----------------------------------------------------------------------

const App = () => {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>

        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>

    </SettingsProvider>
  );
};

export default App;
