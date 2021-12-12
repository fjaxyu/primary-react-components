const TypeService = require('./TypeService');

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS


/**
 *
 * @param string
 * @returns {string}
 */
export function isEmailOrPhone(string) {
    if (TypeService.isString(string, true)) {
        return (string.indexOf('@') >= 0) ? 'email' : 'phone';
    } else {
        throw new Error('input is not string or is empty');
    }
}



/**
 *
 * @param {Number} length
 * @returns {string}
 */
export function generateRandomNumberString(length) {
    if (!TypeService.isInteger(length, true)) {
        throw new Error('length (Integer) is required');
    }

    return repeatFunction(generateRandomInteger, length).join('');
}



/**
 *
 * @param {Function} callback
 * @param {Number} count
 * @returns {Array}
 */
export function repeatFunction(callback: Function, count) {
    if (!TypeService.isFunction(callback)) {
        throw new Error('callback (Function) is required');
    }

    if (!TypeService.isInteger(count)) {
        throw new Error('count (Integer) is required');
    }

    const values = [];

    for (let i = 0; i < count; i++) {
        // @ts-ignore
        values.push(callback());
    }

    return values;
}



/**
 *
 * @param {String} string
 * @param {Number} count
 * @param {String} [joiner]
 * @returns {string}
 */
export function repeatString(string, count, joiner?: string) {
    joiner = (TypeService.isString(joiner)) ? joiner : '';

    return repeatFunction(() => {
        return string;
    }, count).join(joiner);
}



/**
 *
 * @param {String} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
    return !!((TypeService.isString(phone) || TypeService.isInteger(phone)) && sanitizePhone(phone).length === 10);
}



/**
 *
 * @param {String} phone
 * @returns {String}
 */
export function obfuscatePhone(phone) {
    if (isValidPhone(phone)) {
        phone = sanitizePhone(phone);

        return `(${phone.substr(0, 1)}**) ***-**${phone.substr(8, 2)}`;
    } else {
        throw new Error('phone (String) must be 10 digits long and only numbers');
    }
}



/**
 *
 * @param {String} email
 * @returns {string}
 */
export function obfuscateEmail(email) {
    if (isValidEmail(email)) {
        email = sanitizeEmail(email);
        const charactersToBeShown = 2;

        let emailSplit = email.split('@');

        const part1 = emailSplit[0];
        let part2 = emailSplit[1];

        let part2Split = part2.split('.');
        const ending = '.' + part2Split[part2Split.length - 1];

        part2Split.pop();

        part2 = part2Split.join('.');


        let parts = [
            part1.substr(0, charactersToBeShown),
            repeatString('*', part1.length - charactersToBeShown),
            '@',
            part2.substr(0, charactersToBeShown),
            repeatString('*', part2.length - charactersToBeShown),
            ending
        ];

        return parts.join('');
    } else {
        throw new Error('email (String) must be a valid email');
    }
}



/**
 *
 * @param {String} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (TypeService.isString(email)) {
        return re.test(email.trim());
    } else {
        return false;
    }
}



/**
 *
 * @param {String} phone
 * @returns {String}
 */
export function sanitizePhone(phone) {
    if (TypeService.isInteger(phone, true)) {
        phone = '' + phone;
    }

    return phone.replace(/[^0-9]/g, '').trim();
}



/**
 *
 * @param {String} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
    return email.trim().toLowerCase();
}



/**
 *
 * @param {Array} array
 * @param {String} value
 * @returns {boolean}
 */
export function arrayOfStringsContainsValue(array, value) {
    if (!TypeService.isArray(array)) {
        throw new Error('array (Array) is required');
    } else if (!TypeService.isString(value, true)) {
        throw new Error('value (String) is required and cannot be empty');
    }

    return (getIndexOfItemThatContainsValueFromArray(array, value) > -1);
}



/**
 *
 * @param {Array} array
 * @param {String} value
 * @returns {number}
 */
export function getIndexOfItemThatContainsValueFromArray(array, value) {
    if (!TypeService.isArray(array)) {
        throw new Error('array (Array) is required');
    } else if (!TypeService.isString(value, true)) {
        throw new Error('value (String) is required and cannot be empty');
    }

    let foundIndex = -1;

    for (let i = 0; i < array.length; i++) {
        const arrayItem = array[i];

        if (arrayItem.includes(value)) {
            foundIndex = i;
            i = array.length;
        }
    }

    return foundIndex;
}



