import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Button', () => {
    
    const config = {
        Component: Button,
        ComponentName: 'Button',
        tag: 'button',
        defaultClasses: ['button', 'button-light']
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
        {
            input: function() {
            }, output: 'light'
        },
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
        {input: 'dark', output: 'dark'},
        {input: 'link', output: 'link'}
    ];
    
    typeTests.forEach((typeObj, index) => {
        SimpleComponentTester.testProp('type', config, {
            props: {type: typeObj.input},
            output: {class: 'button-' + typeObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    const buttonTypeTests = [
        {input: 'bad type', output: 'button'},
        {input: 'button', output: 'button'},
        {input: 5, output: 'button'},
        {input: true, output: 'button'},
        {input: false, output: 'button'},
        {
            input: function() {
            }, output: 'button'
        },
        {input: new Date(), output: 'button'},
        {input: 'submit', output: 'submit'}
    ];
    
    buttonTypeTests.forEach((typeObj, index) => {
        SimpleComponentTester.testProp('buttonType', config, {
            props: {buttonType: typeObj.input},
            output: {
                attribute: {type: typeObj.output}
            }
        }, {skipDescription: (index > 0)});
    });
    
    
    SimpleComponentTester.testProp('disabled', config, {
        props: {disabled: true},
        output: {disabled: true}
    });
    
    SimpleComponentTester.testProp('disabled', config, {
        props: {},
        output: {disabled: false}
    }, {skipDescription: true});
    
    SimpleComponentTester.testProp('disabled', config, {
        props: {disabled: false},
        output: {disabled: false}
    }, {skipDescription: true});
    
    
    SimpleComponentTester.testProp('block', config, {
        props: {block: true},
        output: {class: 'block'}
    });
    
    
    SimpleComponentTester.testProp('outline', config, {
        props: {outline: true},
        output: {class: 'outline'}
    });
    
    SimpleComponentTester.testProp('onClick', config, {
        props: {
            onClick: () => {
                return 'test';
            }
        },
        output: {
            attribute: {'data-has-on-click': 'true'}
        }
    });
    
    SimpleComponentTester.testProp('onClick', config, {
        props: {},
        output: {
            attribute: {'data-has-on-click': 'false'}
        }
    }, {skipDescription: true});
    
    
    SimpleComponentTester.testProp('noDefaultType', config, {
        props: {noDefaultType: true},
        output: {onlyClass: ['button']}
    });
    
});