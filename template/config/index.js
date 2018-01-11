var path = require('path');

const pageMap = [
    {
        chunks: ['app'],
        inject: 'body',
        template: './src/index.html',
        filename: './index.html'
    }
];

const entry = {
    app: ['./src/app.js']
};

module.exports = {
    build: {
        entry: entry,
        env: {
            NODE_ENV: '"production"'
        },
        assetsRoot: path.resolve(__dirname, '../build'),
        assetsSubDirectory: 'assets',
        // TODO: add oss domain name
        assetsPublicPath: '/',
        pageMap: pageMap,
        analyze: false
    },
    dev: {
        entry: entry,
        env: {
            NODE_ENV: '"development"'
        },
        port: 8081,
        assetsSubDirectory: 'assets',
        assetsPublicPath: 'http://localhost:8081/',
        pageMap: pageMap,
    }
};