/**
 *
 * @param {*} value
 *
 * @returns {string}
 */
export function convertValueToStringValue(value) {
    if (TypeService.isJsonItem(value, true)) {
        return JSON.stringify(value);
    } else if (TypeService.isString(value)) {
        return '"' + value + '"';
    } else {
        return '' + value;
    }
}



/**
 * @description This function will check if a value is equal to 1, and return a string if the value is plural or not
 *
 * @param {Number} count
 * @param {String} [pluralQualifier] - The value to be returned if not singular
 * @param {String} [singularQualifier] - The value to be returned if singular
 *
 * @returns {string}
 */
export function pluralityQualifier(count: number, pluralQualifier?: string, singularQualifier?: string): string {
    pluralQualifier = (TypeService.isString(pluralQualifier)) ? pluralQualifier : '';
    singularQualifier = (TypeService.isString(singularQualifier)) ? singularQualifier : '';

    return ((count === 1) ? singularQualifier : pluralQualifier) as string;
}



/**
 *
 * @param {*} item
 * @param {'undefined' | 'null' | 'object' | 'date' | 'boolean' | 'integer' | 'number' | 'function' | 'string' | 'array'} type
 * @param {*} [defaultValue]
 *
 * @returns {*}
 */
export function validateItem(item: any, type: (
    'undefined' | 'null' | 'object' | 'date' | 'boolean' | 'integer' | 'number' | 'function' | 'string' | 'array'
    ), defaultValue: any): any {
    const typeMap = {
        'undefined': TypeService.isUndefined,
        'null': TypeService.isNull,
        'object': TypeService.isObject,
        'date': TypeService.isDate,
        'boolean': TypeService.isBoolean,
        'integer': TypeService.isInteger,
        'number': TypeService.isNumeric,
        'function': TypeService.isFunction,
        'string': TypeService.isString,
        'array': TypeService.isArray
    };

    const key = type.toLowerCase();

    if (typeMap[key]) {
        return (typeMap[key](item) === true) ? item : defaultValue;
    } else {
        throw new Error('invalid key');
    }
}



export function copyObject(item: any): any {
    return JSON.parse(JSON.stringify({value: item})).value;
}



