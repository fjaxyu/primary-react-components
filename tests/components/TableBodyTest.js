import React from 'react';
import {expect} from 'chai';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TableBody, Table, TableRow} from './../../dist/index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('TableBody', () => {
    
    const config = {
        Component: TableBody,
        ComponentName: 'TableBody',
        tag: 'tbody',
        defaultClasses: ['table-body']
    };
    
    SimpleComponentTester.testTag(config, {
        elementSelector: config.tag,
        customRender: () => {
            return mount(
                <Table>
                    <TableBody>test</TableBody>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testChildren(config, true, {
        elementSelector: config.tag,
        expectedChildren: '<tr><td></td></tr>',
        customRender: (children) => {
            console.log(children);
            
            return mount(
                <Table>
                    <TableBody>
                        <tr>
                            <td></td>
                        </tr>
                    </TableBody>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testClassName(config, {
        elementSelector: config.tag,
        customRender: (customClassName) => {
            return mount(
                <Table>
                    <TableBody className={customClassName}>
                        <tr>
                            <td></td>
                        </tr>
                    </TableBody>
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
                    <TableBody style={customStyleObj}>test</TableBody>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testDefaultClasses(config, {
        elementSelector: config.tag,
        customRender: () => {
            return mount(
                <Table>
                    <TableBody>test</TableBody>
                </Table>
            );
        }
    });
    
});