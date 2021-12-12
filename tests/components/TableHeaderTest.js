import React from 'react';
import {expect} from 'chai';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TableHeader, Table} from './../../dist/index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

configure({adapter: new Adapter()});

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//


describe('TableHeader', () => {
    
    const config = {
        Component: TableHeader,
        ComponentName: 'TableHeader',
        tag: 'th',
        defaultClasses: ['th']
    };
    
    SimpleComponentTester.testTag(config, {
        elementSelector: config.tag,
        customRender: () => {
            return mount(
                <Table>
                    <TableHeader/>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testChildren(config, {
        elementSelector: config.tag,
        customRender: (children) => {
            return mount(
                <Table>
                    <TableHeader>{children}</TableHeader>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testClassName(config, {
        elementSelector: config.tag,
        customRender: (customClassName) => {
            return mount(
                <Table>
                    <TableHeader className={customClassName}/>
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
                    <TableHeader style={stylesObj}/>
                </Table>
            );
        }
    });
    
    SimpleComponentTester.testDefaultClasses(config, {
        elementSelector: config.tag,
        customRender: () => {
            return mount(
                <Table>
                    <TableHeader/>
                </Table>
            );
        }
    });
    
});