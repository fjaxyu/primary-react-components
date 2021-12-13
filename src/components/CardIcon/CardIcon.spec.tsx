import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardIcon from './index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('CardIcon', () => {
    
    const config = {
        Component: CardIcon,
        ComponentName: 'CardIcon',
        tag: 'div',
        defaultClasses: ['box', 'card-img', 'card-img-top']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, false);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    
    
    const imageSource = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    const imageAlt = 'image description';
    
    SimpleComponentTester.testProp('src', config, {
        props: {src: imageSource},
        output: (component) => {
            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {element} = details;
            
            const imageElement = element.querySelector('img');
            
            it('should render an image element', (done) => {
                expect(imageElement).to.exist;
                done();
            });
            
            it('should have the same src as our input', (done) => {
                expect(imageElement.src).to.equal(imageSource);
                done();
            });
        }
    });
    
    
    
    SimpleComponentTester.testProp('alt', config, {
        props: {src: imageSource, alt: imageAlt},
        output: (component) => {
            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {element} = details;
            
            const imageElement = element.querySelector('img');
            
            it('should render an image element', (done) => {
                expect(imageElement).to.exist;
                done();
            });
            
            it('should have the same imageAlt as our input', (done) => {
                expect(imageElement.alt).to.equal(imageAlt);
                done();
            });
        }
    });
    
    
    const backgroundColor = '#333444';
    const renderedColor = 'rgb(51, 52, 68)';
    
    SimpleComponentTester.testProp('background', config, {
        props: {background: backgroundColor},
        output: {
            style: {backgroundColor: renderedColor}
        }
    });
    
    
    
    const color = backgroundColor;
    const iconValue = 'users';
    
    SimpleComponentTester.testProp('color', config, {
        props: {color: color, icon: iconValue},
        output: (component) => {
            const {element} = TestService.extractDetailsFromEnzymeComponent(component);
            
            const iconElement = element.querySelector('svg');
            
            it('should render an icon element', (done) => {
                expect(iconElement).to.exist;
                done();
            });
            
            // it('should render an icon element with a style color', (done) => {
            //     expect(iconElement).to.have.property('style');
            //     expect(iconElement.style).to.have.property('color');
            //     expect(iconElement.style.color).to.equal(color);
            //     done();
            // });
            
            it('should have an attribute of color', (done) => {
                expect(iconElement.getAttribute('color')).to.equal(color);
                done();
            });
        }
    });
    
    
    
    SimpleComponentTester.testProp('icon', config, {
        props: {icon: iconValue},
        output: (component) => {
            const {element} = TestService.extractDetailsFromEnzymeComponent(component);
            
            const iconElement = element.querySelector('svg');
            
            it('should render an icon element', (done) => {
                expect(iconElement).to.exist;
                done();
            });
        }
    });
    
    
    
    const positionTests = [
        {input: 'top', output: 'top'},
        {input: 'bottom', output: 'bottom'},
        {input: 'both', output: 'both'}
    ];
    
    positionTests.forEach((testObj, index) => {
        SimpleComponentTester.testProp('position', config, {
            props: {position: testObj.input},
            output: {class: 'card-img-' + testObj.output}
        }, {skipDescription: (index > 0)});
    });
    
    
    
    SimpleComponentTester.testProp('noPosition', config, {
        props: {noPosition: true},
        output: {noClass: ['card-img-top', 'card-img-both', 'card-image-bottom']}
    });
    
});