import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Box from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Box', () => {
    
    const config = {
        Component: Box,
        ComponentName: 'Box',
        tag: 'div',
        defaultClasses: ['box']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    SimpleComponentTester.testProp('shadow', config, {
        props: {shadow: 2},
        output: {class: ['box-shadow-2']}
    });
    SimpleComponentTester.testProp('title', config, {
        props: {title: 'wow'},
        output: {attribute: {
            title: 'wow'
            }}
    });
    
});