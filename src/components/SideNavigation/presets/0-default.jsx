import * as React from 'react';
import SideNavigation from '../SideNavigation';
import SideNavigationAction from '../../SideNavigationAction/SideNavigationAction';
import Icon from '../../Icon/Icon';

export default (
  <SideNavigation uxpId="side-navigation-1">
      <SideNavigationAction uxpId="side-navigation-action-2" label="Home" icon={<Icon uxpId="2.1">home</Icon>} />
      <SideNavigationAction uxpId="side-navigation-action-3" label="Recents" icon={<Icon uxpId="3.1">restore</Icon>} />
      <SideNavigationAction uxpId="side-navigation-action-4" label="User" icon={<Icon uxpId="4.1">person</Icon>} />
  </SideNavigation>
);