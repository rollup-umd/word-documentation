const { join } = require('path');

module.exports = {
  styleguideComponents: {
    ComponentsList: join(__dirname, 'ComponentsList/ComponentsList.js'),
    ComponentsListRenderer: join(__dirname, 'ComponentsList/ComponentsListRenderer.js'),
    TableOfContents: join(__dirname, 'TableOfContents/TableOfContents'),
    TableOfContentsRenderer: join(__dirname, 'TableOfContents/TableOfContentsRenderer'),
  },
};
