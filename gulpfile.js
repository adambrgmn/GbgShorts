/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const useref = require('gulp-useref');
const filter = require('gulp-filter');
const del = require('del');
const pump = require('pump');

const paths = {
  tmp: 'tmp',
  src: 'src',
  build: 'build',
  js: 'src/**/*.js',
  css: 'src/**/*.scss',
  html: 'src/index.html',
  tmp: 'tmp',
};

gulp.task('clean', () => del(paths.build));

gulp.task('js', ['clean'], () => pump([
  gulp.src(paths.js),
  babel(),
  uglify(),
  rev(),
  gulp.dest(paths.tmp),
]));

gulp.task('css', ['clean'], () => pump([
  gulp.src(paths.css),
  sass({ outputFormat: 'compressed' }).on('error', sass.logError),
  rev(),
  gulp.dest(paths.tmp),
]));

gulp.task('rev', ['js', 'css'], () => pump([
  gulp.src(['tmp/**/*.js', 'tmp/**/*.css']),
  rev(),
  gulp.dest(paths.build),
  rev.manifest(),
  gulp.dest(paths.build),
]));

gulp.task('html', ['rev'], () => pump([
  gulp.src(paths.html),
  revReplace({ manifest: gulp.src('build/rev-manifest.json') }),
  htmlmin({ collapseWhitespace: true }),
  gulp.dest(paths.build),
]));

gulp.task('default', ['html'], () => del('tmp'));
