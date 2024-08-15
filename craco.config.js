const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/'),
            '@images': path.resolve(__dirname, 'public/images/'),
            '@img': path.resolve(__dirname, 'src/img/'),
        },
    },
};