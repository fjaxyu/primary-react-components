import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProgressBarProgress from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('ProgressBarProgress', () => {
    
    const config = {
        Component: ProgressBarProgress,
        ComponentName: 'ProgressBarProgress',
        tag: 'div',
        defaultClasses: ['progress-bar', 'bg-primary']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, false);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('striped', config, {
        props: {striped: true},
        output: {class: 'progress-bar-striped'}
    });
    
    SimpleComponentTester.testProp('animated', config, {
        props: {animated: true, striped: true},
        output: {class: ['progress-bar-animated', 'progress-bar-striped']}
    });
    
    SimpleComponentTester.testProp('animated', config, {
        props: {animated: true, striped: false},
        output: {noClass: ['progress-bar-animated', 'progress-bar-striped']}
    });
    
    SimpleComponentTester.testProp('value', config, {
        props: {value: 20},
        output: {style: {width: '20%'}}
    });
    
    
    const typeTests = [
        {input: 'bad type', output: 'bg-primary'},
        {input: '', output: 'bg-primary'},
        {input: 5, output: 'bg-primary'},
        {input: true, output: 'bg-primary'},
        {input: false, output: 'bg-primary'},
        {
            input: function() {
            }, output: 'bg-primary'
        },
        {input: new Date(), output: 'bg-primary'},
        {input: 'primary', output: 'bg-primary'},
        {input: 'blue', output: 'bg-primary'},
        {input: 'secondary', output: 'bg-secondary'},
        {input: 'success', output: 'bg-success'},
        {input: 'green', output: 'bg-success'},
        {input: 'danger', output: 'bg-danger'},
        {input: 'red', output: 'bg-danger'},
        {input: 'error', output: 'bg-danger'},
        {input: 'warning', output: 'bg-warning'},
        {input: 'yellow', output: 'bg-warning'},
        {input: 'orange', output: 'bg-orange'},
        {input: 'purple', output: 'bg-purple'},
        {input: 'pink', output: 'bg-pink'},
        {input: 'light', output: 'bg-light'},
        {input: 'dark', output: 'bg-dark'},
        {input: 'link', output: 'bg-primary'}
    ];
    
    
    typeTests.forEach((testObj) => {
        SimpleComponentTester.testProp('type', config, {
            props: {type: testObj.input},
            output: {class: testObj.output}
        });
    });
    
});