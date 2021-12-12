import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Badge} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Badge', () => {
    
    const config = {
        Component: Badge,
        ComponentName: 'Badge',
        tag: 'div',
        defaultClasses: ['badge', 'badge-light']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    const typeTests = [
        {input: 'bad type', output: 'light'},
        {input: '', output: 'light'},
        {input: 5, output: 'light'},
        {input: true, output: 'light'},
        {input: false, output: 'light'},
        {input: new Date(), output: 'light'},
        {input: 'primary', output: 'primary'},
        {input: 'blue', output: 'primary'},
        {input: 'secondary', output: 'secondary'},
        {input: 'success', output: 'success'},
        {input: 'green', output: 'success'},
        {input: 'danger', output: 'danger'},
        {input: 'red', output: 'danger'},
        {input: 'error', output: 'danger'},
        {input: 'warning', output: 'warning'},
        {input: 'yellow', output: 'warning'},
        {input: 'orange', output: 'orange'},
        {input: 'purple', output: 'purple'},
        {input: 'pink', output: 'pink'},
        {input: 'light', output: 'light'},
        {input: 'dark', output: 'dark'}
    ];
    
    
    typeTests.forEach((typeObj, index) => {
        SimpleComponentTester.testProp('type', config, {
            props: {type: typeObj.input},
            output: {class: 'badge-' + typeObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    SimpleComponentTester.testProp('pill', config, {
        props: {pill: true},
        output: {class: 'badge-pill'}
    });
    
});