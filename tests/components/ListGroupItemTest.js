import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ListGroupItem} from './../../dist/index';
import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('ListGroupItem', () => {
    
    const config = {
        Component: ListGroupItem,
        ComponentName: 'ListGroupItem',
        tag: 'li',
        defaultClasses: ['list-group-item']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    
    
    // SimpleComponentTester.testProp('onClick', config, {
    //     props: {
    //         onClick: function() {
    //             return 'wow';
    //         }
    //     },
    //     output: {attribute: {'data-has-on-click': 'true'}}
    // });
    
    
    
    SimpleComponentTester.testProp('onClick', config, {
        props: {},
        output: {attribute: {'data-has-on-click': 'false'}}
    });
    
    
    
    SimpleComponentTester.testProp('badge', config, {
        props: {badge: 2},
        output: (component) => {
            const {element} = TestService.extractDetailsFromEnzymeComponent(component);
            const badgeElement = element.querySelector('.badge');
            
            it('should have an element with a class of "badge" and children equal to "2"', (done) => {
                expect(badgeElement).to.exist;
                expect(badgeElement.innerHTML).to.equal('2');
                done();
            });
        }
    });
    
    
    
    SimpleComponentTester.testProp('badgeColor', config, {
        props: {badge: 2, badgeColor: 'red'},
        output: (component) => {
            const {element} = TestService.extractDetailsFromEnzymeComponent(component);
            const badgeElement = element.querySelector('.badge');
            
            it('should have an element with a class of "badge" and children equal to "2"', (done) => {
                expect(badgeElement).to.exist;
                expect(badgeElement.innerHTML).to.equal('2');
                expect(badgeElement.classList.contains('badge-danger')).to.equal(true);
                done();
            });
        }
    });
    
    
    
    SimpleComponentTester.testProp('badgeType', config, {
        props: {badge: 2, badgeType: 'red'},
        output: (component) => {
            const {element} = TestService.extractDetailsFromEnzymeComponent(component);
            const badgeElement = element.querySelector('.badge');
            
            it('should have an element with a class of "badge" and children equal to "2"', (done) => {
                expect(badgeElement).to.exist;
                expect(badgeElement.innerHTML).to.equal('2');
                expect(badgeElement.classList.contains('badge-danger')).to.equal(true);
                done();
            });
        }
    });
    
    
});