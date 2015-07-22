var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var babel = require('gulp-babel'); 
var rename = require('gulp-rename');

function exportType(moduleType, prefix) {
  prefix = prefix || '';
  return gulp.src('src/urlutil.js')
    .pipe(babel({
      modules: moduleType
    }))
    .pipe(rename(prefix + 'urlutil.js'))
    .pipe(gulp.dest('dist'));
}

gulp.task('babel-amd', function() {
  return exportType('amd');
});

gulp.task('babel-common', function() {
  return exportType('common', 'node-');
});

gulp.task('docs', function() {
  return gulp.src('src/**.js')
    .pipe(concat('README.md'))
    .pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
    .on('error', function(err){
        gutil.log('jsdoc2md failed:', err.message);
    })
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['babel-amd', 'babel-common', 'docs']);