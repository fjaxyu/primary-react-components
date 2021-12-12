import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, render, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TextArea} from './../../dist/index';


import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('TextArea', () => {
    
    const config = {
        Component: TextArea,
        ComponentName: 'TextArea',
        tag: 'textarea',
        defaultClasses: ['form-control']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, false);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
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
    
});