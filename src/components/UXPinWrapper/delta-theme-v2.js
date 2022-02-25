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
      grey: {
        // grey in case different spellings
        // This is a custom Blue Grey Palette created with https://material.io/inline-tools/color/
        50: '#f4f7f9',
        100: '#eceff5',
        light: '#eceff5',
        200: '#b4becb',
        300: '#96a3b5',
        400: '#808fa3',
        500: '#6a7c93',
        600: '#5c6d82',
        700: '#4c596b',
        main: '#4c596b',
        800: '#3c4755',
        900: '#2a323d',
        dark: '#2a333d',
      },
      divider: 'rgba(42,50,61,0.13)',
      whitedivider: 'rgba(255,255,255,0.25)',
      background: {
        default: '#f4f7f9',
        paper: '#fff',
      },
      action: {
        active: 'rgba(42, 50, 61, 0.60)',
        hover: 'rgba(42, 50, 61, 0.04)',
        hoverOpacity: '0.04',
        selected: 'rgba(42, 50, 61, 0.08)',
        selectedOpacity: '0.08',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(42, 50, 61, 0.125)',
        disabledOpacity: '0.38',
        focus: 'rgba(42, 50, 61, 0.125)',
        focusOpacity: '0.125',
        activatedOpacity: '0.125',
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

    shadows: [
      'none', // elevation={0}
      '0px 2px 1px -1px rgba(0,0,0,0.125), 0px 1px 1px 0px rgba(0,0,0,0.0925), 0px 1px 3px 0px rgba(0,0,0,0.06)', // elevation={1}
      '0px 3px 1px -2px rgba(0,0,0,0.125), 0px 2px 2px 0px rgba(0,0,0,0.0925), 0px 1px 5px 0px rgba(0,0,0,0.06)', // elevation={2}
      '0px 3px 3px -2px rgba(0,0,0,0.125), 0px 3px 4px 0px rgba(0,0,0,0.0925), 0px 1px 8px 0px rgba(0,0,0,0.06)', // elevation={3}
      '0px 2px 4px -1px rgba(0,0,0,0.125), 0px 4px 5px 0px rgba(0,0,0,0.0925), 0px 1px 10px 0px rgba(0,0,0,0.06)', // elevation={4}
      '0px 3px 5px -1px rgba(0,0,0,0.125), 0px 5px 8px 0px rgba(0,0,0,0.0925), 0px 1px 14px 0px rgba(0,0,0,0.06)', // elevation={5}
      '0px 3px 5px -1px rgba(0,0,0,0.125), 0px 6px 10px 0px rgba(0,0,0,0.0925), 0px 1px 18px 0px rgba(0,0,0,0.06)', // elevation={6}
      '0px 4px 5px -2px rgba(0,0,0,0.125), 0px 7px 10px 1px rgba(0,0,0,0.0925), 0px 2px 16px 1px rgba(0,0,0,0.06)', // elevation={7}
      '0px 5px 5px -3px rgba(0,0,0,0.125), 0px 8px 10px 1px rgba(0,0,0,0.0925), 0px 3px 14px 2px rgba(0,0,0,0.06)', // elevation={8}
      '0px 5px 6px -3px rgba(0,0,0,0.125), 0px 9px 12px 1px rgba(0,0,0,0.0925), 0px 3px 16px 2px rgba(0,0,0,0.06)', // elevation={9}
      '0px 6px 6px -3px rgba(0,0,0,0.125), 0px 10px 14px 1px rgba(0,0,0,0.0925), 0px 4px 18px 3px rgba(0,0,0,0.06)', // elevation={10}
      '0px 6px 7px -4px rgba(0,0,0,0.125), 0px 11px 15px 1px rgba(0,0,0,0.0925), 0px 4px 20px 3px rgba(0,0,0,0.06)', // elevation={11}
      '0px 7px 8px -4px rgba(0,0,0,0.125), 0px 12px 17px 2px rgba(0,0,0,0.0925), 0px 5px 22px 4px rgba(0,0,0,0.06)', // elevation={12}
      '0px 7px 8px -4px rgba(0,0,0,0.125), 0px 13px 19px 2px rgba(0,0,0,0.0925), 0px 5px 24px 4px rgba(0,0,0,0.06)', // elevation={13}
      '0px 7px 9px -4px rgba(0,0,0,0.125), 0px 14px 21px 2px rgba(0,0,0,0.0925), 0px 5px 26px 4px rgba(0,0,0,0.06)', // elevation={14}
      '0px 8px 9px -5px rgba(0,0,0,0.125), 0px 15px 22px 2px rgba(0,0,0,0.0925), 0px 6px 28px 5px rgba(0,0,0,0.06)', // elevation={15}
      '0px 8px 10px -5px rgba(0,0,0,0.125), 0px 16px 24px 2px rgba(0,0,0,0.0925), 0px 6px 30px 5px rgba(0,0,0,0.06)', // elevation={16}
      '0px 8px 11px -5px rgba(0,0,0,0.125), 0px 17px 26px 2px rgba(0,0,0,0.0925), 0px 6px 32px 5px rgba(0,0,0,0.06)', // elevation={17}
      '0px 9px 11px -5px rgba(0,0,0,0.125), 0px 18px 28px 2px rgba(0,0,0,0.0925), 0px 7px 34px 6px rgba(0,0,0,0.06)', // elevation={18}
      '0px 9px 12px -6px rgba(0,0,0,0.125), 0px 19px 29px 2px rgba(0,0,0,0.0925), 0px 7px 36px 6px rgba(0,0,0,0.06)', // elevation={19}
      '0px 10px 13px -6px rgba(0,0,0,0.125), 0px 20px 31px 3px rgba(0,0,0,0.0925), 0px 8px 38px 7px rgba(0,0,0,0.06)', // elevation={20}
      '0px 10px 13px -6px rgba(0,0,0,0.125), 0px 21px 33px 3px rgba(0,0,0,0.0925), 0px 8px 40px 7px rgba(0,0,0,0.06)', // elevation={21}
      '0px 10px 14px -6px rgba(0,0,0,0.125), 0px 22px 35px 3px rgba(0,0,0,0.0925), 0px 8px 42px 7px rgba(0,0,0,0.06)', // elevation={22}
      '0px 11px 14px -7px rgba(0,0,0,0.125), 0px 23px 36px 3px rgba(0,0,0,0.0925), 0px 9px 44px 8px rgba(0,0,0,0.06)', // elevation={23}
      '0px 11px 15px -7px rgba(0,0,0,0.125), 0px 24px 38px 3px rgba(0,0,0,0.0925), 0px 9px 46px 8px rgba(0,0,0,0.06)', // elevation={24}
    ],
    
    shape: {
      borderRadius: 8,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          }
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

