import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LayoutRendererOriginal from '@rollup-umd/documentation/lib/Layout';
import theme from '../theme';
import SideBar from '../SideBar';

const defaultProps = {
  theme,
  logoMenu: {},
  logoFooter: {},
};

// eslint-disable-next-line react/prefer-stateless-function
export default class LayoutRendererBootstrap extends Component {
  static propTypes = {
    theme: PropTypes.object,
    logoMenu: PropTypes.object,
    logoFooter: PropTypes.object,
  };

  static defaultProps = defaultProps;

  render() {
    return (
      <LayoutRendererOriginal
        SideBar={SideBar}
        hasSidebar={false}
        {...this.props}
      />
    );
  }
}
