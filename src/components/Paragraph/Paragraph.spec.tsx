import React from 'react';
import {expect} from 'chai';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



import Paragraph from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Paragraph', () => {
    
    const config = {
        Component: Paragraph,
        ComponentName: 'Paragraph',
        tag: 'p',
        defaultClasses: ['paragraph']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    
    
    SimpleComponentTester.testProp('textCenter', config, {
        props: {textCenter: true},
        output: {class: 'text-center'}
    });
    
    
    
    SimpleComponentTester.testProp('textRight', config, {
        props: {textRight: true},
        output: {class: 'text-right'}
        
    });
    
    
    
    SimpleComponentTester.testProp('textLeft', config, {
        props: {textLeft: true},
        output: {class: 'text-left'}
    });
    
    
    
    const typeTests = [
        {input: 'error', output: 'text-error'},
        {input: 'help', output: 'text-help'}
    ];
    
    
    typeTests.forEach((typeObj, index) => {
        SimpleComponentTester.testProp('type', config, {
            props: {type: typeObj.input},
            output: {class: typeObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    
});