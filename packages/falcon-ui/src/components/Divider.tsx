import { themed } from '../theme';

export const Divider = themed({
  tag: 'hr',

  defaultTheme: {
    divider: {
      display: 'block',
      my: 'none',
      border: 'light',
      borderColor: 'primaryDark',
      opacity: 0.7,
      width: '100%'
    }
  }
});
