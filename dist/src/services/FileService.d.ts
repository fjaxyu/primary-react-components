/**
 *
 * @param {String} fullFilePath
 * @param {Object} [options]
 * @param {String} [options.encoding]
 * @returns {Promise<*>}
 */
export declare function readFile(fullFilePath: any, options: any): Promise<unknown>;
/**
 *
 * @param {String} fullFilePath
 * @param {Object} [options]
 * @returns {Promise<*>}
 */
export declare function getFolderContents(fullFilePath: any, options: any): Promise<unknown>;
declare const _default: {
    readFile: typeof readFile;
    getFolderContents: typeof getFolderContents;
};
export default _default;
