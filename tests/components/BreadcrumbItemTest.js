import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {BreadcrumbItem} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('BreadcrumbItem', () => {
    
    
    const config = {
        Component: BreadcrumbItem,
        ComponentName: 'BreadcrumbItem',
        tag: 'a',
        defaultClasses: ['breadcrumb-item', 'link', 'clickable']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    SimpleComponentTester.testProp('active', config, {
        props: {active: true},
        output: {class: ['active']}
    });
    
});