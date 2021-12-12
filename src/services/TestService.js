const {JSDOM} = require('jsdom');

const {TypeService} = require('@waveortho/services');

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS



/**
 *
 * @param {String} string
 * @returns {boolean}
 */
export function stringHasFunction(string) {
    return _isRegularFunction(string) || _isVariableFunction(string);
}




/**
 *
 * @param {String} fileContents
 * @param {Object} [options]
 * @param {Boolean} [options.noDescribe]
 * @param {Boolean} [options.noIt]
 * @returns {Array.<{type, description}>}
 */
export function extractDescribeAndItFunctionsFromFileContents(fileContents, options) {
    options = (TypeService.isObject(options)) ? options : {};
    const noDescribe = options.noDescribe === true;
    const noIt = options.noIt === true;
    
    if (TypeService.isString(fileContents, true)) {
        return fileContents.split('\n')
            .filter(line => (((line.includes('describe(\'') || line.includes('describe(`')) && noDescribe === false) || ((line.includes('it(\'') || line.includes('it(`')) && noIt === false)))
            .map((line) => line.trim())
            .map((line) => line.split('\',')[0])
            .map((line) => {
                return {
                    type: line.split('(')[0],
                    description: line.split('(')[1].substring(1)
                };
            });
    } else {
        return [];
    }
}




export function extractSimpleComponentTesterLines(fileContents) {
    if (TypeService.isString(fileContents, true)) {
        return fileContents.split('\n')
            .filter((line) => (line.includes('SimpleComponentTester.')))
            .map((line) => line.trim());
    } else {
        return [];
    }
}




/**
 *
 * @param {String} string
 * @returns {String}
 */
export function extractFunctionName(string) {
    if (_isRegularFunction(string)) {
        return _extractRegularFunctionName(string);
    } else if (_isVariableFunction(string)) {
        return _extractVariableFunctionName(string);
    } else {
        return null;
    }
}




/**
 *
 * @param component
 * @returns {{children: *, hasChildren: boolean, document: *, className: String, html: String, tag: String, window: Window, classList: Array.<String>, props: Object}}
 */
export function extractDetailsFromEnzymeComponent(component) {
    const componentName = component && component.constructor && component.constructor.name;
    
    let tag = null;
    let props = {};
    let children = undefined;
    let className = null;
    let classList = [];
    let html = null;
    let window = null;
    let element = null;
    let document = null;
    
    if (componentName === 'ShallowWrapper' || componentName === 'ReactWrapper') {
        tag = component.name();
        props = component.props();
        html = component.html();
        window = new JSDOM(html).window;
        document = window.document;
        
        const firstChild = document.querySelector('body').firstChild;
        
        if (firstChild) {
            element = firstChild;
        }
        
        if (componentName === 'ReactWrapper' && firstChild && firstChild.className && TypeService.isString(className, true) === false) {
            className = firstChild.className;
        }
        
        if (componentName === 'ReactWrapper' && firstChild && firstChild.tagName) {
            tag = firstChild.tagName.toLowerCase();
        }
        
        if (firstChild && (firstChild.innerHTML || firstChild.innerText || firstChild.textContent)) {
            children = firstChild.innerHTML || firstChild.innerText || firstChild.textContent;
        }
        
        classList = (TypeService.isString(className)) ? className.split(' ').filter((item) => !!item).map((item) => item.trim()) : [];
        
    } else if (componentName === 'initialize') {
        html = component.html();
        
        tag = component[0].name;
        children = (TypeService.isArray(component[0].children) && component[0].children.length > 0) ? component[0].children : undefined;
        window = new JSDOM(html).window;
        document = window.document;
    } else {
        throw new Error('invalid Enzyme component type');
    }
    
    return {
        tag,
        props,
        children,
        hasChildren: !!children,
        className,
        classList,
        html,
        window,
        element,
        document
    };
    
}




//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PRIVATE METHODS



/**
 *
 * @param {String} string
 * @returns {boolean}
 * @private
 */
export function _isRegularFunction(string) {
    return (string.indexOf('function') === 0 || string.indexOf('async function') === 0);
}




/**
 *
 * @param {String} string
 * @returns {String}
 * @private
 */
export function _extractRegularFunctionName(string) {
    return (_isRegularFunction(string)) ? string.split('function ')[1].split('(')[0] : null;
}




/**
 *
 * @param {String} string
 * @returns {Boolean}
 * @private
 */
export function _isVariableFunction(string) {
    const isVariable = (string.indexOf('var') === 0 || string.indexOf('let') === 0 || string.indexOf('const') === 0);
    
    if (isVariable) {
        return (string.includes('=>') && string.includes(' = ('));
    } else {
        return false;
    }
}




/**
 *
 * @param {String} string
 * @returns {String}
 * @private
 */
export function _extractVariableFunctionName(string) {
    let variableName = 'const ';
    
    if (string.indexOf('var') === 0) {
        variableName = 'var ';
    } else if (string.indexOf('let') === 0) {
        variableName = 'let ';
    }
    
    return (_isVariableFunction(string)) ? string.split(variableName)[1].split(' = (')[0] : null;
}



export default {
    stringHasFunction,
    extractDescribeAndItFunctionsFromFileContents,
    extractSimpleComponentTesterLines,
    extractFunctionName,
    extractDetailsFromEnzymeComponent,
    _isRegularFunction,
    _extractRegularFunctionName,
    _isVariableFunction,
    _extractVariableFunctionName,
};