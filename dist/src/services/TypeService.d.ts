/**
 * @description this ensures that an item is undefined
 *
 * @param {*} item - item to be tested
 * @returns {Boolean} - true or false
 */
export declare function isUndefined(item: any): boolean;
/**
 * @description this ensures that an item is null
 *
 * @param {*} item - item to be tested
 * @returns {Boolean} - true or false
 */
export declare function isNull(item: any): boolean;
/**
 *@description this ensures an item is a date, or a valid date string
 *
 * @param {*} item - item to be tested
 * @param {Boolean} [allowString=false] - allow a user to test if an item is a string and a valid date object
 * @returns {Boolean} - true or false
 */
export declare function isDate(item: any, allowString?: any): boolean;
/**
 * @description this ensures that an item is explicitly true or false
 *
 * @param {*} item - item to be tested
 * @param {Boolean} [allowString=false] - allow 'true' and 'false' to return true
 * @param {*=} [equalityVal=null] - (true/false) if equalityVal is present, it will check to see if the value is true or false
 * @returns {Boolean} - true or false
 */
export declare function isBoolean(item: any, allowString?: boolean, equalityVal?: boolean | string): boolean;
/**
 * @description this ensures that an item is an integer (a number without decimals)
 *
 * @param {*} item - item to be tested
 * @param {Boolean} [withoutTypeConversion=false] - require that the item is not a string
 * @returns {Boolean} - true or false
 */
export declare function isInteger(item: any, withoutTypeConversion?: boolean): boolean;
/**
 * @description this ensures than an item is a number (with or without decimals)
 *
 * @param {*} item - item to be tested
 * @param {Boolean} [withoutTypeConversion=false] - require that the item is not a string
 * @returns {Boolean} - true or false
 */
export declare function isNumeric(item: any, withoutTypeConversion?: boolean): boolean;
/**
 * @description this ensures that an item is a function
 *
 * @param {*} item - item to be tested
 * @returns {Boolean} - true or false
 */
export declare function isFunction(item: any): boolean;
/**
 * @description this ensures that an item is a string
 *
 * @param {*} item - item to be tested
 * @param {Boolean} [requireNotEmpty=false] - require that the string has a length of at least one
 * @returns {Boolean} - true or false
 */
export declare function isString(item: any, requireNotEmpty?: boolean): boolean;
/**
 * @description this ensures than an item is an object
 *
 * @param {*} item - item to be tested
 * @param {Boolean} [requireNotEmpty=false] - require that the object has at least one key
 * @returns {Boolean} - true or false
 */
export declare function isObject(item: any, requireNotEmpty?: boolean): boolean;
/**
 * @description this ensures than an item is an array
 *
 * @param {*} item - item to be tested
 * @param {Boolean} [requireNotEmpty=false] - require that the array has a length of at least one
 * @returns {Boolean} - true or false
 */
export declare function isArray(item: any, requireNotEmpty?: boolean): boolean;
/**
 * @description this ensures that an item is an array or object and ensures that the item is not an empty version of those types
 *
 * @param {*} item
 * @param  {Boolean} [canBeEmpty=false] - allow the item (array or object) to be an empty array or object
 * @returns {Boolean} - true or false
 */
export declare function isJsonItem(item: any, canBeEmpty?: boolean): boolean;
/**
 *
 * @param {*} item
 * @returns {boolean} - true or false
 */
export declare function isIsoString(item: any): boolean;
/**
 * @description this ensures that an item is an array, boolean, object, string or number and ensures that the item is not an empty version of those types
 *
 * @param {*} item
 * @param {Boolean} [canBeEmpty=false] - allow the item (array, object, or string) to be empty versions of that item
 * @returns {Boolean} - true or false
 */
export declare function isValidResponse(item: any, canBeEmpty?: boolean): boolean;
declare const _default: {
    isUndefined: typeof isUndefined;
    isNull: typeof isNull;
    isDate: typeof isDate;
    isBoolean: typeof isBoolean;
    isInteger: typeof isInteger;
    isNumeric: typeof isNumeric;
    isFunction: typeof isFunction;
    isString: typeof isString;
    isObject: typeof isObject;
    isArray: typeof isArray;
    isJsonItem: typeof isJsonItem;
    isIsoString: typeof isIsoString;
    isValidResponse: typeof isValidResponse;
};
export default _default;
