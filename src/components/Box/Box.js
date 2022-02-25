import React from 'react';
import PropTypes from 'prop-types';
import BoxM from '@mui/material/Box';
import { sizing } from '@mui/system';
import { styled } from '@mui/material/styles';



/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
  * @uxpindocurl https://mui.com/components/box/#main-content
  */
function Box(props) {
  const { uxpinRef, ...other } = props;
  return (
    <BoxM ref={uxpinRef}
      {...other}
      style={{ objectFit: props.objectFit, ...props.style }}
    >
      {!props.children ? (
        <span>
          <center>
            <p>Drag components into this wrapper</p>
          </center>
        </span>
      ) : (
        props.children
      )}

    </BoxM>
  );
}


Box.propTypes = {


  /**
 * The content of the box.
 */
  /** @uxpinignoreprop */
  children: PropTypes.node,

  clone: PropTypes.bool,

  /**
   * Display Properties
   */
  display: PropTypes.oneOf([
    'inline',	/* Displays an element as an inline element (like <span>). Any height and width properties will have no effect */
    'block',	/* Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width	 */
    //'contents',	/* Makes the container disappear, making the child elements children of the element the next level up in the DOM	 */
    'flex',	/* Displays an element as a block-level flex container	 */
    'grid',	/* Displays an element as a block-level grid container */
    'inline-block',	/* Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values */
    'inline-flex',	/* Displays an element as an inline-level flex container	 */
    'inline-grid',	/* Displays an element as an inline-level grid container */
    'inline-table',	/* The element is displayed as an inline-level table */
    'list-item',	/* Let the element behave like a <li> element	 */
    //'run-in',	/* Displays an element as either block or inline, depending on context */
    'table',	/* Let the element behave like a <table> element	 */
    'table-caption',	/* Let the element behave like a <caption> element	 */
    'table-column-group',	/* Let the element behave like a <colgroup> element	 */
    'table-header-group',	/* Let the element behave like a <thead> element */
    'table-footer-group',	/* Let the element behave like a <tfoot> element */
    'table-row-group',	/* Let the element behave like a <tbody> element	 */
    'table-cell',	/* Let the element behave like a <td> element	 */
    'table-column',	/* Let the element behave like a <col> element */
    'table-row',	/* Let the element behave like a <tr> element	 */
    'none',	/* The element is completely removed	 */
    'initial',	/* Sets this property to its default value. Read about initial	 */
    'inherit',	/* Inherits */
  ]),

  /**
   * Flex Direction
   */
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * Flex Wrap
   */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Justify Content
   */
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right']),

  /**
   * Align Items
   */
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end']),

  /**
   * Align Content (This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse)
   */
  alignContent: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end']),

  /**
   * Gap.
   * In pixels (10px 20px; // row-gap column-gap )
   */
  gap: PropTypes.string,

  /**
  * Align Self.
  */
  alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),


  /**
   * Color of text
   */

  color: PropTypes.oneOf(['white', 'black', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey.500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'error.light', 'error.dark', 'warning.main', 'warning.light', 'warning.dark', 'info.main', 'info.light', 'info.dark', 'success.main', 'success.light', 'success.dark', 'text.primary', 'text.secondary', 'text.disabled', 'text.hint', 'whitetext.primary', 'whitetext.secondary', 'whitetext.disabled', 'divider', 'whitedivider']),

  bgcolor: PropTypes.oneOf(['white', 'black', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey.500', 'primary.main', 'primary.light', 'primary.dark', 'secondary.main', 'secondary.light', 'secondary.dark', 'error.main', 'error.light', 'error.dark', 'warning.main', 'warning.light', 'warning.dark', 'info.main', 'info.light', 'info.dark', 'success.main', 'success.light', 'success.dark', 'text.primary', 'text.secondary', 'text.disabled', 'text.hint', 'whitetext.primary', 'whitetext.secondary', 'whitetext.disabled', 'divider', 'whitedivider']),

  /**
   * All Padding.
   * In pixels
   */
  padding: PropTypes.string,

  /**
   * Top Padding.
   * In pixels
   */
  paddingTop: PropTypes.string,
  /**
   * Right Padding.
   * In pixels
   */
  paddingRight: PropTypes.string,
  /**
   * Bottom Padding.
   * In pixels
   */
  paddingBottom: PropTypes.string,
  /**
   * Left Padding.
   * In pixels  
   */
  paddingLeft: PropTypes.string,
  /**
   * All Margin.
   * In pixels
   */
  margin: PropTypes.string,
  /**
   * Top margin.
   * In pixels
   */
  marginTop: PropTypes.string,
  /**
   * Right margin.
   * In pixels
   */
  marginRight: PropTypes.string,
  /**
   * Bottom margin.
   * In pixels
   */
  marginBottom: PropTypes.string,
  /**
   * Left margin.
   * In pixels
   */
  marginLeft: PropTypes.string,

  /**
   * Border margin.
   * In pixels
   */
  border: PropTypes.number,

  /**
   * Border Top.
   * In pixels
   */
  borderTop: PropTypes.number,

  /**
   * Border margin.
   * In pixels
   */
  borderRight: PropTypes.number,

  /**
   * Border margin.
   * In pixels
   */
  borderBottom: PropTypes.number,

  /**
   * Border margin.
   * In pixels
   */
  borderLeft: PropTypes.number,

  borderColor: PropTypes.oneOf(['white', 'grey.100', 'grey.200', 'grey.300', 'grey.400', 'grey500', 'primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled']),

  borderRadius: PropTypes.string,

  boxShadow: PropTypes.number,

  textAlign: PropTypes.oneOf(["left", "center", "right"]),

  textOverflow: PropTypes.oneOf(["clip", "ellipsis"]),

  /**
   * Accepts any valid CSS properties.
   */
  style: PropTypes.object,

  /**
   * Accepts all system properties, as well as any valid CSS properties.
   */
  sx: PropTypes.object,
};

Box.defaultProps = {
  style: {
    "min-height": "",
    "height": "",
    "max-height": "",
    "min-width": "",
    "width": "",
    "max-width": "",
    "overflow-y": "",
  },
  sx: {
    m: '', //margin
    mt: '', //margin-top
    mr: '', //margin-right
    mb: '', //margin-bottom
    ml: '', //margin-left
    mx: '', //margin-left, margin-right
    my: '', //margin-top, margin-bottom
    p: '', //padding
    pt: '', //padding-top
    pr: '', //padding-right
    pb: '', //padding-bottom
    pl: '', //padding-left
    px: '', //padding-left, padding-right
    py: '', //padding-top, padding-bottom
  }
}

export default Box;