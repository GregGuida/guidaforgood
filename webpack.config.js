const path = require('path');

const config = {
    devtool: "source-map",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'static', 'js')
    }
};

module.exports = config;