export function searchStringToQueryParams(searchString: string): Record<any, unknown> {
    if (searchString.includes('?')) {
        let newString = searchString.split('?');
        newString.shift();
        searchString = newString.join('?');
    }

    try {
        if (!(searchString.length >= 1)) {
            return {};
        }

        return JSON.parse('{"' + decodeURI(searchString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (error) {
        return {};
    }
}



export function getQueryObjectFromUrl(url: string): Record<any, unknown> {
    return searchStringToQueryParams(extractSearchString(url));
}



export function extractEndpointWithoutSearchString(url: string) {
    return url && url.includes('?') ? url.split(/\?/)[0] : url;
}



export function extractNumbersFromString(string: string) {
    return string.replace(/[^0-9]/g, '');
}



export function extractSearchString(url: string) {
    return url && url.includes('?') ? url.split(/\?/)[1] : '';
}



export function sortArrayOfObjectsByKey(items: any[], key: string, descending = false) {
    items = validateItem(items, 'array', []);

    return items.sort(function (a, b) {
        const valueA = _getValueForSorting(a[key]);
        const valueB = _getValueForSorting(b[key]);

        let comparison = 0;

        if (valueA > valueB) {
            comparison = -1;
        } else if (valueA < valueB) {
            comparison = 1;
        }

        return (descending === true) ? comparison : comparison * -1;
    });
}



export function roundNumber(value, decimals) {
    decimals = validateItem(decimals, 'integer', 0);
    const multiplier = Math.pow(10, decimals);

    return (Math.round(value * multiplier) / multiplier);
}



export function formatAsCurrency(amount: number, options?: { decimals?: 2, round?: 2, decimal?: '.', thousands?: '.', currencySign?: '$' }): string | null {
    let decimalCount = validateItem(options && options.decimals, 'number', 2);
    let round = validateItem(options && options.round, 'number', decimalCount);
    let decimalSymbol = validateItem(options && options.decimal, 'string', '.');
    let thousandSymbol = validateItem(options && options.thousands, 'string', ',');
    const currencySign = validateItem(options && options.currencySign, 'string', '$');

    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = TypeService.isInteger(decimalCount) ? 2 : decimalCount;

        amount = validateItem(amount, 'number', 0);
        const isNegative = amount < 0;
        const negativeSign = (isNegative) ? '-' : '';

        amount = roundNumber(amount, round);

        let i = parseInt(Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        let stringArray = [
            negativeSign,

            currencySign,

            (j ? i.substr(0, j) + thousandSymbol : ''),

            i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandSymbol)
        ];

        if (decimalCount > 0) {
            stringArray.push(decimalSymbol);

            // @ts-ignore
            stringArray.push(Math.abs(amount).toFixed(decimalCount).split('.')[1]);
        }

        return stringArray.join('');
    } catch (e) {
        console.log(e);
        return null;
    }
}



/**
 * @params {String} text
 *
 * @returns {String}
 */
export function toProperCase(text) {
    if (TypeService.isString(text)) {
        return text.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    } else {
        return text;
    }
}



export function extractQueryParametersFromUrl(url) {
    let parameterObject = {};
    let urlSplit = url.split('?');

    if (urlSplit.length > 0) {
        urlSplit.shift();

        url = urlSplit.join('?');

        const decodedSearch = decodeURI(url);

        if (TypeService.isString(decodedSearch, true)) {
            const options = decodedSearch.split('&');

            options.forEach((optionObj) => {
                if (TypeService.isString(optionObj, true) && optionObj.includes('=')) {
                    const valueSplit = optionObj.split('=');
                    let key, value;

                    key = valueSplit[0];

                    if (valueSplit.length > 1) {
                        value = valueSplit[1].split('%2C').join(',');
                    }

                    parameterObject[key] = value;
                }
            });
        }
    }

    return parameterObject;
}



export function objectToQueryString(queryObject) {
    const keys = Object.keys(queryObject);

    return keys.filter((key) => !TypeService.isUndefined(queryObject[key])).map((key) => {
        return [key, encodeURIComponent(queryObject[key])].join('=');
    }).join('&');
}



export function isJson(item: any | string): boolean {
    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    return true;
}



export function numberToPercentage(number: number, decimals: number): string {
    return round(number * 100, decimals) + '%';
}



export function round(number: number, decimals: number): number {
    return +(Math.round(number + ('e+' + decimals) as any) + 'e-' + decimals);
}



export function numberWithCommas(number = 0): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}



//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PRIVATE METHODS


/**
 *
 * @param {Number} [min]
 * @param {Number} [max]
 *
 * @returns {Number}
 * @private
 */
export function generateRandomInteger(min, max) {
    min = validateItem(min, 'integer', 0);
    max = validateItem(max, 'integer', 9);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export function _getValueForSorting(value) {
    if (TypeService.isDate(value)) {
        return value.getTime();
    } else if (TypeService.isNumeric(value)) {
        return Number(value);
    } else if (TypeService.isString(value)) {
        return value.toUpperCase();
    } else {
        return value;
    }
}



export default {
    isEmailOrPhone,
    generateRandomNumberString,
    repeatFunction,
    repeatString,
    isValidPhone,
    obfuscatePhone,
    isJson,
    extractQueryParametersFromUrl,
    obfuscateEmail,
    isValidEmail,
    sanitizePhone,
    numberToPercentage,
    round,
    numberWithCommas,
    sanitizeEmail,
    roundNumber,
    toProperCase,
    objectToQueryString,
    formatAsCurrency,
    arrayOfStringsContainsValue,
    getIndexOfItemThatContainsValueFromArray,
    convertValueToStringValue,
    pluralityQualifier,
    validateItem,
    copyObject,
    searchStringToQueryParams,
    getQueryObjectFromUrl,
    extractEndpointWithoutSearchString,
    extractNumbersFromString,
    extractSearchString,
    sortArrayOfObjectsByKey,
    generateRandomInteger,
    _getValueForSorting
};