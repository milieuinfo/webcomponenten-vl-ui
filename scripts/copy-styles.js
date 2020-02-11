const fs = require('fs');
const path = require('path');

function replace(file, search, replacement) {
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        const result = data.replace(search, replacement);
        fs.writeFileSync(file, result, 'utf8');
    }
}

function getInstalledComponents() {
    let installedComponents = [];
    fs.readdirSync('../node_modules').forEach((file) => {
        if (file.indexOf('vl-ui') > -1) {
            installedComponents.push(file);
        }
    });
    return installedComponents;
}

function getFilesNames() {
    let fileNames = [];
    getInstalledComponents().forEach((componentFilename) => {
        fileNames.push(componentFilename.replace('-ui', ''));
    });
    return fileNames;
}

function copyCss() {
    getInstalledComponents().forEach((component) => {
        const source = path.join(__dirname, '..', 'node_modules/' + component + '/style.css');
        const destination = '../' + component + '.css';
        if (fs.existsSync(source)) {
            fs.copyFileSync(source, destination);
        }
    });
}

copyCss();
getFilesNames().forEach(component => {
    replace('../demo/' + component + '.html', "/style.css", "/" + component + ".css");
});


