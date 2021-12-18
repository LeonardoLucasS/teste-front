const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://teste165165.herokuapp.com/api',
        secure: false,
        logLevel: 'debug',
    }
];

module.exports = PROXY_CONFIG;