import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {mount, configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MediaImage from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('MediaImage', () => {
    
    const config = {
        Component: MediaImage,
        ComponentName: 'MediaImage',
        tag: 'img',
        defaultClasses: ['media-image', 'align-self-start']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, false);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('order', config, {
        props: {order: 'last'},
        output: {style: {order: '2'}}
    });
    
    SimpleComponentTester.testProp('order', config, {
        props: {order: 'end'},
        output: {style: {order: '2'}}
    }, {skipDescription: true});
    
    
    
    const positionTests = [
        {input: 'bad type', output: 'align-self-start'},
        {input: '', output: 'align-self-start'},
        {input: 5, output: 'align-self-start'},
        {input: true, output: 'align-self-start'},
        {input: false, output: 'align-self-start'},
        {
            input: function() {
            }, output: 'align-self-start'
        },
        {input: new Date(), output: 'align-self-start'},
        {input: 'top', output: 'align-self-start'},
        {input: 'start', output: 'align-self-start'},
        {input: 'middle', output: 'align-self-center'},
        {input: 'center', output: 'align-self-center'},
        {input: 'end', output: 'align-self-end'},
        {input: 'bottom', output: 'align-self-end'}
    ];
    
    
    positionTests.forEach((testObj, index) => {
        SimpleComponentTester.testProp('position', config, {
            props: {position: testObj.input},
            output: {class: testObj.output}
        }, {skipDescription: index > 0});
    });
    
});