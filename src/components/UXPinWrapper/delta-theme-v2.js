const deltaTheme = {
  // To further customize this theme,
  // please see the full theme object here: https://mui.com/customization/default-theme/
  
    palette: {
      mode: 'light',
      common: {
        black: 'rgba(42,50,61,1)',
        white: 'rgba(255,255,255,1)'
      },
      primary: {
        main: '#1565c0',
        contrastText: 'rgba(255,255,255,1)'
      },
      secondary: {
        main: '#4c596b',
        contrastText: 'rgba(255,255,255,1)'
      },
      text: {
        primary: 'rgba(42,50,61,0.9)',
        secondary: 'rgba(42,50,61,0.6)',
        disabled: 'rgba(42,50,61,0.4)',
        hint: 'rgba(42,50,61,0.25)',
      },
      whitetext: {
        primary: 'rgba(255,255,255,1)',
        secondary: 'rgba(255,255,255,0.70)',
        disabled: 'rgba(255,255,255,0.50)',
        hint: 'rgba(255,255,255,0.40)',
      },
      error: {
        main: '#bf3528',
        contrastText: 'rgba(255,255,255,1)'
      },
      warning: {
        main: '#e69b19',
        contrastText: 'rgba(255,255,255,1)'
      },
      info: {
        main: '#3694ff',
        contrastText: 'rgba(255,255,255,1)'
      },
      success: {
        main: '#a4c639',
        contrastText: 'rgba(42,50,61,0.9)',
      },
      divider: 'rgba(42,50,61,0.13)',
      whitedivider: 'rgba(255,255,255,0.25)',
      background: {
        default: '#f4f7f9',
        paper: '#fff',
      },
    },
    
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: 14,
      button: {
        textTransform: 'capitalize',
      },
      subtitle1: {
        fontWeight: 500,
      },
    },
    
    shape: {
      borderRadius: 6,
    },

    components: {
      MuiPaper: {
        shape: {
          borderRadius: 8,
        }
      },
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

