const deltaTheme = {
  // To further customize this theme,
  // please see the full theme object here: https://mui.com/customization/default-theme/
  
    palette: {
      mode: 'light',
      common: {
        black: 'rgba(42,50,61,1)',
        white: '#fff'
      },
      primary: {
        main: '#1565c0',
      },
      secondary: {
        main: '#4c596b',
      },
      text: {
        primary: 'rgba(42,50,61,0.9)',
        secondary: 'rgba(42,50,61,0.6)',
        disabled: 'rgba(42,50,61,0.4)',
        hint: 'rgba(42,50,61,0.4)',
      },
      error: {
        main: '#bf3528',
      },
      warning: {
        main: '#e69b19',
      },
      info: {
        main: '#3694ff',
      },
      success: {
        main: '#a4c639',
      },
      divider: 'rgba(42,50,61,0.13)',
      background: {
        default: '#f4f7f9',
      },
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: 14,
    },
    shape: {
      borderRadius: 6,
    },

    components: {
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        }
      },
      MuiAppBar: {
        defaultProps: {
          color: 'inherit',
        }
      },
      MuiIcon: {
        defaultProps: {
          // Replace the `material-icons` default value.
          baseClassName: 'material-icons-outlined',
        },
      },
    },

};

export default deltaTheme;

