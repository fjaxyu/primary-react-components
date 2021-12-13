import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Recommended from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('Recommended', () => {
    
    const config = {
        Component: Recommended,
        ComponentName: 'Recommended',
        tag: 'sup',
        defaultClasses: ['recommended']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, true, {expectedChildren: '*'});
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
});