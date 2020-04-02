const path = require('path');
const configure = require('react-figma-webpack-config');

module.exports = configure({
    resolve: {
        alias: {
            'react-primitives': '@elemental-design/react-primitives/lib/index.figma.js', // FIXME: Change to react-primitives later
            react: path.resolve(__dirname, './node_modules/react/'),
            'react-figma': path.resolve(__dirname, './node_modules/react-figma/')
        }
    }
});
