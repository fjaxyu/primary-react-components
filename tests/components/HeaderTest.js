import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Header} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Header', () => {
    
    const config = {
        Component: Header,
        ComponentName: 'Header',
        tag: 'h1',
        defaultClasses: ['header']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    const tagSizeTests = [
        {input: 'bad type', output: 'h1'},
        {input: '', output: 'h1'},
        {input: 5, output: 'h1'},
        {input: true, output: 'h1'},
        {input: false, output: 'h1'},
        {input: new Date(), output: 'h1'},
        {input: 'large', output: 'h1'},
        {input: 'extra-large', output: 'h1'},
        {input: 'extra-extra-large', output: 'h1'},
        {input: 'medium', output: 'h2'},
        {input: 'small', output: 'h3'},
        {input: 'extra-small', output: 'h4'},
        {input: 'extra-extra-small', output: 'h5'},
        {input: 'extra-extra-extra-small', output: 'h6'},
        {input: 'lg', output: 'h1'},
        {input: 'md', output: 'h2'},
        {input: 'sm', output: 'h3'},
        {input: 'xs', output: 'h4'},
        {input: 'xxs', output: 'h5'},
        {input: 'xxxs', output: 'h6'},
        {input: 'default', output: 'h1'},
        {input: 'xl', output: 'h1'},
        {input: 'xxl', output: 'h1'}
    ];
    
    
    tagSizeTests.forEach((testObj, index) => {
        SimpleComponentTester.testProp('size', config, {
            props: {size: testObj.input},
            output: {tag: testObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    
    
    const classSizeTests = [
        {input: 'xl', output: 'xl'},
        {input: 'extra-large', output: 'xl'},
        {input: 'extra-extra-large', output: 'xxl'},
        {input: 'xxl', output: 'xxl'}
    ];
    
    classSizeTests.forEach((testObj, index) => {
        SimpleComponentTester.testProp('size', config, {
            props: {size: testObj.input},
            output: {class: testObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    
    
    SimpleComponentTester.testProp('textCenter', config, {
        props: {textCenter: true},
        output: {class: 'text-center'}
    });
    
    
    
    SimpleComponentTester.testProp('noTopPadding', config, {
        props: {noTopPadding: true},
        output: {class: 'no-top-padding'}
    });
    
    
    
    SimpleComponentTester.testProp('bold', config, {
        props: {bold: true},
        output: {class: 'bold'}
    });
    
});