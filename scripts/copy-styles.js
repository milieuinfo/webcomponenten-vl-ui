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
    const installedComponents = [];
    fs.readdirSync('node_modules').forEach((dir) => {
        if (dir.indexOf('vl-ui') > -1) {
            installedComponents.push(dir);
        }
    });
    return installedComponents;
}

function getFileNames() {
    return getInstalledWebcomponentsDirnames().map(componentFilename => componentFilename.replace('-ui', ''));
}

function copyCss() {
    getInstalledWebcomponentsDirnames().forEach((dirname) => {
        const filename = dirname.replace('-ui', '');
        const source = path.join(__dirname, '..', 'node_modules/' + dirname + '/dist/style.css');
        const destination = filename + '.css';
        if (fs.existsSync(source)) {
            fs.copyFileSync(source, destination);
        }
    });
}

copyCss();
getFileNames().forEach(component => {
    replace('demo/' + component + '.html', "href=\"/src/style.css\"", "href=\"/" + component + ".css\"");
    replace('demo/' + component + '-demo.html', "href=\"/src/style.css\"", "href=\"/" + component + ".css\"");
});


