// eslint-disable-next-line no-unused-vars
import React from "react";
// import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDeltaTheme from "./delta-theme-v2";

const theme = createTheme(getDeltaTheme);

export default function UXPinWrapper({ children }) {

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}