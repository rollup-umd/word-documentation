/* eslint-disable */
/**
 * Testing our LayoutRenderer component
 */
import { shallow } from 'enzyme';
import React from 'react';
import LayoutRenderer from '../LayoutRenderer';

const renderComponent = (props = {}) => shallow(
  <LayoutRenderer {...props} toc={<a>table of content</a>}/>
);

describe('<LayoutRenderer />', () => {
  it('should render an LayoutRenderer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
