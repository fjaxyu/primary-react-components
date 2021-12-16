import FileService from './../src/services/FileService';

const fs = require('fs');

const standardLineBreaks = 2;

const CONSTANTS = {
    SERVICES: require('./../tests/resources/SERVICES_DOCUMENTATION')
};

//--==--==----==--==--==--==----==--==----==--==----==--==--==--==----==--==--//
//PUBLIC METHODS

run();

function run() {
    const serviceContent = generateServicesContent();
    const availableServices = generateAvailableServices();
    
    getCurrentReadMe().then((file) => {
        const newFileContent = replaceTemplateData(file, {
            services: serviceContent,
            availableServices: availableServices
        });
        
        updateFile(newFileContent);
    }, (error) => {
        console.error(error);
        throw error;
    });
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


function getCurrentReadMe() {
    return FileService.readFile(__dirname + '/README.md');
}



function generateAvailableServices() {
    const fileNames = getListOfServiceFileNames();
    
    return fileNames.map((fileName) => {
        const serviceName = convertFileNameToServiceName(fileName);
        const serviceNameHeader = generateServiceNameHeader(serviceName, 'anchor');
        
        return `[${serviceName}](${serviceNameHeader})`;
    }).join(', ');
}



function generateServicesContent() {
    const fileNames = getListOfServiceFileNames();
    
    return fileNames.map((fileName) => {
        return generateServiceContent(fileName, getServiceObjByFileName(fileName));
    }).join(lineBreaks());
}


function getServiceObjByFileName(fileName) {
    return CONSTANTS.SERVICES.FILES[fileName];
}


function getListOfServiceFileNames() {
    return Object.keys(CONSTANTS.SERVICES.FILES).sort();
}


function convertFileNameToServiceName(fileName) {
    return fileName.split('.')[0];
}


function generateServiceContent(fileName, serviceConfig) {
    const serviceName = convertFileNameToServiceName(fileName);
    
    const serviceDescription = serviceConfig.description || '';
    
    const methodsObj = serviceConfig.methods;
    const methodNames = getMethodNames(serviceConfig);
    const methodContent = methodNames.map((methodName) => {
        return generateMethodContent(methodName, methodsObj[methodName], {serviceName, ...serviceConfig});
    }).join(lineBreaks());
    
    const methodList = methodNames.map((methodName) => {
        const methodNameAnchor = generateMethodNameHeader(serviceName, methodName, 'anchor');
        
        return `[${methodName}](${methodNameAnchor})`;
    }).join(', ');
    
    return [
        generateServiceNameHeader(serviceName),
        serviceDescription,
        methodList,
        methodContent
    ].join(lineBreaks());
}



function getMethodNames(serviceConfig) {
    const methods = serviceConfig.methods;
    const methodNames = Object.keys(methods);
    
    const privateMethods = methodNames.filter((method) => method[0] === '_').sort();
    const publicMethods = methodNames.filter((method) => method[0] !== '_').sort();
    
    return [...publicMethods, ...privateMethods];
}



/**
 *
 * @param serviceName
 * @param {'anchor'} [type]
 * @returns {string}
 */
function generateServiceNameHeader(serviceName, type) {
    if (type === 'anchor') {
        return `#${serviceName.toLowerCase()}`;
    } else {
        return `## ${serviceName}`;
    }
}



function generateMethodContent(methodName, methodConfig, {serviceName}) {
    const name = generateMethodNameHeader(serviceName, methodName);
    const description = methodConfig.description;
    const docs = (methodConfig.docs || '') + lineBreaks();
    
    return [name, description, docs].join(lineBreaks()) + lineBreaks();
}


function generateMethodNameHeader(serviceName, methodName, type) {
    if (type === 'anchor') {
        return `#${serviceName.toLowerCase()}${methodName.toLowerCase()}`;
    } else {
        return `### ${serviceName}.${methodName}`;
    }
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
