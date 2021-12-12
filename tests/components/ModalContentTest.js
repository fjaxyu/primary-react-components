import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ModalContent} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('ModalContent', () => {
    
    const config = {
        Component: ModalContent,
        ComponentName: 'ModalContent',
        tag: 'div',
        defaultClasses: ['modal-content']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
});