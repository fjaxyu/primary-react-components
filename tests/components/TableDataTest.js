import React from 'react';
import {expect} from 'chai';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TableData, Table, TableBody} from './../../dist/index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('TableData', () => {
    
    const config = {
        Component: TableData,
        ComponentName: 'TableData',
        tag: 'td',
        defaultClasses: ['table-data']
    };
    
    SimpleComponentTester.testTag(config, {
        elementSelector: config.tag,
        customRender: () => {
            return mount(
                <Table>
                    <TableData></TableData>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testChildren(config, {
        elementSelector: config.tag,
        customRender: (children) => {
            return mount(
                <Table>
                    <TableData>{children}</TableData>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testClassName(config, {
        elementSelector: config.tag,
        customRender: (customClassName) => {
            return mount(
                <Table>
                    <TableData className={customClassName}/>
                </Table>
            );
        },
        output: (component, customClassValue) => {
            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {document} = details;
            const element = document.querySelector(config.tag);
            
            it(`should render a ${config.tag} with a custom class value of: ${customClassValue}`, (done) => {
                expect(element.classList.contains(customClassValue)).to.be.true;
                done();
            });
        }
    });
    
    SimpleComponentTester.testStyle(config, {
        elementSelector: config.tag,
        customRender: (stylesObj) => {
            return mount(
                <Table>
                    <TableData style={stylesObj}/>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testDefaultClasses(config, {
        elementSelector: config.tag,
        customRender: () => {
            return mount(
                <Table>
                    <TableData/>
                </Table>
            );
        }
    });
    
});