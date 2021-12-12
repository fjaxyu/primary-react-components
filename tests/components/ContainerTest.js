import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Container} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('Container', () => {
    
    
    const config = {
        Component: Container,
        ComponentName: 'Container',
        tag: 'div',
        defaultClasses: ['container']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    
    const sizeTests = [
        {input: 'small', output: 'sm'},
        {input: 'sm', output: 'sm'},
        {input: 'large', output: 'lg'},
        {input: 'lg', output: 'lg'}
    ];
    
    sizeTests.forEach((testObj, index) => {
        SimpleComponentTester.testProp('size', config, {
            props: {size: testObj.input},
            output: {class: 'container-' + testObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    
    SimpleComponentTester.testProp('centerContent', config, {
        props: {centerContent: true},
        output: {class: 'center-content'}
    });
    
    SimpleComponentTester.testProp('centerContent', config, {
        props: {},
        output: {noClass: 'center-content'}
    }, {skipDescription: true});
    
    SimpleComponentTester.testProp('centerContent', config, {
        props: {centerContent: false},
        output: {noClass: 'center-content'}
    }, {skipDescription: true});
    
    SimpleComponentTester.testProp('inline', config, {
        props: {inline: true},
        output: {class: 'inline'}
    });
    
    SimpleComponentTester.testProp('flex', config, {
        props: {flex: true},
        output: {class: 'flex'}
    });
    
    SimpleComponentTester.testProp('mode', config, {
        props: {mode: 'sidebar'},
        output: {class: 'sidebar-container'}
    });
    
});