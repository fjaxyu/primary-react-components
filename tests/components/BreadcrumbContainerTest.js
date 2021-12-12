import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {BreadcrumbContainer} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('BreadcrumbContainer', () => {
    
    const config = {
        Component: BreadcrumbContainer,
        ComponentName: 'BreadcrumbContainer',
        tag: 'div',
        defaultClasses: ['breadcrumb-container']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    SimpleComponentTester.testProp('withBackground', config, {
        props: {withBackground: true},
        output: {class: ['breadcrumb-background']}
    });
    
});