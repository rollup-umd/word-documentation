import { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as makeThemeDocumentation } from '@rollup-umd/documentation/lib/theme';

export const makeTheme = toMakeTheme(
  makeThemeDocumentation({
    _name: 'word-documentation',
    '$enable-rounded': 'false',
    '$brand-primary': '#59aac2',
    '$btn-primary-color': '#a5b75c',
    '$btn-primary-bg': '#59aac2',
    '$btn-primary-border': '#59aac2',
    '$btn-box-shadow': '#59aac2 !important',
    '$font-family-base': '\'Slabo 27px\', serif, \'Times New Roman\', \'Liberation Serif\', \'Linux Libertine\'',
    '$headings-font-family': '\'Slabo 27px\', serif, \'Times New Roman\', \'Liberation Serif\', \'Linux Libertine\'',
    '$headings-font-weight': 'normal',
    '$font-size-h1': '40px !important',
    '$font-size-h2': '30px !important',
    '$font-size-h3': '24px',
    '$font-size-h4': '20px',
    '$font-size-h5': '18px',
    '$font-size-h6': '16px',
    '$headings-line-height': '2',
    '$headings-color': 'inherit',
    '$link-color': '#59aac2',
    '$link-decoration': 'none',
    '$link-hover-color': '#4f83ba',
    '$link-hover-decoration': 'none',
    '$code-color': '#333',
    '$table-cell-padding': '0',
    '$table-border-width': '0',
    '$input-padding-x-sm': '1rem',
    '$input-padding-y-sm': '.75rem',
    styleguide: {
      '$nav-styleguide-bg-color': 'white',
      '$nav-styleguide-border': '1px solid #CCC',
      '$nav-styleguide-width': {
        sm: '100%',
        md: '260px',
      },
      '$rsg-markdown-block-quote-border-radius': '0',
      '$rsg-color-gradient': 'linear-gradient(#2EA698, #6942A4)',
      '$rsg-heading-margin': '0 0 2rem 0',
      '$rsg-component-list-heading-color': '#000',
      '$rsg-toc-form-background': 'transparent',
      '$rsg-styleguide-sidebar-button-transform': 'translate3d(0, -6px, 0) rotate(0deg)',
      '$rsg-styleguide-sidebar-open-button-color': '#000',
      '$rsg-styleguide-sidebar-open-button-transform': 'translate3d(193px, -6px, 0) rotate(90deg)',
      '$rsg-styleguide-sidebar-button-color': '#000',
      '$rsg-para-font-family': '\'Slabo 27px\', serif, \'Times New Roman\', \'Liberation Serif\', \'Linux Libertine\'',
      '$rsg-heading-color': '#000',
      '$rsg-section-heading-anchor-color': '#000',
      '$rsg-section-heading-1-link-color': '#000',
      '$rsg-section-heading-2-link-color': 'blue',
      '$rsg-section-heading-section-name-color': '#000',
      '$rsg-section-heading-1-color': '#000',
      '$rsg-section-heading-2-color': '#000',
    },
  })
);

export default makeTheme();
