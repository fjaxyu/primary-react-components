import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CardHeader} from './../../dist/index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('CardHeader', () => {
    
    const config = {
        Component: CardHeader,
        ComponentName: 'CardHeader',
        tag: 'div',
        defaultClasses: ['card-header', 'header']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
});