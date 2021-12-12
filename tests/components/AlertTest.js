import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SimpleComponentTester from './../../services/SimpleComponentTester';

import {Alert} from './../../dist/index';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Alert', () => {
    
    const config = {
        Component: Alert,
        ComponentName: 'Alert',
        tag: 'div',
        defaultClasses: ['alert', 'alert-primary']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    const typeTests = [
        {input: 'bad type', output: 'primary'},
        {input: '', output: 'primary'},
        {input: 5, output: 'primary'},
        {input: true, output: 'primary'},
        {input: false, output: 'primary'},
        {input: new Date(), output: 'primary'},
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
            output: {class: 'alert-' + typeObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    
    SimpleComponentTester.testProp('hideIfEmpty', config, {
        props: {hideIfEmpty: true},
        output: {class: 'display-none'}
    });
    
    
    SimpleComponentTester.testProp('hideIfEmpty', config, {
        props: {hideIfEmpty: true},
        output: {noClass: 'display-none'},
        children: 'test'
    }, {skipDescription: true});
    
    
    SimpleComponentTester.testProp('hideIfEmpty', config, {
        props: {hideIfEmpty: true},
        output: {noClass: 'display-none'},
        children: (<p>wow</p>)
    }, {skipDescription: true});
    
});