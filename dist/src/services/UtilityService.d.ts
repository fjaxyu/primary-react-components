/**
 *
 * @param string
 * @returns {string}
 */
export declare function isEmailOrPhone(string: any): "phone" | "email";
/**
 *
 * @param {Number} length
 * @returns {string}
 */
export declare function generateRandomNumberString(length: any): string;
/**
 *
 * @param {Function} callback
 * @param {Number} count
 * @returns {Array}
 */
export declare function repeatFunction(callback: Function, count: any): never[];
/**
 *
 * @param {String} string
 * @param {Number} count
 * @param {String} [joiner]
 * @returns {string}
 */
export declare function repeatString(string: any, count: any, joiner?: string): string;
/**
 *
 * @param {String} phone
 * @returns {boolean}
 */
export declare function isValidPhone(phone: any): boolean;
/**
 *
 * @param {String} phone
 * @returns {String}
 */
export declare function obfuscatePhone(phone: any): string;
/**
 *
 * @param {String} email
 * @returns {string}
 */
export declare function obfuscateEmail(email: any): string;
/**
 *
 * @param {String} email
 * @returns {boolean}
 */
export declare function isValidEmail(email: any): boolean;
/**
 *
 * @param {String} phone
 * @returns {String}
 */
export declare function sanitizePhone(phone: any): any;
/**
 *
 * @param {String} email
 * @returns {string}
 */
export declare function sanitizeEmail(email: any): any;
/**
 *
 * @param {Array} array
 * @param {String} value
 * @returns {boolean}
 */
export declare function arrayOfStringsContainsValue(array: any, value: any): boolean;
/**
 *
 * @param {Array} array
 * @param {String} value
 * @returns {number}
 */
export declare function getIndexOfItemThatContainsValueFromArray(array: any, value: any): number;
/**
 *
 * @param {*} value
 *
 * @returns {string}
 */
export declare function convertValueToStringValue(value: any): string;
/**
 * @description This function will check if a value is equal to 1, and return a string if the value is plural or not
 *
 * @param {Number} count
 * @param {String} [pluralQualifier] - The value to be returned if not singular
 * @param {String} [singularQualifier] - The value to be returned if singular
 *
 * @returns {string}
 */
export declare function pluralityQualifier(count: number, pluralQualifier?: string, singularQualifier?: string): string;
/**
 *
 * @param {*} item
 * @param {'undefined' | 'null' | 'object' | 'date' | 'boolean' | 'integer' | 'number' | 'function' | 'string' | 'array'} type
 * @param {*} [defaultValue]
 *
 * @returns {*}
 */
export declare function validateItem(item: any, type: ('undefined' | 'null' | 'object' | 'date' | 'boolean' | 'integer' | 'number' | 'function' | 'string' | 'array'), defaultValue: any): any;
export declare function copyObject(item: any): any;
export declare function searchStringToQueryParams(searchString: string): Record<any, unknown>;
export declare function getQueryObjectFromUrl(url: string): Record<any, unknown>;
export declare function extractEndpointWithoutSearchString(url: string): string;
export declare function extractNumbersFromString(string: string): string;
export declare function extractSearchString(url: string): string;
export declare function sortArrayOfObjectsByKey(items: any[], key: string, descending?: boolean): any[];
export declare function roundNumber(value: any, decimals: any): number;
export declare function formatAsCurrency(amount: number, options?: {
    decimals?: 2;
    round?: 2;
    decimal?: '.';
    thousands?: '.';
    currencySign?: '$';
}): string | null;
/**
 * @params {String} text
 *
 * @returns {String}
 */
export declare function toProperCase(text: any): any;
export declare function extractQueryParametersFromUrl(url: any): {};
export declare function objectToQueryString(queryObject: any): string;
export declare function isJson(item: any | string): boolean;
export declare function numberToPercentage(number: number, decimals: number): string;
export declare function round(number: number, decimals: number): number;
export declare function numberWithCommas(number?: number): string;
/**
 *
 * @param {Number} [min]
 * @param {Number} [max]
 *
 * @returns {Number}
 * @private
 */
export declare function generateRandomInteger(min: any, max: any): any;
export declare function _getValueForSorting(value: any): any;
declare const _default: {
    isEmailOrPhone: typeof isEmailOrPhone;
    generateRandomNumberString: typeof generateRandomNumberString;
    repeatFunction: typeof repeatFunction;
    repeatString: typeof repeatString;
    isValidPhone: typeof isValidPhone;
    obfuscatePhone: typeof obfuscatePhone;
    isJson: typeof isJson;
    extractQueryParametersFromUrl: typeof extractQueryParametersFromUrl;
    obfuscateEmail: typeof obfuscateEmail;
    isValidEmail: typeof isValidEmail;
    sanitizePhone: typeof sanitizePhone;
    numberToPercentage: typeof numberToPercentage;
    round: typeof round;
    numberWithCommas: typeof numberWithCommas;
    sanitizeEmail: typeof sanitizeEmail;
    roundNumber: typeof roundNumber;
    toProperCase: typeof toProperCase;
    objectToQueryString: typeof objectToQueryString;
    formatAsCurrency: typeof formatAsCurrency;
    arrayOfStringsContainsValue: typeof arrayOfStringsContainsValue;
    getIndexOfItemThatContainsValueFromArray: typeof getIndexOfItemThatContainsValueFromArray;
    convertValueToStringValue: typeof convertValueToStringValue;
    pluralityQualifier: typeof pluralityQualifier;
    validateItem: typeof validateItem;
    copyObject: typeof copyObject;
    searchStringToQueryParams: typeof searchStringToQueryParams;
    getQueryObjectFromUrl: typeof getQueryObjectFromUrl;
    extractEndpointWithoutSearchString: typeof extractEndpointWithoutSearchString;
    extractNumbersFromString: typeof extractNumbersFromString;
    extractSearchString: typeof extractSearchString;
    sortArrayOfObjectsByKey: typeof sortArrayOfObjectsByKey;
    generateRandomInteger: typeof generateRandomInteger;
    _getValueForSorting: typeof _getValueForSorting;
};
export default _default;
