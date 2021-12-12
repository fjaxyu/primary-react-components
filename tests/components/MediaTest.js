import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Media} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('Media', () => {
    
    const config = {
        Component: Media,
        ComponentName: 'Media',
        tag: 'div',
        defaultClasses: ['media']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('border', config, {
        props: {border: true},
        output: {class: 'media-border-bottom'}
    });
    
    SimpleComponentTester.testProp('withBorder', config, {
        props: {withBorder: true},
        output: {class: 'media-border-bottom'}
    });
    
    SimpleComponentTester.testProp('borderBottom', config, {
        props: {borderBottom: true},
        output: {class: 'media-border-bottom'}
    });
    
    SimpleComponentTester.testProp('bordered', config, {
        props: {bordered: true},
        output: {class: 'media-border-bottom'}
    });
    
    
    
});