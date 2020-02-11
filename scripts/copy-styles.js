const fs = require('fs');
const path = require('path');

function replace(file, search, replacement) {
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        const result = data.replace(search, replacement);
        fs.writeFileSync(file, result, 'utf8');
    }
}

function getInstalledWebcomponentsDirnames() {
    let installedComponents = [];
    fs.readdirSync('../node_modules').forEach((file) => {
        if (file.indexOf('vl-ui') > -1) {
            installedComponents.push(file);
        }
    });
    return installedComponents;
}

function getFileNames() {
    let fileNames = [];
    getInstalledWebcomponentsDirnames().forEach((componentFilename) => {
        fileNames.push(componentFilename.replace('-ui', ''));
    });
    return fileNames;
}

function copyCss() {
    getInstalledWebcomponentsDirnames().forEach((dirname) => {
        const filename = dirname.replace('-ui', '');
        const source = path.join(__dirname, '..', 'node_modules/' + dirname + '/style.css');
        const destination = '../' + filename + '.css';
        if (fs.existsSync(source)) {
            fs.copyFileSync(source, destination);
        }
    });
}

copyCss();
getFileNames().forEach(component => {
    replace('../demo/' + component + '.html', "/style.css", "/" + component + ".css");
});


