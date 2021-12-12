import {UtilityService} from './index';
let fetch;

if (typeof window !== 'undefined') {
    //browser
    fetch = require('unfetch');
} else {
    //server
    fetch = require('node-fetch').default;
}

const TypeService = require('./TypeService');

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS


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

type AnyObject = Record<any, unknown>;

export type ValidBody = AnyObject | any[] | string | number;

export type HttpOptions = {
    url: string,
    method: 'GET' | 'PUT' | 'POST' | 'DELETE',
    body?: ValidBody,
    data?: ValidBody,
    useDefaultHeaders?: boolean,
    params?: AnyObject,
    parameters?: AnyObject,
    query?: AnyObject,
    headers?: AnyObject,
    header?: AnyObject,
}


export type HttpResponse = {
    status: number,
    data: any,
    response: ValidBody,
    ok: boolean,
    request: {
        body: ValidBody,
        method: HttpOptions['method'],
        params: AnyObject,
        url: string,
        headers: AnyObject
    }
}

export async function http(options: HttpOptions): Promise<HttpResponse> {
    return new Promise(async (resolve, reject) => {
        const validMethods = ['GET', 'PUT', 'POST', 'DELETE'];

        if (TypeService.isObject(options) === false) {
           return reject(new Error('options (Object) is required'));
        } else if (TypeService.isString(options.url) === false) {
            return  reject(new Error('options.url (String) is required'));
        } else if (TypeService.isString(options.method) === false) {
            return reject(new Error('options.method (String) is required'));
        } else if (validMethods.includes(options.method.toUpperCase()) === false) {
            return reject(new Error(`options.method must be one of the following values ${JSON.stringify(validMethods)}`));
        }

        options = UtilityService.validateItem(options, 'object', {});
        options.useDefaultHeaders = (options.useDefaultHeaders !== false);

        let body = <any>undefined;

        if (TypeService.isObject(options.data)) {
            body = options.data;
        } else if (TypeService.isObject(options.body)) {
            body = options.body;
        }

        if (TypeService.isJsonItem(body)) {
            body = JSON.stringify(body);
        }


        let url = options.url;
        let parameterObject = {};

        if (TypeService.isObject(options.params)) {
            parameterObject = options.params as AnyObject;
        } else if (TypeService.isObject(options.parameters)) {
            parameterObject = options.parameters as AnyObject;
        } else if (TypeService.isObject(options.query)) {
            parameterObject = options.query as AnyObject;
        }

        if (TypeService.isObject(parameterObject, true)) {
            const stringParams = Object.entries(parameterObject).map(([key, val]) => {
                val = (Array.isArray(val) || typeof val === 'object') ? JSON.stringify(val) : val;
                return `${key}=${val}`;
            }).join('&');

            url = url + '?' + encodeURI(stringParams);
        }


        let headers = {};

        if (TypeService.isObject(options.headers)) {
            headers = options.headers as AnyObject;
        } else if (TypeService.isObject(options.header)) {
            headers = options.header as AnyObject;
        }

        if (options.useDefaultHeaders) {
            headers['accept'] = 'application/json';
            headers['content-type'] = 'application/json';
        }


        let method = options.method.toUpperCase();

        if (method === 'GET') {
            headers['Accept'] = 'application/x-www-form-urlencoded';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }


        const isAbsoluteUrl = (url.substr(0, 4) === 'http');


        let response = {
            headers: {},
            status: 0,
            statusText: null
        };

        fetch(url, {
            method,
            headers,
            body
        }).then((responseData) => {
            let status = responseData.status;

            response = {
                status: responseData.status,
                headers: _getAllHeaders(responseData),
                statusText: responseData.statusText
            };

            let isJson = false;

            try {
                isJson = response.headers['content-type'].includes('application/json');
            } catch (e) {
                isJson = false;
            }

            let jsonResponse = {};

            if (status === 204) {
                jsonResponse = '';
            } else {
                if (isJson) {
                    jsonResponse = responseData.json();
                } else {
                    jsonResponse = responseData.text();
                }
            }

            return jsonResponse;
        }).then((responseJson) => {
            const responseObject = {
                status: response.status,
                data: responseJson,
                response: response,
                ok: (response.status >= 200 && response.status < 300),
                request: {
                    body: body,
                    method: method,
                    params: parameterObject,
                    url: url,
                    headers: headers
                }
            } as HttpResponse;

            resolve(responseObject);
        }).catch(reject);
    });
}


//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PRIVATE METHODS


/**
 *
 * @param {Object} responseData
 * @param {Array} responseData.headers
 * @private
 */
export function _getAllHeaders(responseData: { headers }) {
    if (!TypeService.isObject(responseData)) {
        throw Error('responseData (Object) is required');
    }

    let headers = {};

    responseData.headers.forEach((value, name) => {
        headers[name] = value;
    });

    return headers;
}



export default {
    http: http,
    _getAllHeaders: _getAllHeaders
};