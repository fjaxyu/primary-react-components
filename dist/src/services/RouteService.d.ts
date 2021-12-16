/**
 *
 * @param {RequestObject} req
 * @returns {String}
 */
export declare function getIpAddress(req: any): any;
/**
 *
 * @param {RequestObject} req
 * @returns {UserAgentObject}
 */
export declare function getUserAgent(req: any): any;
/**
 *
 * @param {String} endpoint
 * @returns {Boolean}
 */
export declare function isSecureEndpoint(endpoint: any): any;
declare const _default: {
    getIpAddress: typeof getIpAddress;
    getUserAgent: typeof getUserAgent;
    isSecureEndpoint: typeof isSecureEndpoint;
};
export default _default;
