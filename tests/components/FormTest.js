import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Form} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Form', () => {
    
    const config = {
        Component: Form,
        ComponentName: 'Form',
        tag: 'form',
        defaultClasses: []
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('onSubmit', config, {
        props: {
            onSubmit: () => {
                return 'test';
            }
        },
        output: {
            attribute: {'data-has-on-submit': 'true'}
        }
    });
    
    SimpleComponentTester.testProp('onSubmit', config, {
        props: {},
        output: {
            attribute: {'data-has-on-submit': 'false'}
        }
    });
    
});