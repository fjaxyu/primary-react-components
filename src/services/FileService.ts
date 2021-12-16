import fs from 'fs';

import TypeService from './TypeService';

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS


/**
 *
 * @param {String} fullFilePath
 * @param {Object} [options]
 * @param {String} [options.encoding]
 * @returns {Promise<*>}
 */
export async function readFile(fullFilePath, options) {
    return new Promise(async (resolve, reject) => {
        options = (TypeService.isObject(options)) ? options : {};
        const encoding = (TypeService.isString(options.encoding, true)) ? options.encoding : 'utf-8';

        fs.access(fullFilePath, fs.constants.F_OK, (error) => {
            if (error) {
                reject(new Error('file at ' + fullFilePath + ' does not exist'));
            } else {
                fs.readFile(fullFilePath, {encoding}, (error, data) => {
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



/**
 *
 * @param {String} fullFilePath
 * @param {Object} [options]
 * @returns {Promise<*>}
 */
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


export default {
    readFile,
    getFolderContents
};