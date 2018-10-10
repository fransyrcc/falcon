import React from 'react';
import { ThemeEditor, ThemeState } from '@deity/falcon-theme-editor';
import { ThemeProvider, createTheme } from '../src';
import * as UIComponents from '../src';

const initialTheme = createTheme();

export default (props: any) => (
  <ThemeState initial={initialTheme}>
    {({ theme, updateTheme }) => (
      <React.Fragment>
        <ThemeProvider theme={theme} {...props} />
        <ThemeEditor theme={theme} updateTheme={updateTheme} components={UIComponents} />
      </React.Fragment>
    )}
  </ThemeState>
);
