import 'jsdom-global/register';

import React from 'react';
import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardImage from './index';

import SimpleComponentTester from './../../services/SimpleComponentTester';
import TestService from './../../services/TestService';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

configure({adapter: new Adapter()});

//Enzyme reference: https://airbnb.io/enzyme/docs/api/shallow.html

//===----=---=-=--=--===--=-===----=---=-=--=--===--=-===----=---=-=--=--===--=-//

describe('CardImage', () => {
    
    const config = {
        Component: CardImage,
        ComponentName: 'CardImage',
        tag: 'img',
        defaultClasses: ['card-img', 'card-img-top']
    };
    
    SimpleComponentTester.testTag(config);
    SimpleComponentTester.testChildren(config, false);
    SimpleComponentTester.testClassName(config);
    SimpleComponentTester.testStyle(config);
    SimpleComponentTester.testDefaultClasses(config);
    
    
    
    const imageSource = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    const imageAlt = 'image description';
    const imageId = 'TEST-id';
    
    SimpleComponentTester.testProp('src', config, {
        props: {src: imageSource},
        output: (component) => {
            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {element} = details;
            
            it('should render an image element', (done) => {
                expect(element).to.exist;
                done();
            });
            
            it('should have the same src as our input', (done) => {
                expect(element.src).to.equal(imageSource);
                done();
            });
        }
    });
    
    
    
    SimpleComponentTester.testProp('alt', config, {
        props: {src: imageSource, alt: imageAlt},
        output: (component) => {
            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {element} = details;
            
            it('should render an image element', (done) => {
                expect(element).to.exist;
                done();
            });
            
            it('should have the same imageAlt as our input', (done) => {
                expect(element.alt).to.equal(imageAlt);
                done();
            });
        }
    });
    
    
    
    SimpleComponentTester.testProp('id', config, {
        props: {src: imageSource, id: imageId},
        output: (component) => {
            const details = TestService.extractDetailsFromEnzymeComponent(component);
            const {element} = details;
            
            it('should render an image element', (done) => {
                expect(element).to.exist;
                done();
            });
            
            it('should have the same id as our input', (done) => {
                expect(element.id).to.equal(imageId);
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