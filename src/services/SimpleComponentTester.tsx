import 'jsdom-global/register';

import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {shallow, mount} from 'enzyme/build';
import {expect} from 'chai';

const TypeService = require('./TypeService');
const TestService = require('./TestService');

const TEST_CONSTANTS = {
    ADDITIONAL_CLASS: 'randomTestClass',
    STANDARD_CHILD_TEXT: 'Content',
    STANDARD_STYLE_OBJECT: {borderRadius: '1000px', textAlign: 'center'}
};


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//
//PUBLIC METHODS


/**
 * @typedef {Object} TestingConfig
 * @typedef {String} TestingConfig.ComponentName
 * @typedef {Object} TestingConfig.Component
 * @typedef {*} TestingConfig.children
 * @typedef {String} TestingConfig.tag
 */



/**
 *
 * @param {TestingConfig} config
 * @param {Boolean} [shouldExist = false]
 * @param {Object} [options]
 * @param {Object} [options.props]
 * @param {*} [options.children]
 * @param {Function} [options.customRender] - Calls a function that renders the component
 * @param {Function} [options.elementSelector] - Select a different element than the default first one in the body
 * @param {*} [options.expectedChildren]
 */
export function testChildren(config, shouldExist?, options?) {
    shouldExist = (shouldExist !== false);
    options = (TypeService.isObject(options)) ? options : {};
    const props = TypeService.isObject(options.props) ? options.props : {};
    const children = options.children;

    const expectedChildren = options.expectedChildren || children || TEST_CONSTANTS.STANDARD_CHILD_TEXT;

    describe('prop:children', () => {
        describe(_generateComponentText(config.ComponentName, props, expectedChildren), () => {
            const component = _generateComponent(config.Component, props, expectedChildren, {
                customRender: options.customRender,
                customRenderParameters: expectedChildren
            });

            let {children, document} = TestService.extractDetailsFromEnzymeComponent(component);

            if (options.elementSelector) {
                const element = document.querySelector(options.elementSelector);
                children = element.innerHTML || element.innerText || element.textContent;
            }

            it(`should ${shouldExist === false ? 'not ' : ''}render children`, (done) => {
                if (shouldExist) {
                    expect(children).to.equal(expectedChildren);
                } else {
                    expect(children).to.not.equal(TEST_CONSTANTS.STANDARD_CHILD_TEXT);
                }

                done();
            });
        });
    });
}



/**
 *
 * @param {TestingConfig} config
 * @param {Object} [options]
 * @param {*} [options.children]
 * @param {Object} [options.props]
 * @param {String} [options.elementSelector] - Select a different element than the default first one in the body
 * @param {Function} [options.customRender] - Calls a function that renders the component
 * @param {Boolean} [options.noTag] - If the component doesn't render a parent tag, this should be equal to true
 */
export function testTag(config, options?: { props?: AnyObject, children?: any, elementSelector?: string, customRender?: () => void, noTag?: boolean }) {
    options = (TypeService.isObject(options)) ? options : {};
    const children = options && (options.children || undefined);
    const props = options && TypeService.isObject(options.props) ? options.props : {};

    if (TypeService.isString(config.tag, true) === false) {
        throw new Error('config.tag (String) is required');
    } else {
        describe('rendered HTML tag', () => {
            describe(_generateComponentText(config.ComponentName, props as AnyObject, children), () => {
                const component = _generateComponent(config.Component, props, children, {customRender: options && options.customRender});

                let {element, document} = TestService.extractDetailsFromEnzymeComponent(component);

                if (options && options.elementSelector) {
                    element = document.querySelector(options.elementSelector);
                }

                if (options && options.noTag !== true) {
                    it(`should render an HTML tag equal to "${config.tag}"`, (done) => {
                        expect(element.tagName.toUpperCase()).to.equal(config.tag.toUpperCase());
                        done();
                    });
                }

                if (options && options.noTag === true) {
                    it('should not render any parent HTML tag', (done) => {
                        if (element) {
                            expect(element).to.not.have.property('tagName');
                            done();
                        } else {
                            done();
                        }
                    });
                }
            });
        });
    }
}



/**
 *
 * @param {TestingConfig} config
 * @param {Object} [options]
 * @param {*} [options.children]
 * @param {Function} [options.customRender] - Calls a function that renders the component
 * @param {Object} [options.props]
 * @param {Function} [options.output]
 */
