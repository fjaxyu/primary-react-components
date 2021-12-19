import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardBody from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('CardBody', () => {
    
    const config = {
        Component: CardBody,
        ComponentName: 'CardBody',
        tag: 'div',
        defaultClasses: ['card-body']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
});