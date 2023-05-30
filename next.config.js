/** @type {import('next').NextConfig} */
const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'admin',
                mongodb_password: 'admin',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'contact-dev',
            },
        };
    }

    return {
        env: {
            mongodb_username: 'admin',
            mongodb_password: 'admin',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'contact',
        },
    };
};