export function testDefaultClasses(config, options?) {
    const {defaultClasses} = config;

    options = (TypeService.isObject(options)) ? options : {};
    const children = options.children || undefined;
    const props = TypeService.isObject(options.props) ? options.props : {};

    const isNullOrUndefined = (TypeService.isUndefined(defaultClasses) || TypeService.isNull(defaultClasses));
    let shouldExist = (isNullOrUndefined === false);

    if (shouldExist === true && (TypeService.isString(defaultClasses) === false && TypeService.isArray(defaultClasses) === false)) {
        throw new Error('config.defaultClasses (String | Array | undefined | null) is invalid');
    } else {
        shouldExist = (isNullOrUndefined === true) ? true : (defaultClasses.length > 0);

        describe('default classes', () => {
            describe(_generateComponentText(config.ComponentName, props, children), () => {
                const component = _generateComponent(config.Component, props, children, {customRender: options.customRender});

                let {classList, document} = TestService.extractDetailsFromEnzymeComponent(component);

                if (options.elementSelector) {
                    const element = document.querySelector(options.elementSelector);
                    classList = element.className.split(' ').filter((item) => !!item).map((item) => item.trim());
                }

                const valueList = (TypeService.isArray(defaultClasses)) ? defaultClasses : [defaultClasses];

                if (TypeService.isFunction(options.output) === true) {
                    options.output(component);
                } else {
                    it(`should render an classList that contains exactly: ${_valueToString(defaultClasses)}`, (done) => {
                        if (shouldExist) {
                            valueList.forEach((className) => {
                                expect(_valueToString(classList)).to.include(className);
                            });
                        } else {
                            expect(_valueToString(classList)).to.be.empty;
                        }

                        done();
                    });

                    it(`should have a classList with a length of ${valueList.length}`, (done) => {
                        if (classList.length !== valueList.length) {
                            done(new Error(`The rendered classList ${JSON.stringify(classList)} has a different length than the expected amount: ${JSON.stringify(valueList)}`));
                        } else {
                            done();
                        }
                    });
                }
            });
        });
    }
}



/**
 *
 * @param {TestingConfig} config
 * @param {Object} [options]
 * @param {*} [options.children]
 * @param {Object} [options.props]
 * @param {Function} [options.customRender] - Calls a function that renders the component
 * @param {Boolean} [options.noClass] - If the rendered element shouldn't allow the prop "className", this should be true
 * @param {Function} [options.output]
 */
export function testClassName(config, options?) {
    options = (TypeService.isObject(options)) ? options : {};
    const children = options.children || undefined;
    const props = TypeService.isObject(options.props) ? options.props : {};

    describe('prop:className', () => {
        const componentDescription = _generateComponentText(config.ComponentName, {className: TEST_CONSTANTS.ADDITIONAL_CLASS, ...props}, children);

        describe(componentDescription, () => {
            const component = _generateComponent(config.Component, {className: TEST_CONSTANTS.ADDITIONAL_CLASS, ...props}, children, {
                customRender: options.customRender,
                customRenderParameters: TEST_CONSTANTS.ADDITIONAL_CLASS
            });

            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {classList} = details;

            if (TypeService.isFunction(options.output) === true) {
                options.output(component, TEST_CONSTANTS.ADDITIONAL_CLASS);
            } else {
                if (options.noClass !== true) {
                    it(`should render a component with the classList containing: ${TEST_CONSTANTS.ADDITIONAL_CLASS}`, (done) => {
                        expect(classList).to.include(TEST_CONSTANTS.ADDITIONAL_CLASS);
                        done();
                    });
                }


                if (options.noClass === true) {
                    it(`should render a component without the additional class name: ${TEST_CONSTANTS.ADDITIONAL_CLASS}`, (done) => {
                        expect(classList).to.not.contain(TEST_CONSTANTS.ADDITIONAL_CLASS);
                        done();
                    });
                }
            }
        });
    });
}



/**
 *
 * @param {TestingConfig} config
 * @param {Object} [options]
 * @param {*} [options.children]
 * @param {Object} [options.props]
 * @param {String} [options.elementSelector] - Select a different element than the default first one in the body
 * @param {Function} [options.customRender] - Calls a function that renders the component
 * @param {Boolean} [options.noStyle] - If the rendered element won't have a style attribute, this should be true
 */
