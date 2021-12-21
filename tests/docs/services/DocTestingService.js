import {TypeService, UtilityService} from 'primary-services';
import fs from 'fs';



export async function getFolderContents(fullFilePath, options) {
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



async function fileExistsAtPath(fullFilePath) {
	return new Promise(async (resolve, reject) => {
		fs.access(fullFilePath, fs.constants.F_OK, (error) => {
			if (error) {
				return resolve(false);
			}

			return resolve(true);
		});
	});
}



async function getFileContents(fullFilePath, options) {
	return new Promise(async (resolve, reject) => {
		options = UtilityService.validateItem(options, 'object', {});

		let fileExists = await fileExistsAtPath(fullFilePath);

		if (!fileExists) {
			return reject(new Error('file at ' + fullFilePath + ' does not exist'));
		}

		const encoding = (TypeService.isString(options.encoding, true)) ? options.encoding : 'utf-8';

		fs.readFile(fullFilePath, {encoding}, (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
}



export async function getReadmeFileContents(component) {
	return new Promise(async (resolve, reject) => {
		let response = '';
		try {
			response = await getFileContents(__dirname + `/../../../src/components/${component}/README.md`);
		} catch (error) {
			console.log(error);
		}

		resolve(response);
	});
}



export async function getTypeFileContents(component) {
	return new Promise(async (resolve, reject) => {
		let response = '';
		try {
			response = await getFileContents(__dirname + `/../../../src/components/${component}/types.ts`);
		} catch (error) {
			console.log(error);
		}

		resolve(response);
	});
}


export default {
	getFolderContents,
	getReadmeFileContents,
	getTypeFileContents
};