import fs from 'fs';
import Components from './../dist/index.js';

import {TypeService, UtilityService} from 'primary-services';

const standardLineBreaks = 2;

const CONSTANTS = {
	// SERVICES: require('./../tests/resources/SERVICES_DOCUMENTATION')
};

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS

run();

function run() {
	getCurrentReadMe().then((file) => {
		let componentNames = getComponentNameList();
		let componentReadmeList = generateComponentReadmeList(componentNames);
		let newReadme = replaceTemplateData(file, {components: componentReadmeList});
		updateFile(newReadme);
		console.log(newReadme);
	});
}



function getComponentNameList() {
	let blackedListedNames = ['default', 'support'];

	return Object.keys(Components).filter((name) => !blackedListedNames.includes(name));
}



function updateFile(newFileContents) {
	fs.writeFile(__dirname + '/./../README.md', newFileContents, (error) => {
		if (error) {
			console.error(error);
			process.exit(1);
			throw error;
		}

		console.log('complete');
	});
}


function getCurrentReadMe(options) {
	return new Promise(async (resolve, reject) => {
		options = UtilityService.validateItem(options, 'object', {});

		const encoding = (TypeService.isString(options.encoding, true)) ? options.encoding : 'utf-8';

		fs.access(__dirname + '/README.md', fs.constants.F_OK, (error) => {
			if (error) {
				reject(new Error('file at ' + __dirname + '/README.md' + ' does not exist'));
			} else {
				fs.readFile(__dirname + '/README.md', {encoding}, (error, data) => {
					if (error) {
						reject(error);
					} else {
						resolve(data);
					}
				});
			}
		});
	});
}



async function getFolderContents(fullFilePath, options) {
	return new Promise(async (resolve, reject) => {
		options = (TypeService.isObject(options)) ? options : {};

		fs.readdir(fullFilePath, (error, files) => {
			if (error) {
				reject(error);
			} else {
				resolve(files);
			}
		});
	});
}



//


function generateComponentReadmeList(componentNames) {
    return componentNames.map((componentName) => {
        return generateReadmeForComponent(componentName);
    }).join('\r\n\r\n');
}



function generateReadmeForComponent(componentName) {
	return `### ${componentName}`;
}



function replaceTemplateData(string, config) {
    const keys = Object.keys(config);

    keys.forEach((key) => {
        const newValue = config[key];
        const templateValue = `{{${key}}}`;

        string = string.replace(templateValue, newValue);
    });

    return string;
}

function lineBreaks(lines) {
    let index = 0;
    let content = '';
    lines = lines || standardLineBreaks;

    while (lines > index) {
        content = content + '\r\n';
        index = index + 1;
    }

    return content;
}



//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PRIVATE METHODS