export function testStyle(config, options?) {
    options = (TypeService.isObject(options)) ? options : {};
    const children = options.children || undefined;
    const props = TypeService.isObject(options.props) ? options.props : {};

    describe('prop:style', () => {
        const componentDescription = _generateComponentText(config.ComponentName, {style: TEST_CONSTANTS.STANDARD_STYLE_OBJECT, ...props}, children);

        describe(componentDescription, () => {

            const component = _generateComponent(config.Component, {style: TEST_CONSTANTS.STANDARD_STYLE_OBJECT, ...props}, children, {
                customRender: options.customRender,
                customRenderParameters: TEST_CONSTANTS.STANDARD_STYLE_OBJECT
            });

            const details = TestService.extractDetailsFromEnzymeComponent(component);
            let {element, document} = details;

            if (options.elementSelector) {
                element = document.querySelector(options.elementSelector);
            }

            if (options.noStyle !== true) {
                it(`should have a border-radius style set to ${TEST_CONSTANTS.STANDARD_STYLE_OBJECT.borderRadius}`, (done) => {
                    expect(element.style.borderRadius).to.equal(TEST_CONSTANTS.STANDARD_STYLE_OBJECT.borderRadius);
                    done();
                });

                it(`should have a text-align style set to "${TEST_CONSTANTS.STANDARD_STYLE_OBJECT.textAlign}"`, (done) => {
                    expect(element.style.textAlign).to.equal(TEST_CONSTANTS.STANDARD_STYLE_OBJECT.textAlign);
                    done();
                });
            }


            if (options.noStyle === true) {
                it('should not render a style attribute with a border-radius or text-align', (done) => {
                    if (element && element.style) {
                        expect(element.style).to.not.have.property('borderRadius');
                        expect(element.style).to.not.have.property('textAlign');
                    } else {
                        expect(element).to.not.have.property('style');
                    }
                    done();
                });
            }
        });
    });
}



/**
 *
 * @param {String} prop - the name of the prop that you want to test
 *
 * @param {TestingConfig} config
 *
 * @param {Object} testObj
 * @param {Object} testObj.props - The object of props that you want to test
 *
 * @param {Array.<String>} [testObj.query] - A list of nested queries that you want to check drill-down into to test
 * @param {Array.<String>} [testObj.queries] - A list of nested queries that you want to check drill-down into to test
 *
 * @param {Object} [testObj.children] - The children that you want inside the component
 *
 * @param {Object | Function} testObj.output
 * @param {String | Array} [testObj.output.class] - it should contain all the values found here
 * @param {String | Array} [testObj.output.onlyClass] - it should only contain the values found here
 * @param {String | Array} [testObj.output.noClass] - it should contain none of the values found here
 * @param {Object} [testObj.output.attribute] - It should have an attribute equal to the object key that is equal to the object key's value
 * @param {Object} [testObj.output.style] - It should have a style key equal to the object key that is equal to the object key's value
 * @param {String} [testObj.output.tag] - The rendered element should have a tag that equals this value
 * @param {String} [testObj.output.children] - The rendered element should have children equal to this value
 * @param {String} [testObj.output.children_has] - The rendered element should have children that includes this value
 * @param {Boolean} [testObj.output.disabled] - If you expect the output element to be disabled
 * @param {String | Number} [testObj.output.value] - If you expect the output element to have a value
 *
 * @param {String | Array} [options] - it should contain all the values found here
 * @param {Boolean} [options.skipDescription] - If you want to skip the "prop:propName" describe function
 * @param {Function} [options.customRender] - Calls a function that renders the component
 */
