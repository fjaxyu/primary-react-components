import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Progress} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('Progress', () => {
    
    const config = {
        Component: Progress,
        ComponentName: 'Progress',
        tag: 'div',
        defaultClasses: ['progress']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('height', config, {
        props: {height: '25px'},
        output: {style: {height: '25px'}}
    });
    
    SimpleComponentTester.testProp('height', config, {
        props: {height: '25'},
        output: {style: {height: '25px'}}
    });
    
});