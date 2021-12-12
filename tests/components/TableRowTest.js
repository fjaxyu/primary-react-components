import React from 'react';
import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TableRow, Table} from './../../dist/index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('TableRow', () => {
    
    const config = {
        Component: TableRow,
        ComponentName: 'TableRow',
        tag: 'tr',
        defaultClasses: []
    };
    
    SimpleComponentTester.testTag(config, {
        elementSelector: config.tag,
        customRender: () => {
            return mount(
                <Table>
                    <TableRow>Test</TableRow>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testChildren(config, {
        elementSelector: config.tag,
        customRender: (customChildren) => {
            return mount(
                <Table>
                    <TableRow>{customChildren}</TableRow>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testClassName(config, {
        elementSelector: config.tag,
        customRender: (customClassName) => {
            return mount(
                <Table>
                    <TableRow className={customClassName}>test</TableRow>
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
        customRender: (customStyleObj) => {
            return mount(
                <Table>
                    <TableRow style={customStyleObj}>test</TableRow>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testDefaultClasses(config);
    
    SimpleComponentTester.testProp('onClick', config, {
        props: {
            onClick: () => {
                return 'test';
            }
        },
        output: (component) => {
            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {document} = details;
            const element = document.querySelector(config.tag);
            
            it('should render a component that has a classList containing: "row-clickable"', (done) => {
                expect(element.classList.contains('row-clickable')).to.be.true;
                done();
            });
        }
    }, {
        customRender: () => {
            return mount(
                <Table>
                    <TableRow onClick={() => 'test'}>test</TableRow>
                </Table>
            );
        }
    });
    
});