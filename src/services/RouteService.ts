const TypeService = require('./TypeService');

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS

/**
 *
 * @param {RequestObject} req
 * @returns {String}
 */
export function getIpAddress(req) {
    if (TypeService.isObject(req) === false) {
        throw new Error('req (Object) is required');
    }

    return req.clientIp;
}


/**
 *
 * @param {RequestObject} req
 * @returns {UserAgentObject}
 */
export function getUserAgent(req) {
    if (TypeService.isObject(req) === false) {
        throw new Error('req (Object) is required');
    }

    return req.useragent;
}


/**
 *
 * @param {String} endpoint
 * @returns {Boolean}
 */
export function isSecureEndpoint(endpoint) {
    const secureEndpointPattern = /\/api\/v\d*\//;
    return (TypeService.isString(endpoint) && secureEndpointPattern.test(endpoint));
}


//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PRIVATE METHODS


export default {
    getIpAddress: getIpAddress,
    getUserAgent: getUserAgent,
    isSecureEndpoint: isSecureEndpoint,
}