export function testProp(prop, config, testObj, options?: { skipDescription?: boolean, customRender?: () => void }) {
    if (TypeService.isString(prop, true) === false) {
        throw new Error('prop (String) is required');
    }

    options = (TypeService.isObject(options)) ? options : {};

    const description = (options && options.skipDescription === true) ? '' : `prop:${prop}`;
    const componentText = _generateComponentText(config.ComponentName, testObj.props, testObj.children);

    const {output} = testObj;

    _showDescription(description, () => {
        _showDescription(componentText, () => {
            const component = _generateComponent(config.Component, {style: TEST_CONSTANTS.STANDARD_STYLE_OBJECT, ...testObj.props}, testObj.children, {customRender: options && options.customRender});
            let details = TestService.extractDetailsFromEnzymeComponent(component);

            if (TypeService.isArray(testObj.query) || TypeService.isArray(testObj.queries)) {
                details.element = _getNestedElement(details.element, testObj.query || testObj.queries);
            }

            if (TypeService.isObject(output)) {
                if (output.class || output.onlyClass) {
                    let decidedList = (TypeService.isArray(output.class) || TypeService.isString(output.class)) ? 'class' : 'onlyClass';
                    const valueList = TypeService.isArray(output[decidedList]) ? output[decidedList] : [output[decidedList]];

                    it(`should have a classList that contains ${decidedList === 'onlyClass' ? 'exactly ' : ''}${_valueToString(valueList)}`, (done) => {
                        if (valueList.length > 0) {
                            valueList.forEach((value) => {
                                expect(details.classList).to.include(value);
                            });
                        } else {
                            expect(details.classList).to.be.empty;
                        }

                        done();
                    });

                    if (decidedList === 'onlyClass') {
                        it(`should have a classList with a length of ${valueList.length}`, (done) => {
                            if (details.classList.length !== valueList.length) {
                                done(new Error(`The rendered classList ${JSON.stringify(details.classList)} has a different length than the expected amount: ${JSON.stringify(valueList)}`));
                            } else {
                                done();
                            }
                        });
                    }
                }

                if (output.noClass) {
                    const valueList = (TypeService.isArray(output.noClass)) ? output.noClass : [output.noClass];

                    it(`should have a classList that does not contain ${_valueToString(valueList)}`, (done) => {
                        valueList.forEach((value) => {
                            expect(details.classList).to.not.include(value);
                        });

                        done();
                    });
                }

                if (output.attribute) {
                    const attributes = Object.keys(output.attribute);

                    attributes.forEach((attributeKey) => {
                        const attributeValue = output.attribute[attributeKey];

                        it(`should render an element that has an attribute of "${attributeKey}" that is equal to "${attributeValue}"`, (done) => {
                            expect(details.element).to.have.property('getAttribute');
                            expect(details.element.getAttribute(attributeKey)).to.equal(attributeValue);
                            done();
                        });
                    });
                }

                if (output.style) {
                    const styleKeys = Object.keys(output.style);

                    styleKeys.forEach((styleKey) => {
                        const styleValue = output.style[styleKey];

                        it(`should render an element that has a style key of "${styleKey}" that is equal to "${styleValue}"`, (done) => {
                            expect(details.element).to.have.property('style');
                            expect(details.element.style).to.have.property(styleKey);
                            expect(details.element.style[styleKey]).to.equal(styleValue);
                            done();
                        });
                    });
                }

                if (output.tag) {
                    it(`should render an element with a tag equal to "${output.tag}"`, (done) => {
                        expect(details.element).to.exist;
                        expect(details.element.tagName).to.equal(output.tag.toUpperCase());
                        done();
                    });
                }

                if (TypeService.isBoolean(output.disabled)) {
                    it(`should render an element that is ${output.disabled === true ? '' : 'not '}disabled`, (done) => {
                        expect(details.element.disabled).to.equal(output.disabled === true);
                        done();
                    });
                }

                if (TypeService.isString(output.value) || TypeService.isNumeric(output.value)) {
                    it(`should render an element that has a value equal to: ${_valueToString(output.value)}`, (done) => {
                        expect(details.element.value).to.equal(output.value);
                        done();
                    });
                }


                if (output.children) {
                    it(`should render children equal to ${_valueToString(output.children)}`, (done) => {
                        const isTextElement = (details.element.toString() === '[object Text]');

                        if (isTextElement) {
                            expect(details.element.textContent).to.equal(output.children);
                        } else {
                            expect(details.element.innerHTML).to.equal(output.children);
                        }

                        done();
                    });
                }

                if (output.children_has) {
                    it(`should render children that contain ${_valueToString(output.children_has)}`, (done) => {
                        const isTextElement = (details.element.toString() === '[object Text]');

                        if (isTextElement) {
                            expect(details.element.textContext).to.contain(output.children_has);
                        } else {
                            expect(details.element.innerHTML).to.contain(output.children_has);
                        }

                        done();
                    });
                }
            }

            if (TypeService.isFunction(output)) {
                output(component);
            }

        });
    });

}


