import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, render, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {InputText} from './../../dist/index';

import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('InputText', () => {
    
    const config = {
        Component: InputText,
        ComponentName: 'InputText',
        tag: 'input',
        defaultClasses: ['form-control']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, false);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    
    
    const typeTests = [
        {input: 'bad type', output: 'text'},
        {input: '', output: 'text'},
        {input: 5, output: 'text'},
        {input: true, output: 'text'},
        {input: false, output: 'text'},
        {
            input: function() {
            }, output: 'text'
        },
        {input: new Date(), output: 'text'},
        {input: 'text', output: 'text'},
        {input: 'number', output: 'text'},
        {input: 'phone', output: 'phone'},
        {input: 'password', output: 'password'},
        {input: 'email', output: 'email'},
        {input: 'checkbox', output: 'text'}
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
    
    
    const valueValue = 'myUserName';
    
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
    
    
    SimpleComponentTester.testProp('focus', config, {
        props: {
            focus: true
        },
        output: {
            attribute: {
                'data-has-focus': 'true'
            }
        }
    });
    
    
    
    SimpleComponentTester.testProp('focus', config, {
        props: {},
        output: {
            attribute: {
                'data-has-focus': 'false'
            }
        }
    });
    
});