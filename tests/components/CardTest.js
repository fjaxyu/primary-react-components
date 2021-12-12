import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Card} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('Card', () => {
    
    const config = {
        Component: Card,
        ComponentName: 'Card',
        tag: 'div',
        defaultClasses: ['card', 'box-shadow-1']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('isClickable', config, {
        props: {
            onClick: () => {
                return 'test';
            }
        },
        output: {class: 'clickable'}
    });
    
    SimpleComponentTester.testProp('shadow', config, {
        props: {shadow: 2},
        output: {class: 'box-shadow-2', noClass: 'box-shadow-1'}
    });
    
});