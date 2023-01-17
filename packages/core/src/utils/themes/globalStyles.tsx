import { createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from '.';
import { palette } from '../tokens/colors';
import { radii } from '../tokens/radii';
import { spaces } from '../tokens/spaces';
import { grid } from '../tokens/layout';
import { fonts, fontSizes, fontWeights } from '../tokens/typography';

const global = {
  '*': {
    'box-sizing': 'border-box',
  },
  '*:before': {
    'box-sizing': 'border-box',
  },
  '*:after': {
    'box-sizing': 'border-box',
  },
};

const GlobalStyles = createGlobalStyle({
  ':root': {
    ...palette,
    ...radii,
    ...spaces,
    ...fonts,
    ...fontSizes,
    ...fontWeights,
    ...grid,
  },
  ...global,
  ...lightTheme,
  ...darkTheme,
});

export default GlobalStyles;
