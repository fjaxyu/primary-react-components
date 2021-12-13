import React from 'react';
import {expect} from 'chai';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('Table', () => {
    
    const config = {
        Component: Table,
        ComponentName: 'Table',
        tag: 'table',
        defaultClasses: ['table']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, true, {
        elementSelector: 'td',
        customRender: (children) => {
            return mount(
                <Table>
                    <tr>
                        <td>{children}</td>
                    </tr>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('striped', config, {
        props: {striped: true},
        output: {class: 'table-striped'}
    });
    
    SimpleComponentTester.testProp('hover', config, {
        props: {hover: true},
        output: {class: 'table-hover'}
    });
    
    SimpleComponentTester.testProp('bordered', config, {
        props: {bordered: true},
        output: {class: 'table-bordered'}
    });
    
    SimpleComponentTester.testProp('small', config, {
        props: {small: true},
        output: {class: 'table-sm'}
    });
    
    SimpleComponentTester.testProp('responsive', config, {
        props: {responsive: true},
        output: {class: 'table-responsive'}
    });
    
});