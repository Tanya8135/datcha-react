const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@css': path.resolve(__dirname, 'src/'),
            '@images': path.resolve(__dirname, 'public/images/'),
            '@img': path.resolve(__dirname, 'src/img/'),
        },
    },
};