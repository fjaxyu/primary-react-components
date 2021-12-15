import HttpService from './HttpService';
export { HttpService };
import RouteService from './RouteService';
export { RouteService };
import TypeService from './TypeService';
export { TypeService };
import UtilityService from './UtilityService';
export { UtilityService };
declare const _default: {
    HttpService: {
        http: typeof import("./HttpService").http;
        _getAllHeaders: typeof import("./HttpService")._getAllHeaders;
    };
    RouteService: {
        getIpAddress: typeof import("./RouteService").getIpAddress;
        getUserAgent: typeof import("./RouteService").getUserAgent;
        isSecureEndpoint: typeof import("./RouteService").isSecureEndpoint;
    };
    TypeService: {
        isUndefined: typeof import("./TypeService").isUndefined;
        isNull: typeof import("./TypeService").isNull;
        isDate: typeof import("./TypeService").isDate;
        isBoolean: typeof import("./TypeService").isBoolean;
        isInteger: typeof import("./TypeService").isInteger;
        isNumeric: typeof import("./TypeService").isNumeric;
        isFunction: typeof import("./TypeService").isFunction;
        isString: typeof import("./TypeService").isString;
        isObject: typeof import("./TypeService").isObject;
        isArray: typeof import("./TypeService").isArray;
        isJsonItem: typeof import("./TypeService").isJsonItem;
        isIsoString: typeof import("./TypeService").isIsoString;
        isValidResponse: typeof import("./TypeService").isValidResponse;
    };
    UtilityService: {
        isEmailOrPhone: typeof import("./UtilityService").isEmailOrPhone;
        generateRandomNumberString: typeof import("./UtilityService").generateRandomNumberString;
        repeatFunction: typeof import("./UtilityService").repeatFunction;
        repeatString: typeof import("./UtilityService").repeatString;
        isValidPhone: typeof import("./UtilityService").isValidPhone;
        obfuscatePhone: typeof import("./UtilityService").obfuscatePhone;
        isJson: typeof import("./UtilityService").isJson;
        extractQueryParametersFromUrl: typeof import("./UtilityService").extractQueryParametersFromUrl;
        obfuscateEmail: typeof import("./UtilityService").obfuscateEmail;
        isValidEmail: typeof import("./UtilityService").isValidEmail;
        sanitizePhone: typeof import("./UtilityService").sanitizePhone;
        numberToPercentage: typeof import("./UtilityService").numberToPercentage;
        round: typeof import("./UtilityService").round;
        numberWithCommas: typeof import("./UtilityService").numberWithCommas;
        sanitizeEmail: typeof import("./UtilityService").sanitizeEmail;
        roundNumber: typeof import("./UtilityService").roundNumber;
        toProperCase: typeof import("./UtilityService").toProperCase;
        objectToQueryString: typeof import("./UtilityService").objectToQueryString;
        formatAsCurrency: typeof import("./UtilityService").formatAsCurrency;
        arrayOfStringsContainsValue: typeof import("./UtilityService").arrayOfStringsContainsValue;
        getIndexOfItemThatContainsValueFromArray: typeof import("./UtilityService").getIndexOfItemThatContainsValueFromArray;
        convertValueToStringValue: typeof import("./UtilityService").convertValueToStringValue;
        pluralityQualifier: typeof import("./UtilityService").pluralityQualifier;
        validateItem: typeof import("./UtilityService").validateItem;
        copyObject: typeof import("./UtilityService").copyObject;
        searchStringToQueryParams: typeof import("./UtilityService").searchStringToQueryParams;
        getQueryObjectFromUrl: typeof import("./UtilityService").getQueryObjectFromUrl;
        extractEndpointWithoutSearchString: typeof import("./UtilityService").extractEndpointWithoutSearchString;
        extractNumbersFromString: typeof import("./UtilityService").extractNumbersFromString;
        extractSearchString: typeof import("./UtilityService").extractSearchString;
        sortArrayOfObjectsByKey: typeof import("./UtilityService").sortArrayOfObjectsByKey;
        generateRandomInteger: typeof import("./UtilityService").generateRandomInteger;
        _getValueForSorting: typeof import("./UtilityService")._getValueForSorting;
    };
};
export default _default;