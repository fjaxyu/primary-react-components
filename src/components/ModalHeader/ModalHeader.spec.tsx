import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ModalHeader from './index';
import SimpleComponentTester from './../../services/SimpleComponentTester';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('ModalHeader', () => {
    
    const config = {
        Component: ModalHeader,
        ComponentName: 'ModalHeader',
        tag: 'div',
        defaultClasses: ['modal-header']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('closeOnly', config, {
        props: {closeOnly: true},
        output: {class: ['modal-header-close-only', 'modal-header-no-border']}
    });
    
    SimpleComponentTester.testProp('noBorder', config, {
        props: {noBorder: true},
        output: {class: ['modal-header-no-border']}
    });
    
    SimpleComponentTester.testProp('onClose', config, {
        props: {onClose: () => 'test'},
        output: {attribute: {'data-has-on-close': 'true'}}
    });
    
    SimpleComponentTester.testProp('onClose', config, {
        props: {},
        output: {attribute: {'data-has-on-close': 'false'}}
    });
    
});