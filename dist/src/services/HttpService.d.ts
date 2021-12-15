/**
 *
 * @param {Object} options
 * @param {String} options.url
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} options.method
 *
 * @param {Object} [options.body]
 * @param {Object} [options.data]
 * @param {Boolean} [options.useDefaultHeaders]
 * @param {Object} [options.query]
 *
 * @param {Object} [options.params]
 * @param {Object} [options.parameters]
 *
 * @param {Object} [options.headers]
 * @param {Object} [options.header]
 * @returns {Promise<any>}
 */
declare type AnyObject = Record<any, unknown>;
export declare type ValidBody = AnyObject | any[] | string | number;
export declare type HttpOptions = {
    url: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    body?: ValidBody;
    data?: ValidBody;
    useDefaultHeaders?: boolean;
    params?: AnyObject;
    parameters?: AnyObject;
    query?: AnyObject;
    headers?: AnyObject;
    header?: AnyObject;
};
export declare type HttpResponse = {
    status: number;
    data: any;
    response: ValidBody;
    ok: boolean;
    request: {
        body: ValidBody;
        method: HttpOptions['method'];
        params: AnyObject;
        url: string;
        headers: AnyObject;
    };
};
export declare function http(options: HttpOptions): Promise<HttpResponse>;
/**
 *
 * @param {Object} responseData
 * @param {Array} responseData.headers
 * @private
 */
export declare function _getAllHeaders(responseData: {
    headers: any;
}): {};
declare const _default: {
    http: typeof http;
    _getAllHeaders: typeof _getAllHeaders;
};
export default _default;
