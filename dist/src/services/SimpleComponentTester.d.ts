import 'jsdom-global/register';
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
export declare function testChildren(config: any, shouldExist?: any, options?: any): void;
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
export declare function testTag(config: any, options?: {
    props?: AnyObject;
    children?: any;
    elementSelector?: string;
    customRender?: () => void;
    noTag?: boolean;
}): void;
/**
 *
 * @param {TestingConfig} config
 * @param {Object} [options]
 * @param {*} [options.children]
 * @param {Function} [options.customRender] - Calls a function that renders the component
 * @param {Object} [options.props]
 * @param {Function} [options.output]
 */
export declare function testDefaultClasses(config: any, options?: any): void;
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
export declare function testClassName(config: any, options?: any): void;
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
export declare function testStyle(config: any, options?: any): void;
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
export declare function testProp(prop: any, config: any, testObj: any, options?: {
    skipDescription?: boolean;
    customRender?: () => void;
}): void;
declare type AnyObject = Record<any, unknown>;
/**
 *
 * @param {String} componentName
 * @param {Object} attributes
 * @param {*} children
 * @param {Object} [options]
 * @private
 */
export declare function _generateComponentText(componentName: string, attributes: AnyObject, children: any, options?: AnyObject): string;
/**
 *
 * @param {Object} attributes
 * @returns {string}
 * @private
 */
export declare function _generateComponentAttributes(attributes: any): string;
/**
 *
 * @param {*} value
 * @param {Object} [options]
 * @param {Boolean} [options.children]
 * @returns {String}
 * @private
 */
export declare function _valueToString(value: any, options?: {
    children?: boolean;
}): any;
/**
 *
 * @param {*} component
 * @returns {Boolean}
 * @private
 */
export declare function _isReactComponent(component: any): any;
export declare function _showDescription(value: any, cb: any): void;
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
export declare function _generateComponent(Component: any, props: any, children: any, options: any): any;
/**
 *
 * @param {HTMLElement} element
 * @param {ExpectedElementTestObject.queries} queries
 * @returns {undefined | *}
 * @private
 */
export declare function _getNestedElement(element: any, queries: any): any;
declare const _default: {
    testChildren: typeof testChildren;
    testTag: typeof testTag;
    testDefaultClasses: typeof testDefaultClasses;
    testClassName: typeof testClassName;
    testStyle: typeof testStyle;
    testProp: typeof testProp;
    _generateComponentText: typeof _generateComponentText;
    _generateComponentAttributes: typeof _generateComponentAttributes;
    _valueToString: typeof _valueToString;
    _isReactComponent: typeof _isReactComponent;
    _showDescription: typeof _showDescription;
    _generateComponent: typeof _generateComponent;
    _getNestedElement: typeof _getNestedElement;
};
export default _default;
