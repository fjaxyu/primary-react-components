const fs = require('fs');

const {TypeService} = require('primary-services');

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS


/**
 *
 * @param {String} fullFilePath
 * @param {Object} [options]
 * @param {String} [options.encoding]
 * @returns {Promise<*>}
 */
async function readFile(fullFilePath, options) {

}
exports.readFile = readFile;



/**
 *
 * @param {String} fullFilePath
 * @param {Object} [options]
 * @returns {Promise<*>}
 */
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
exports.getFolderContents = getFolderContents;