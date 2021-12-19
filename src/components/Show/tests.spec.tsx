import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Show from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Show', () => {
    
    const config = {
        Component: Show,
        ComponentName: 'Show',
        tag: 'div',
        defaultClasses: []
    };
    
    SimpleComponentTester.testTag(config, {noTag: true});
    SimpleComponentTester.testChildren(config, true, {props: {show: true}});
    SimpleComponentTester.testClassName(config, {noClass: true});
    SimpleComponentTester.testStyle(config, {noStyle: true});
    SimpleComponentTester.testDefaultClasses(config);
    
    
    const sampleChildren = 'test';
    
    SimpleComponentTester.testProp('show', config, {
        props: {show: true},
        children: sampleChildren,
        output: {children: sampleChildren}
    });
    
    SimpleComponentTester.testProp('show', config, {
        props: {show: false},
        children: sampleChildren,
        output: {children: undefined}
    });
    
});