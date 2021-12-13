import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Icon from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('Icon', () => {
    
    const config = {
        Component: Icon,
        ComponentName: 'Icon',
        tag: 'svg',
        defaultClasses: []
    };
    
    SimpleComponentTester.testTag(config, {props: {icon: 'users'}});
    SimpleComponentTester.testChildren(config, false, {props: {icon: 'users'}});
    SimpleComponentTester.testClassName(config, {noClass: true});
    // SimpleComponentTester.testStyle(config, {props: {icon: 'users'}});
    SimpleComponentTester.testDefaultClasses(config);
    
});