import { Fragment } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { useState } from 'react';
import { styled } from '@mui/material';
import { MatxVerticalNav } from 'app/theme';
import useSettings from 'app/hooks/useSettings';

import { useEffect } from 'react';
import axios from 'axios';

const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'relative'
}));

const SideNavMobile = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.54)',
  zIndex: -1,
  [theme.breakpoints.up('lg')]: { display: 'none' }
}));

const Sidenav = ({ children }) => {
  const { settings, updateSettings } = useSettings();
  const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_REVIEW } = process.env;
  const [navigations, setNavigations] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = localStorage.getItem('id');

  const updateSidebarMode = (sidebarSettings) => {
    let activeLayoutSettingsName = settings.activeLayout + 'Settings';
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  useEffect(() => {
    setLoading(true);
      axios.get(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects?userId=${id}`)
      .then((res) => {

      const navigationsData = [];
       navigationsData.push( { name: 'New Project', icon: 'book', path: '/projects/new' },
       { label: 'Personal projects', type: 'label' });

        res.data.forEach((element) => {
          navigationsData.push({
            name: element.name,
            icon: 'circle',
            path: `/projects/${element.id}`
          });
        });

        if (res.data.length === 0) {
          navigationsData.push({
            name: 'No projects',
            icon: 'circle',
            path: '#'
          });
        }

        navigationsData.push( { label: 'Collaborative Projects', type: 'label' });

        navigationsData.push({
          name: 'No projects',
          icon: 'circle',
          path: '#'
        });

        navigationsData.push(  { label: 'Support', type: 'label' },
        {
          name: 'Documentation',
          icon: 'launch',
          type: 'extLink',
          path: ''
        } );



        setNavigations(navigationsData);

        setLoading(false);

      }).catch((err) => {
        console.log(err);
      });

  }, [])


  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {children}
        <MatxVerticalNav items={navigations} />
      </StyledScrollBar>

      <SideNavMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
    </Fragment>
  );
};

export default Sidenav;
