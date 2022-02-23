import React from "react";
import PropTypes from "prop-types";
import SideNavigationActionM from "@mui/material/BottomNavigationAction";
import Icon from "../Icon/Icon";
import { iconVariants } from '../Icon/icon-variants'


/**
  * @uxpindocurl https://mui.com/api/bottom-navigation-action/
  */


function SideNavigationAction(props) {
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
  const { uxpinRef, ...other } = props;
  return (
  <SideNavigationActionM 
  style={{ minWidth: 48, width: 'auto', padding: '4px 0px 6px', color: 'inherit' }}
  ref={uxpinRef} {...other} icon={<Icon >{props.icon}</Icon>}/>
  )
}

SideNavigationAction.propTypes = {
    /**
     * @uxpinignoreprop 
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,

    /**
     * The icon element.
     */
    icon: PropTypes.oneOf(iconVariants),

    /**
     * The label element.
     */
    label: PropTypes.string,

    /**
     * If `true`, the `SideNavigationAction` will show its label.
     * By default, only the selected `SideNavigationAction`
     * inside `SideNavigation` will show its label.
     */
    showLabel: PropTypes.bool,
    
    /**
     * You can provide your own value. Otherwise, we fallback to the child position index.
     */
    value: PropTypes.string,
    
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
     * https://mui.com/system/the-sx-prop/
     */
    sx: PropTypes.object,
  };
  
  export default SideNavigationAction;
  