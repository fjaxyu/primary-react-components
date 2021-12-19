import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {mount, configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Link from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Link', () => {
    
    const testHref = () => {
        return 'contact-us.html';
    };
    
    const config = {
        Component: Link,
        ComponentName: 'Link',
        tag: 'a',
        defaultClasses: ['link', 'clickable']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config, {props: {href: testHref}});
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config, {props: {href: testHref}});
    
    
    
    const testTitle = 'Contact Us';
    
    SimpleComponentTester.testProp('title', config, {
        props: {href: testHref, title: testTitle},
        output: {attribute: {title: testTitle}}
    });
    
    
    SimpleComponentTester.testProp('textCenter', config, {
        props: {href: testHref, textCenter: true},
        output: {class: ['display-block', 'text-center']}
    });
    
    
    SimpleComponentTester.testProp('href', config, {
        props: {href: testHref},
        output: {class: ['clickable']}
    });
    
    
    SimpleComponentTester.testProp('notHref', config, {
        props: {href: testHref, notHref: true},
        output: {tag: 'span', attribute: {'data-has-on-click': 'true'}}
    });
    
    
});