import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, render, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {InputNumber} from './../../dist/index';


import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('InputNumber', () => {
    
    const config = {
        Component: InputNumber,
        ComponentName: 'InputNumber',
        tag: 'input',
        defaultClasses: ['form-control']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, false);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    const typeTests = [
        {input: 'bad type', output: 'number'},
        {input: '', output: 'number'},
        {input: 5, output: 'number'},
        {input: true, output: 'number'},
        {input: false, output: 'number'},
        {input: new Date(), output: 'number'},
        {input: 'text', output: 'number'},
        {input: 'number', output: 'number'},
        {input: 'password', output: 'number'},
        {input: 'email', output: 'number'},
        {input: 'checkbox', output: 'number'}
    ];
    
    typeTests.forEach((typeObj, index) => {
        SimpleComponentTester.testProp('type', config, {
            props: {type: typeObj.input},
            output: {attribute: {type: typeObj.output}}
        }, {skipDescription: (index > 0)});
    });
    
    SimpleComponentTester.testProp('hasError', config, {
        props: {hasError: true},
        output: {class: 'has-error'}
    });
    
    SimpleComponentTester.testProp('textCenter', config, {
        props: {textCenter: true},
        output: {class: 'text-center'}
    });
    
    const placeholderValue = 'username';
    
    SimpleComponentTester.testProp('placeholder', config, {
        props: {placeholder: placeholderValue},
        output: {attribute: {placeholder: placeholderValue}}
    });
    
    SimpleComponentTester.testProp('disabled', config, {
        props: {disabled: true},
        output: {disabled: true}
    });
    
    
    const valueValue = '5';
    
    SimpleComponentTester.testProp('value', config, {
        props: {value: valueValue},
        output: {value: valueValue}
    });
    
    SimpleComponentTester.testProp('onChange', config, {
        props: {
            onChange: () => {
                return 'test';
            }
        },
        output: {
            attribute: {'data-has-on-change': 'true'}
        }
    });
    
});