import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputGroupItem from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('InputGroupItem', () => {
    
    const config = {
        Component: InputGroupItem,
        ComponentName: 'InputGroupItem',
        tag: 'div',
        defaultClasses: ['input-group-prepend']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    const inputGroupTypeTests = [
        {input: 'bad type', output: 'input-group-prepend'},
        {input: 'button', output: 'input-group-prepend'},
        {input: 5, output: 'input-group-prepend'},
        {input: true, output: 'input-group-prepend'},
        {input: false, output: 'input-group-prepend'},
        {input: new Date(), output: 'input-group-prepend'},
        {input: 'prepend', output: 'input-group-prepend'},
        {input: 'append', output: 'input-group-append'}
    ];
    
    
    inputGroupTypeTests.forEach((typeObj, index) => {
        SimpleComponentTester.testProp('type', config, {
            props: {type: typeObj.input},
            output: {class: typeObj.output}
        }, {skipDescription: (index > 0)});
    });
    
});