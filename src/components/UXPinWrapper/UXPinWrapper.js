// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import deltaTheme from "./delta-theme-v2";

const theme = createTheme(deltaTheme);

export default function UXPinWrapper({ children }) {

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}