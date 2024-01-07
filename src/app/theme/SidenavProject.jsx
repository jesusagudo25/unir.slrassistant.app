import { Fragment } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { styled } from '@mui/material';
import { MatxVerticalNav } from 'app/theme';
import useSettings from 'app/hooks/useSettings';
import { useParams } from 'react-router-dom';
import { navigationsProject } from 'app/navigationsProject';
import { useEffect } from 'react';
import { useState } from 'react';
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

const SidenavProject = ({ children }) => {

  const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_REVIEW } = process.env;
  const [isLoading, setLoading] = useState(false);
  const { settings, updateSettings } = useSettings();

  const { id } = useParams();
  const [navigationsProjectDisplay, setNavigationsProjectDisplay] = useState([]);
  const [project, setProject] = useState({});

  //replace :id with current project id
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
      axios.get(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/${id}`)
      .then((res) => {
        setProject(res.data);
        setNavigationsProjectDisplay(navigationsProject(id, res.data.name));
        setLoading(false);

      }).catch((err) => {
        console.log(err);
      });

  }, [])

  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {children}
        <MatxVerticalNav items={navigationsProjectDisplay} />
      </StyledScrollBar>

      <SideNavMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
    </Fragment>
  );
};

export default SidenavProject;
