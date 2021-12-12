import React from 'react';
import {expect} from 'chai';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



import {Text, TextArea} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Text', () => {
    
    const config = {
        Component: Text,
        ComponentName: 'Text',
        tag: 'span',
        defaultClasses: []
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    const typeTests = [
        {input: 'link', output: 'text-link'},
        {input: 'error', output: 'text-error'},
        {input: 'help', output: 'text-help'}
    ];
    
    typeTests.forEach((testObj, index) => {
        SimpleComponentTester.testProp('type', config, {
            props: {type: testObj.input},
            output: {class: testObj.output}
        }, {skipDescription: index > 0});
    });
    
    SimpleComponentTester.testProp('onClick', config, {
        props: {
            onClick: () => {
                return 'test';
            }
        },
        output: {class: 'text-clickable'}
    });
    
    SimpleComponentTester.testProp('italic', config, {
        props: {
            italic: true
        },
        output: {class: 'italic'}
    });
    
    SimpleComponentTester.testProp('disabled', config, {
        props: {
            disabled: true
        },
        output: {class: 'text-disabled'}
    });
    
    SimpleComponentTester.testProp('bold', config, {
        props: {
            bold: true
        },
        output: {class: 'bold'}
    });
    
});