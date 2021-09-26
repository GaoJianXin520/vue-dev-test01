const fs = require('fs');
const rollup = require('rollup');

let builds = require('./config').getAllBuilds();

build(builds);

function build() {
    let built = 0;
    const total = builds.length;
    const next = () => {
        buildEntry(builds[built]).then(() => {
            built++;
            if (built < total) {
                next();
            }
        }).catch(logError);
    }

    next()
}

function buildEntry (config) {
    const output = config.output;
    const { file, banner } = output;
    const isProd = /(min|prod)\.js$/.test(file);
    return rollup.rollup(config).then(bundle => bundle.generate(output)).then(({ output: [{ code }] }) => {
        return write(file, code);
    });
}

function write (dest, code, zip) {
    return new Promise((resolve, reject) => {
        function report(extra) {
            resolve();
        }
    
        fs.writeFile(dest, code, err => {
            if (err) return reject(err);
            report();
        });
    });
}

function logError(e) {
    console.log(e)
}