//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//
//PRIVATE METHODS

type AnyObject = Record<any, unknown>;

/**
 *
 * @param {String} componentName
 * @param {Object} attributes
 * @param {*} children
 * @param {Object} [options]
 * @private
 */

export function _generateComponentText(componentName: string, attributes: AnyObject, children: any, options?: AnyObject) {
    options = TypeService.isObject(options) ? options : {};

    const attributeString = _generateComponentAttributes(attributes);

    let componentText = `<${componentName}`;

    if (attributeString !== '') {
        componentText = componentText + ' ' + attributeString;
    }

    children = _valueToString(children, {children: true});
    const secondHalf = `</${componentName}>`;

    if (children !== '') {
        componentText = componentText + '>' + children + secondHalf;
    } else {
        componentText = componentText + '/>';
    }

    return componentText;
}


/**
 *
 * @param {Object} attributes
 * @returns {string}
 * @private
 */
export function _generateComponentAttributes(attributes) {
    if (TypeService.isObject(attributes, true)) {
        const keys = Object.keys(attributes);

        return keys.map((key) => {
            let value = _valueToString(attributes[key]);

            return `${key}={${value}}`;

        }).join(' ');
    } else {
        return '';
    }
}



/**
 *
 * @param {*} value
 * @param {Object} [options]
 * @param {Boolean} [options.children]
 * @returns {String}
 * @private
 */
export function _valueToString(value: any, options?: { children?: boolean }) {
    options = (TypeService.isObject(options)) ? options : {};


    if (TypeService.isString(value)) {
        if (options && options.children !== true) {
            value = '\'' + value + '\'';
        }
    } else if (_isReactComponent(value)) {
        value = ReactDOMServer.renderToStaticMarkup(value);
    } else if (TypeService.isJsonItem(value)) {
        value = JSON.stringify(value);
    } else if (TypeService.isFunction(value)) {
        value = value.toString();
    } else if (TypeService.isUndefined(value)) {
        value = '';
    }

    return value;
}


/**
 *
 * @param {*} component
 * @returns {Boolean}
 * @private
 */
export function _isReactComponent(component) {
    return component && React.isValidElement(component);
}


export function _showDescription(value, cb) {
    if (TypeService.isString(value, true)) {
        describe(value, () => {
            cb();
        });
    } else {
        describe('', () => {
            cb();
        });
    }
}


/**
 *
 * @param Component
 * @param {Object} props
 * @param {*} children
 * @param {Object} [options]
 * @param {'mount' | 'shallow'} [options.method]
 * @param {Function} [options.customRender]
 * @param {*} [options.customRenderParameters]
 * @private
 */
export function _generateComponent(Component, props, children, options) {
    options = (TypeService.isObject(options)) ? options : {};
    let {method, customRender, customRenderParameters} = options;

    const methodMap = {
        mount: mount,
        shallow: shallow
    };
    const defaultMethod = 'mount';
    const validMethods = Object.keys(methodMap);
    method = (method && validMethods.includes(method)) ? methodMap[method] : methodMap[defaultMethod];

    if (TypeService.isFunction(customRender)) {
        return customRender(customRenderParameters);
    } else {
        return method(
            <Component {...props}>{children}</Component>
        );
    }
}


/**
 *
 * @param {HTMLElement} element
 * @param {ExpectedElementTestObject.queries} queries
 * @returns {undefined | *}
 * @private
 */
export function _getNestedElement(element, queries) {
    queries = _.cloneDeep(queries);

    if (element) {
        if (queries.length > 0) {
            const currentQuery = queries[0];
            queries.shift();

            if (TypeService.isString(currentQuery)) {
                const newElement = element.querySelector(currentQuery);
                return _getNestedElement(newElement, queries);
            } else if (TypeService.isObject(currentQuery) && currentQuery.value && currentQuery.index) {
                const elements = element.querySelectorAll(currentQuery.value);
                return _getNestedElement(elements[currentQuery.index], queries);
            }
        } else {
            return element;
        }
    } else {
        throw new Error('No element was found with the query');
    }

}



export default {
    testChildren,
    testTag,
    testDefaultClasses,
    testClassName,
    testStyle,
    testProp,
    _generateComponentText,
    _generateComponentAttributes,
    _valueToString,
    _isReactComponent,
    _showDescription,
    _generateComponent,
    _getNestedElement
};