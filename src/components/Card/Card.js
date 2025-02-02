import React from "react";
import PropTypes from "prop-types";
import CardM from '@mui/material/Card';


/**
 * @uxpindocurl https://mui.com/api/card/
 */
function Card(props) {
    return (
        <CardM {...props}>{props.children}</CardM>
    )
} 

Card.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * If true, the card will use raised styling.
   */
  raised: PropTypes.bool,

  /**
   * The shadow depth of paper surface. Accepts values between 0 and 16.
   */
   elevation: PropTypes.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
}

export default Card