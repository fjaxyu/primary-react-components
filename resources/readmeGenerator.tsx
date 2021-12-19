import Components from './../index';
import fs from 'fs';
import {TypeService, UtilityService} from 'primary-services';



run();


async function run() {
    let componentNameList = Object.keys(Components);
    let componentContent = await generateReadmeComponentContent(componentNameList);
    let currentReadme = await getCurrentReadMe();
    let newReadme = replaceTemplateData(currentReadme, {components: componentContent});
    await updateFile(newReadme);
    console.log('complete!');
}



async function updateFile(newFileContents): Promise<void> {
    return new Promise(async (resolve, reject) => {
        fs.writeFile(__dirname + '/./../README.md', newFileContents, (error) => {
            if (error) {
                console.error(error);
                process.exit(1);
                return reject(error);
            }

            return resolve();
        });
    });
}



async function getCurrentReadMe(options?) {
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



async function generateReadmeComponentContent(componentNameList): Promise<string> {
    return new Promise(async (resolve, reject) => {
        let componentContentList = [] as string[];

        for (const componentName of componentNameList) {
            let component = Components[componentName];

            let READMEFileContents = await getReadmeFileContents(componentName);
            let typeFileContents = await getTypeFileContents(componentName);

            let header = '### ' + componentName;

            let contentList = [
                header,
                READMEFileContents,
                typeFileContents,
                '---'
            ].filter((value) => !!value);

            let sectionContent = contentList.map((content) => content.trim()).join('\r\n\r\n');
            componentContentList.push(sectionContent);
        }

        resolve(componentContentList.join('\r\n\r\n'));
    });
}



function generateComponentFolderPath(componentName) {
    return __dirname + '/../src/components/' + componentName + '/';
}



async function getTypeFileContents(componentName): Promise<string> {
    return new Promise(async (resolve) => {
        try {
            let typeFilePath = generateComponentFolderPath(componentName) + 'types.ts';
            let content = await getFileContents(typeFilePath);
            content = content.split('\n').filter((line) => !line.includes('import') && line.length > 0).join('\r\n');
            resolve([
                '#### Types',
                '```typescript',
                content,
                '```'
            ].join('\r\n'));
        } catch (error) {
            resolve('');
        }
    });
}



async function getReadmeFileContents(componentName): Promise<string> {
    return new Promise(async (resolve) => {
        try {
            let readmeFilePath = generateComponentFolderPath(componentName) + 'README.md';
            let content = await getFileContents(readmeFilePath);
            resolve(content);
        } catch (error) {
            resolve('');
        }
    });
}



async function fileExistsAtPath(fullFilePath: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
        fs.access(fullFilePath, fs.constants.F_OK, (error) => {
            if (error) {
                return resolve(false);
            }

            return resolve(true);
        });
    });
}



async function getFileContents(fullFilePath: string, options?): Promise<string> {
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
                resolve(data as unknown as string);
            }
        });
    });
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