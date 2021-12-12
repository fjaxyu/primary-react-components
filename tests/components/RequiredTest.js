import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Required} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('Required', () => {
    
    const config = {
        Component: Required,
        ComponentName: 'Required',
        tag: 'sup',
        defaultClasses: ['required']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, true, {expectedChildren: '*'});
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
});