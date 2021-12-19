import chai from 'chai';
const expect = chai.expect;

import DocTestingService from './services/DocTestingService.js';

const CONFIG = {
	COMPONENT_FOLDER_LIST: [],
	COMPONENT_CONFIG: {}
};

//

before(async () => {
	CONFIG.COMPONENT_FOLDER_LIST = await DocTestingService.getFolderContents(__dirname + '/../../src/components/');
});


describe('all components', () => {

	const componentNameList = CONFIG.COMPONENT_FOLDER_LIST;
	console.log(componentNameList);

	describe('allComponents', () => {
		it('at least 1 component should exist', (done) => {
			expect(componentNameList.length).to.be.greaterThan(0);
			done();
		});

		componentNameList.forEach((componentName) => {
			describe(componentName, () => {
				it('readme should exist', async (done) => {
					let readme = await DocTestingService.getReadmeFileContents(componentName);
					expect(readme).to.exist;
					done();
				});
			});
		});
	});

});