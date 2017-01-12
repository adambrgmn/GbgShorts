require('dotenv').config();

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const { join, extname, parse } = require('path');
const exec = require('child_process').exec;
const del = require('del');
const Js = require('uglify-js');
const Css = require('clean-css');
const Html = require('html-minifier');

const src = join(__dirname, '..', 'src');
const build = join(__dirname, '..', 'build');

const bufferToString = (res) => Buffer.prototype.toString.call(res);
const readToString = (path) => fs.readFileAsync(path).then(bufferToString);

const minify = (path) => readToString(path)
  .then((string) => {
    switch (extname(path)) {
      case '.js':
        return Js.minify(string, { fromString: true }).code;
      case '.css':
        return new Css().minify(string).styles;
      case '.html':
        return Html.minify(string, {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          decodeEntities: true,
          removeAttributeQuotes: true,
        });
      default:
        throw new Error('Error minifying!');
    }
  })
  .then((minified) => {
    const { base } = parse(path);
    const buildPath = join(build, base);
    return fs.writeFileAsync(buildPath, minified);
  });

del(`${build}/*`)
  .then(() => fs.readdirAsync(src))
  .then((files) => {
    const mini = files.map((file) => minify(join(src, file)));
    return Promise.all(mini);
  })
  .then(() => {
    const { SSH_HOST, SSH_USERNAME, SSH_PASSWORD, SSH_PATH } = process.env;

    return new Promise((resolve, reject) => {
      exec(`scp -r ${build}/ ${SSH_USERNAME}@${SSH_HOST}:${SSH_PATH}`, (err, stdout, stderr) => {
        if (err) return reject(err);
        return resolve(true);
      });
    });
  })
  .then(() => console.log('All good and deployd!'))
  .catch(() => console.log('An error occured!'));
